// Vercel serverless function: Google Sheets proxy.
// Keeps GOOGLE_SHEETS_API_KEY private (never exposed to the browser).
//
// Env vars required (set in Vercel project settings + .env.local for dev):
//   - GOOGLE_SHEETS_API_KEY : Google Cloud API key with "Google Sheets API" enabled
//   - GOOGLE_SHEETS_ID      : spreadsheet ID (defaults to the project's sheet)
//   - GOOGLE_SHEETS_RANGE   : A1 notation range (defaults to "Sheet1!A1:D50")
//
// The sheet must be "Anyone with the link can view" for an API-key-only fetch
// to succeed — the API key grants access to the API, not to private sheets.

export const config = { runtime: "edge" };

const DEFAULT_SHEET_ID = "1upLKRlbi6E4xq66xloy57KDE_DNCkjkVix9DYzZ0jTs";
const DEFAULT_RANGE = "Sheet1!A1:D50";

type SheetsResponse = {
  range?: string;
  majorDimension?: string;
  values?: string[][];
};

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== "GET" && req.method !== "HEAD") {
    return json({ error: "Method not allowed" }, 405);
  }

  const apiKey = process.env.GOOGLE_SHEETS_API_KEY;
  if (!apiKey) {
    return json(
      {
        error:
          "GOOGLE_SHEETS_API_KEY is not configured. Set it in Vercel project settings (or .env.local for local dev).",
      },
      500,
    );
  }

  const sheetId = process.env.GOOGLE_SHEETS_ID || DEFAULT_SHEET_ID;
  const range = process.env.GOOGLE_SHEETS_RANGE || DEFAULT_RANGE;

  const url =
    `https://sheets.googleapis.com/v4/spreadsheets/${encodeURIComponent(sheetId)}` +
    `/values/${encodeURIComponent(range)}` +
    `?majorDimension=ROWS&valueRenderOption=UNFORMATTED_VALUE&key=${apiKey}`;

  try {
    const upstream = await fetch(url, {
      // Edge runtime caches at the CDN layer via response headers below;
      // this inner fetch is just a fresh call.
      headers: { accept: "application/json" },
    });

    if (!upstream.ok) {
      const text = await upstream.text();
      return json(
        {
          error: `Google Sheets API returned ${upstream.status}`,
          details: safeParse(text),
        },
        upstream.status,
      );
    }

    const data = (await upstream.json()) as SheetsResponse;

    return new Response(
      JSON.stringify({
        range: data.range ?? range,
        values: data.values ?? [],
        fetchedAt: new Date().toISOString(),
      }),
      {
        status: 200,
        headers: {
          "content-type": "application/json; charset=utf-8",
          // Cache at the edge for 60s, serve stale for 5 min while revalidating.
          "cache-control":
            "public, s-maxage=60, stale-while-revalidate=300",
          "access-control-allow-origin": "*",
        },
      },
    );
  } catch (err) {
    return json(
      {
        error: "Failed to fetch from Google Sheets",
        details: err instanceof Error ? err.message : String(err),
      },
      502,
    );
  }
}

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store",
      "access-control-allow-origin": "*",
    },
  });
}

function safeParse(text: string): unknown {
  try {
    return JSON.parse(text);
  } catch {
    return text.slice(0, 500);
  }
}
