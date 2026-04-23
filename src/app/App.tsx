import TopScorersJ from "../imports/TopScorersJ8/TopScorersJ8";
import TopScorersJ8Mirrored from "./components/TopScorersJ8Mirrored";
import { DEFAULT_TOP_SCORERS, type TopScorerRow } from "../imports/TopScorersJ8/players-context";
import { useTopScorers } from "../hooks/useTopScorers";

export default function App() {
  const { players, loading, error, fetchedAt } = useTopScorers();

  // Prefer live data; fall back to the bundled defaults so the design always
  // has something to render during the first paint or if the API fails.
  const liveOrDefault: TopScorerRow[] = players && players.length > 0
    ? players.slice(0, 7).map(({ rank, name, goals }) => ({ rank, name, goals }))
    : DEFAULT_TOP_SCORERS;

  return (
    <div className="min-h-screen bg-neutral-900 flex flex-col items-center gap-8 py-12 px-4">
      <header className="flex flex-col items-center gap-2">
        <h1 className="text-white uppercase tracking-widest text-sm opacity-50">
          Kings League — Top Scorers J8
        </h1>
        <StatusLine loading={loading} error={error} fetchedAt={fetchedAt} usingFallback={!players || players.length === 0} />
      </header>

      <div className="flex flex-wrap justify-center gap-12">
        {/* Original — player on LEFT */}
        <div className="flex flex-col items-center gap-3">
          <span className="text-neutral-400 text-xs uppercase tracking-widest">
            Original (player left)
          </span>
          <div className="relative overflow-hidden" style={{ width: 540, height: 675 }}>
            <div
              style={{
                width: 1080,
                height: 1350,
                transform: "scale(0.5)",
                transformOrigin: "top left",
              }}
            >
              <TopScorersJ players={liveOrDefault} />
            </div>
          </div>
        </div>

        {/* Mirrored — player on RIGHT */}
        <div className="flex flex-col items-center gap-3">
          <span className="text-neutral-400 text-xs uppercase tracking-widest">
            Mirrored (player right)
          </span>
          <div className="relative overflow-hidden" style={{ width: 540, height: 675 }}>
            <div
              style={{
                width: 1080,
                height: 1350,
                transform: "scale(0.5)",
                transformOrigin: "top left",
              }}
            >
              <TopScorersJ8Mirrored players={liveOrDefault} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatusLine({
  loading,
  error,
  fetchedAt,
  usingFallback,
}: {
  loading: boolean;
  error: string | null;
  fetchedAt: string | null;
  usingFallback: boolean;
}) {
  if (loading) {
    return (
      <span className="text-neutral-500 text-xs uppercase tracking-widest">
        Loading live data from Google Sheets…
      </span>
    );
  }
  if (error) {
    return (
      <span
        className="text-red-400 text-xs uppercase tracking-widest max-w-xl text-center"
        title={error}
      >
        Sheet fetch failed — showing built-in sample. ({error})
      </span>
    );
  }
  if (usingFallback) {
    return (
      <span className="text-amber-400 text-xs uppercase tracking-widest">
        Sheet returned no rows — showing built-in sample.
      </span>
    );
  }
  return (
    <span className="text-emerald-400 text-xs uppercase tracking-widest">
      Live from Google Sheets
      {fetchedAt ? ` · ${new Date(fetchedAt).toLocaleTimeString()}` : ""}
    </span>
  );
}
