import { useEffect, useState } from "react";
import { fetchSheet, parsePlayers, type Player } from "../lib/sheets";

export type TopScorersState = {
  players: Player[] | null;
  loading: boolean;
  error: string | null;
  fetchedAt: string | null;
};

/**
 * Fetch top scorers from /api/sheets on mount.
 * Returns null players while loading; consumers can fall back to a default set.
 */
export function useTopScorers(): TopScorersState {
  const [state, setState] = useState<TopScorersState>({
    players: null,
    loading: true,
    error: null,
    fetchedAt: null,
  });

  useEffect(() => {
    const controller = new AbortController();
    let cancelled = false;

    (async () => {
      try {
        const payload = await fetchSheet(controller.signal);
        if (cancelled) return;
        setState({
          players: parsePlayers(payload.values),
          loading: false,
          error: null,
          fetchedAt: payload.fetchedAt,
        });
      } catch (err) {
        if (cancelled || controller.signal.aborted) return;
        setState({
          players: null,
          loading: false,
          error: err instanceof Error ? err.message : String(err),
          fetchedAt: null,
        });
      }
    })();

    return () => {
      cancelled = true;
      controller.abort();
    };
  }, []);

  return state;
}
