// Shared React context for feeding player data into the two Figma-exported
// TopScorersJ8 components (original + mirrored).
//
// The components were exported by Figma with 7 hardcoded rows. Rather than
// rewrite the generated JSX, we expose a context so the rendered text comes
// from whatever data the app provides at runtime — while keeping the original
// values as a fallback when no Provider is present (e.g. design previews).

import { createContext, useContext } from "react";

export type TopScorerRow = { rank: number; name: string; goals: number };

export const DEFAULT_TOP_SCORERS: TopScorerRow[] = [
  { rank: 1, name: "Aleix martí", goals: 28 },
  { rank: 2, name: "jorge escobar", goals: 16 },
  { rank: 3, name: "gerard verge", goals: 15 },
  { rank: 4, name: "sergi gestí", goals: 14 },
  { rank: 5, name: "galde hugue", goals: 14 },
  { rank: 6, name: "adri espinar", goals: 13 },
  { rank: 7, name: "julen álvarez", goals: 13 },
];

export const PlayersContext = createContext<TopScorerRow[]>(DEFAULT_TOP_SCORERS);

export function usePlayer(index: number): TopScorerRow {
  const players = useContext(PlayersContext);
  return (
    players[index] ??
    DEFAULT_TOP_SCORERS[index] ?? { rank: index + 1, name: "", goals: 0 }
  );
}
