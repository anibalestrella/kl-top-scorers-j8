// TopScorersJ8Mirrored.tsx
// Mirror variant of the Top Scorers card — player photo on the RIGHT,
// rankings list on the LEFT.  Rows are driven dynamically by the
// team name in each player's data (Google Sheets → Equipo column).

import { useContext } from "react";
import svgPaths from "../../imports/TopScorersJ8/svg-xisd0t2cvr";
import img00BackgroundKings from "../../imports/TopScorersJ8/224b424667b9b85f2bc0be8e830d8b0b4ff95106.png";
import imgPr0196841 from "../../imports/TopScorersJ8/20aefbee1957fcaad47138b872fb78491aee031a.png";
import imgPr0196842 from "../../imports/TopScorersJ8/738eaa29c666f1b50cad40e26301037c199b3343.png";
import { imgGroup, imgGroup1 } from "../../imports/TopScorersJ8/svg-fz1hg";
import {
  DEFAULT_TOP_SCORERS,
  PlayersContext,
  type TopScorerRow,
} from "../../imports/TopScorersJ8/players-context";
import { RankingRow } from "../../imports/TopScorersJ8/team-logos";

// ─────────────────────────────────────────────────────────────────────────────
// Static card sections (mirrored positions)
// ─────────────────────────────────────────────────────────────────────────────

/** Player photo panel — RIGHT side */
function Frame1Mirrored() {
  return (
    <div className="absolute bg-black h-[1350px] right-0 overflow-clip top-0 w-[440px]">
      <div className="absolute h-[2142px] left-[-462px] top-[-96px] w-[1428px]" data-name="PR019684 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPr0196841} />
      </div>
    </div>
  );
}

/** Dynamic rankings list — LEFT side */
function Frame2Mirrored() {
  const players = useContext(PlayersContext);
  return (
    <div className="absolute content-stretch flex flex-col gap-[17.226px] items-start left-[57px] top-[367px]">
      {players.map((player, i) => (
        <RankingRow key={i} player={player} />
      ))}
    </div>
  );
}

