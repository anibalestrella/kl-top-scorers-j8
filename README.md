# Kings League — Top Scorers J8 · Google Sheets live data

A static Vite + React page (Figma-exported design) that renders the "Top
Scorers J8" graphic in both original and mirrored layouts, with the player
names and goal counts driven live from a Google Sheet. A Vercel serverless
function proxies the Google Sheets API so the API key stays off the client.

## Architecture

```
┌─────────────┐   fetch /api/sheets   ┌─────────────────────┐   API key   ┌────────────────┐
│  Browser    │ ───────────────────▶ │  Vercel Edge Fn     │ ──────────▶ │ Google Sheets  │
│  (Vite app) │ ◀─────────────────── │  api/sheets.ts      │ ◀────────── │      v4 API    │
└─────────────┘      JSON rows       └─────────────────────┘             └────────────────┘
```

- `api/sheets.ts` — Vercel **edge** function. Reads `GOOGLE_SHEETS_API_KEY` /
  `GOOGLE_SHEETS_ID` / `GOOGLE_SHEETS_RANGE` from env, calls the Sheets v4
  `values.get` endpoint, and returns `{ range, values, fetchedAt }`. Caches at
  the edge for 60 s (`stale-while-revalidate=300`).
- `src/lib/sheets.ts` — client fetcher + row-to-`Player` parser.
- `src/hooks/useTopScorers.ts` — React hook that fires on mount.
- `src/imports/TopScorersJ8/players-context.ts` — shared React Context that
  lets the two Figma-exported components read player data without rewriting
  their JSX tree.
- `src/app/App.tsx` — orchestrates the fetch, shows a small status line
  (loading / live / error), falls back to the bundled default dataset if the
  API is unreachable so the design is never blank.

## Expected sheet layout

Range fetched: `Sheet1!A1:D50` (override via `GOOGLE_SHEETS_RANGE`).

| A      | B       | C             | D       |
| ------ | ------- | ------------- | ------- |
| Rank   | Name    | Team (unused) | Goals   |
| 1      | Aleix … | Ultimate MC   | 28      |
| 2      | Jorge … | …             | 16      |
| …      | …       | …             | …       |

The parser is defensive: it auto-detects a header row, tolerates 3-column
sheets (skipping the team column), and re-sorts by goals desc. Only the top 7
rows are rendered — the layout has exactly seven slots.

## Local development

```bash
npm install
cp .env.example .env.local   # then paste your real GOOGLE_SHEETS_API_KEY
npx vercel dev               # serves Vite + /api/sheets together on :3000
```

Without `vercel dev`, plain `npm run dev` will run the UI but `/api/sheets`
will 404 — the status line will fall through to the built-in sample data.

## Deploy to Vercel

1. Push the repo to GitHub / GitLab.
2. Import the project in Vercel — it auto-detects Vite.
3. Add environment variables (Project → Settings → Environment Variables):
   - `GOOGLE_SHEETS_API_KEY` — API key from Google Cloud with "Google Sheets
     API" enabled. Restrict it to the Sheets API and your Vercel domain.
   - `GOOGLE_SHEETS_ID` — optional, defaults to the Kings League sheet.
   - `GOOGLE_SHEETS_RANGE` — optional, defaults to `Sheet1!A1:D50`.
4. Share the sheet as "Anyone with the link can view" (API keys can only reach
   public sheets; for private sheets, swap in a service account).
5. Deploy. `/api/sheets` becomes the proxy; the SPA calls it on mount.

## Scripts

- `npm run dev` — Vite dev server (UI only).
- `npm run build` — type-light Vite build → `dist/`.
- `npx vercel dev` — local simulation of the Vercel runtime (UI + functions).

## Notes on the Figma export

The Figma-exported components (`src/imports/TopScorersJ8/TopScorersJ8.tsx` and
`src/app/components/TopScorersJ8Mirrored.tsx`) were left structurally intact.
The seven name rows and seven score rows read from a React Context
(`PlayersContext`) via a tiny `usePlayer(index)` helper. Passing a `players`
prop to either component overrides the bundled defaults; passing nothing keeps
the original hardcoded design usable for static previews.
