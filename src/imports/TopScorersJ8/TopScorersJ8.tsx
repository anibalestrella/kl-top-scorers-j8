import { useContext } from "react";
import svgPaths from "./svg-xisd0t2cvr";
import img00BackgroundKings from "./224b424667b9b85f2bc0be8e830d8b0b4ff95106.png";
import imgPr0196841 from "./20aefbee1957fcaad47138b872fb78491aee031a.png";
import imgPr0196842 from "./738eaa29c666f1b50cad40e26301037c199b3343.png";
import { imgGroup, imgGroup1 } from "./svg-fz1hg";
import {
  DEFAULT_TOP_SCORERS,
  PlayersContext,
  type TopScorerRow,
} from "./players-context";
import { RankingRow } from "./team-logos";

export { DEFAULT_TOP_SCORERS, type TopScorerRow };

// ─────────────────────────────────────────────────────────────────────────────
// Static card sections (unchanged from original Figma export)
// ─────────────────────────────────────────────────────────────────────────────

function Frame1() {
  return (
    <div className="absolute bg-black h-[1350px] left-0 overflow-clip top-0 w-[440px]">
      <div className="absolute h-[2142px] left-[-462px] top-[-96px] w-[1428px]" data-name="PR019684 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPr0196841} />
      </div>
    </div>
  );
}

/** The full ranked list — now driven by PlayersContext */
function Frame2() {
  const players = useContext(PlayersContext);

  return (
    <div className="absolute content-stretch flex flex-col gap-[17.226px] items-start left-[517px] top-[367px]">
      {players.map((player, i) => (
        <RankingRow key={i} player={player} />
      ))}
    </div>
  );
}

function Group6() {
  return (
    <div
      className="absolute inset-[1%_0.05%_0_0.64%] mask-position-[-0.96px_-0.95px,_0px_0px]"
      style={{ maskImage: `url('${imgGroup}'), url('${imgGroup1}')` }}
      data-name="Group"
    >
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 149.78 94.06">
        <g id="Group">
          <path d={svgPaths.p3c1e6700} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p33d9dc80} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p282c8e80} fill="var(--fill-0, white)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Group5() {
  return <div className="absolute contents inset-[1%_0.05%_0_0.64%]" data-name="Group"><Group6 /></div>;
}

function ClipPathGroup1() {
  return <div className="absolute contents inset-[1%_0.05%_0_0.64%]" data-name="Clip path group"><Group5 /></div>;
}

function Group4() {
  return <div className="absolute contents inset-[1%_0.05%_0_0.64%]" data-name="Group"><ClipPathGroup1 /></div>;
}

function ClipPathGroup() {
  return <div className="absolute contents inset-[0_0_0.54%_0]" data-name="Clip path group"><Group4 /></div>;
}

function Design() {
  return (
    <div className="absolute h-[95.01px] left-[872px] overflow-clip top-[1157px] w-[150.81px]" data-name="DESIGN">
      <ClipPathGroup />
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

function TextKingsLeagueItem() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0" data-name="text kings league">
      <div className="content-stretch flex items-center justify-center py-px relative shrink-0" data-name="KL">
        <p className="font-['HeadingNow-45Medium'] leading-[normal] not-italic relative shrink-0 text-[32px] text-black tracking-[6.4px] uppercase whitespace-nowrap">kings league</p>
      </div>
      <div className="content-stretch flex items-center justify-center py-px relative shrink-0" data-name="Country">
        <p className="font-['HeadingNow-45Medium'] leading-[normal] not-italic relative shrink-0 text-[32px] text-black tracking-[6.4px] uppercase whitespace-nowrap">spain</p>
      </div>
    </div>
  );
}

function KLSeparator() {
  return (
    <div className="h-[24px] relative shrink-0 w-[28px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 24">
        <g id="Frame 1">
          <path d={svgPaths.p55fca00} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Root export
// ─────────────────────────────────────────────────────────────────────────────

export default function TopScorersJ({ players }: { players?: TopScorerRow[] } = {}) {
  return (
    <PlayersContext.Provider value={players ?? DEFAULT_TOP_SCORERS}>
      <div className="bg-black relative size-full" data-name="Top Scorers_J8">
        {/* Rotated background image */}
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

        {/* Player photo panel (left) */}
        <Frame1 />

        {/* Secondary player image */}
        <div className="absolute h-[2119px] left-[-455px] top-[-96px] w-[1413px]" data-name="PR019684 2">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPr0196842} />
        </div>

        {/* Dynamic rankings list */}
        <Frame2 />

        {/* "GOLEADORES" title */}
        <p className="-translate-x-full absolute font-['HeadingNow-37Extrabold:Regular',sans-serif] leading-[normal] left-[calc(50%+482px)] not-italic text-[#fbb800] text-[161.241px] text-right top-[197px] uppercase whitespace-nowrap">
          goleadores
        </p>

        {/* Design credit watermark */}
        <Design />

        {/* Jornada label */}
        <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex font-['Termina:Medium',sans-serif] gap-[18px] items-center leading-[normal] left-[calc(50%+366.5px)] not-italic text-[#fbb800] text-[30px] top-[calc(50%+417.5px)] uppercase whitespace-nowrap" data-name="UI GLOBAL/Social Media/League country">
          <p className="relative shrink-0 font-[Termina]">JORNADA</p>
          <p className="relative shrink-0 font-[Termina]">8</p>
        </div>

        {/* Kings League / ESP header badge */}
        <div className="absolute h-[222.303px] left-[512px] top-[-9.31px] w-[382px]" data-name="KINGS LEAGUE/ESP">
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

        {/* Bottom scrolling banner */}
        <div
          className="-translate-x-1/2 absolute bg-[#fbb800] bottom-0 content-stretch flex gap-[20px] items-center left-[calc(50%+250.59px)] px-[10px] py-[14px]"
          data-name="UI GLOBAL/Social Media/Line KL"
        >
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="contents">
              <TextKingsLeagueItem />
              <KLSeparator />
            </div>
          ))}
          <TextKingsLeagueItem />
        </div>
      </div>
    </PlayersContext.Provider>
  );
}
