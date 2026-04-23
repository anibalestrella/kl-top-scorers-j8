// Client-side helpers for talking to /api/sheets and turning the raw
// Google Sheets matrix into typed Player rows.

export type Player = {
  rank: number;
  name: string;
  team?: string;
  goals: number;
};

export type SheetsPayload = {
  range: string;
  values: string[][];
  fetchedAt: string;
};

const HEADER_KEYWORDS = [
  "rank",
  "pos",
  "position",
  "player",
  "name",
  "jugador",
  "nombre",
  "team",
  "equipo",
  "goals",
  "goles",
  "score",
];

/**
 * Fetch the raw sheet payload from the serverless proxy.
 * Throws on non-2xx responses.
 */
export async function fetchSheet(
  signal?: AbortSignal,
): Promise<SheetsPayload> {
  const res = await fetch("/api/sheets", { signal });
  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(
      `Sheet fetch failed: ${res.status} ${res.statusText}${body ? ` — ${body}` : ""}`,
    );
  }
  return (await res.json()) as SheetsPayload;
}

/**
 * Best-effort row → Player mapping.
 *
 * Expected layout (row 1 optional headers):
 *   A: Rank | B: Name | C: Team | D: Goals
 *
 * Also tolerates 3-column sheets (Rank | Name | Goals) by detecting which
 * column is numeric. Rows with no name or no numeric goals are dropped.
 */
export function parsePlayers(values: string[][]): Player[] {
  if (!values || values.length === 0) return [];

  // Drop a header row if the first row clearly isn't data.
  const firstRow = values[0].map((c) => String(c ?? "").trim().toLowerCase());
  const looksLikeHeader =
    firstRow.some((c) => HEADER_KEYWORDS.includes(c)) ||
    firstRow.every((c) => c !== "" && Number.isNaN(Number(c)));
  const dataRows = looksLikeHeader ? values.slice(1) : values;

  const players: Player[] = [];
  dataRows.forEach((row, idx) => {
    if (!row || row.every((c) => String(c ?? "").trim() === "")) return;

    // Pad short rows so col indexes are safe.
    const [a = "", b = "", c = "", d = ""] = row;

    // Pick the goals column: prefer D, fall back to C if D is blank/non-numeric.
    const dNum = toNumber(d);
    const cNum = toNumber(c);
    const hasD = dNum !== null;
    const hasC = cNum !== null;

    const goals = hasD ? dNum : hasC ? cNum : null;
    if (goals === null) return; // no numeric goals column → skip

    // Name is the first non-empty, non-rank-looking string.
    // If col A is a number (rank) and B is the name, use B.
    const aNum = toNumber(a);
    const name =
      (aNum !== null ? String(b).trim() : String(a).trim() || String(b).trim()) ||
      "";
    if (!name) return;

    const rank = aNum ?? idx + 1;
    const team =
      hasD && !hasC ? String(c).trim() || undefined : undefined; // team only makes sense when goals came from D

    players.push({ rank, name, team, goals });
  });

  // Sort by goals desc, then by rank asc — the sheet order is preserved if
  // goals all tie, and top-scorer order is guaranteed even if rank col is blank.
  players.sort((x, y) => y.goals - x.goals || x.rank - y.rank);

  // Re-stamp rank 1..N so the UI is stable even if the sheet has gaps.
  return players.map((p, i) => ({ ...p, rank: i + 1 }));
}

function toNumber(v: unknown): number | null {
  if (v === null || v === undefined || v === "") return null;
  if (typeof v === "number") return Number.isFinite(v) ? v : null;
  const n = Number(String(v).replace(/,/g, "").trim());
  return Number.isFinite(n) ? n : null;
}