/** Adidas / Design logo — LEFT side */
function DesignMirrored() {
  return (
    <div className="absolute h-[95.01px] left-[57px] overflow-clip top-[1157px] w-[150.81px]" data-name="DESIGN">
      <div className="absolute contents inset-[0_0_0.54%_0]">
        <div className="absolute contents inset-[1%_0.05%_0_0.64%]">
          <div className="absolute contents inset-[1%_0.05%_0_0.64%]">
            <div className="absolute contents inset-[1%_0.05%_0_0.64%]">
              <div
                className="absolute inset-[1%_0.05%_0_0.64%] mask-position-[-0.96px_-0.95px,_0px_0px]"
                style={{ maskImage: `url('${imgGroup}'), url('${imgGroup1}')` }}
              >
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 149.78 94.06">
                  <g id="Group">
                    <path d={svgPaths.p3c1e6700} fill="var(--fill-0, white)" id="Vector" />
                    <path d={svgPaths.p33d9dc80} fill="var(--fill-0, white)" id="Vector_2" />
                    <path d={svgPaths.p282c8e80} fill="var(--fill-0, white)" id="Vector_3" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents inset-0">
      <div className="absolute bg-[rgba(217,217,217,0)] inset-0" />
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute inset-[29.62%_35.03%_37.57%_26.97%]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 145.134 72.9509">
        <g id="Group 3392">
          <g id="Vector">
            <path d={svgPaths.p262a3b80} fill="var(--fill-0, #FBB800)" />
            <path d={svgPaths.p88f470}   fill="var(--fill-0, #FBB800)" />
            <path d={svgPaths.p2b6b6e00} fill="var(--fill-0, #FBB800)" />
            <path d={svgPaths.p1b629100} fill="var(--fill-0, #FBB800)" />
            <path d={svgPaths.p20334800} fill="var(--fill-0, #FBB800)" />
            <path d={svgPaths.p3b4e2f80} fill="var(--fill-0, #FBB800)" />
            <path d={svgPaths.pcc6b410}  fill="var(--fill-0, #FBB800)" />
            <path d={svgPaths.p3bdb0e00} fill="var(--fill-0, #FBB800)" />
            <path d={svgPaths.p3b0d5580} fill="var(--fill-0, #FBB800)" />
            <path d={svgPaths.p82d5af2}  fill="var(--fill-0, #FBB800)" />
            <path d={svgPaths.p18efbc00} fill="var(--fill-0, #FBB800)" />
            <path d={svgPaths.p347b9a00} fill="var(--fill-0, #FBB800)" />
            <path d={svgPaths.p9910b00}  fill="var(--fill-0, #FBB800)" />
            <path d={svgPaths.p392cc800} fill="var(--fill-0, #FBB800)" />
            <path d={svgPaths.p15d1e700} fill="var(--fill-0, #FBB800)" />
            <path d={svgPaths.p3c5e7d80} fill="var(--fill-0, #FBB800)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

/** Bottom scrolling ticker */
function TickerText() {
  return (
    <>
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <span key={i} className="content-stretch flex gap-[20px] items-center shrink-0">
          <span className="font-['HeadingNow-45Medium'] leading-[normal] not-italic text-[32px] text-black tracking-[6.4px] uppercase whitespace-nowrap">
            kings league
          </span>
          <span className="font-['HeadingNow-45Medium'] leading-[normal] not-italic text-[32px] text-black tracking-[6.4px] uppercase whitespace-nowrap">
            spain
          </span>
          <svg fill="none" height="24" viewBox="0 0 28 24" width="28">
            <path d={svgPaths.p55fca00} fill="black" />
          </svg>
        </span>
      ))}
    </>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Root export
// ─────────────────────────────────────────────────────────────────────────────

export default function TopScorersJ8Mirrored({ players }: { players?: TopScorerRow[] } = {}) {
  return (
    <PlayersContext.Provider value={players ?? DEFAULT_TOP_SCORERS}>
      <div className="bg-black relative size-full" data-name="Top Scorers_J8_Mirrored">

        {/* Rotated background texture */}
        <div
          className="absolute flex h-[2493px] items-center justify-center left-[-520px] top-[-675px] w-[1832px]"
          style={{ "--transform-inner-width": "1185", "--transform-inner-height": "19" } as React.CSSProperties}
        >
          <div className="flex-none rotate-90">
            <div className="h-[1832px] relative w-[2493px]" data-name="00 Background/Kings">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img00BackgroundKings} />
            </div>
          </div>
        </div>

        {/* Player photo panel — RIGHT */}
        <Frame1Mirrored />

        {/* Secondary player image — RIGHT */}
        <div className="absolute h-[2119px] right-[-455px] top-[-96px] w-[1413px]" data-name="PR019684 2">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPr0196842} />
        </div>

        {/* Dynamic rankings list — LEFT */}
        <Frame2Mirrored />

        {/* "GOLEADORES" title — LEFT */}
        <p className="absolute font-['HeadingNow-37Extrabold'] leading-[normal] left-[58px] not-italic text-[#fbb800] text-[161.241px] text-left top-[155px] uppercase whitespace-nowrap">
          goleadores
        </p>

        {/* Design / Adidas logo — LEFT */}
        <DesignMirrored />

        {/* Kings League / ESP badge — LEFT */}
        <div className="absolute h-[222.303px] left-[186px] top-[-9.31px] w-[382px]" data-name="KINGS LEAGUE/ESP">
          <Group7 />
          <div className="absolute inset-[24.34%_77.5%_24.13%_0]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 85.9621 114.547">
              <g id="Vector">
                <path d={svgPaths.p35081000} fill="#FBB800" />
                <path d={svgPaths.p3711aa00} fill="var(--fill-0, black)" />
              </g>
            </svg>
          </div>
          <Group8 />
        </div>

        {/* Jornada label — LEFT */}
        <div
          className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex gap-[18px] items-center not-italic text-[#fbb800] text-[30px] uppercase whitespace-nowrap"
          style={{ left: "calc(50% - 366.5px)", top: "calc(50% + 417.5px)" }}
        >
          <p className="relative shrink-0 font-[Termina]">JORNADA</p>
          <p className="relative shrink-0 font-[Termina]">8</p>
        </div>

        {/* Bottom ticker — RIGHT-anchored (mirrored) */}
        <div
          className="translate-x-1/2 absolute bg-[#fbb800] bottom-0 content-stretch flex gap-[20px] items-center px-[10px] py-[14px]"
          style={{ right: "calc(50% + 250.59px)" }}
        >
          <TickerText />
        </div>

      </div>
    </PlayersContext.Provider>
  );
}
