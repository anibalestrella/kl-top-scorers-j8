import svgPaths from "../../imports/TopScorersJ8/svg-xisd0t2cvr";
import img00BackgroundKings from "../../imports/TopScorersJ8/224b424667b9b85f2bc0be8e830d8b0b4ff95106.png";
import imgPr0196841 from "../../imports/TopScorersJ8/20aefbee1957fcaad47138b872fb78491aee031a.png";
import imgPr0196842 from "../../imports/TopScorersJ8/738eaa29c666f1b50cad40e26301037c199b3343.png";
import {
  imgGroup,
  imgGroup1,
} from "../../imports/TopScorersJ8/svg-fz1hg";
import {
  DEFAULT_TOP_SCORERS,
  PlayersContext,
  usePlayer,
  type TopScorerRow,
} from "../../imports/TopScorersJ8/players-context";

// Player background panel — now on the RIGHT
function Frame1Mirrored() {
  return (
    <div className="absolute bg-black h-[1350px] right-0 overflow-clip top-0 w-[440px]">
      <div
        className="absolute h-[2142px] left-[-462px] top-[-96px] w-[1428px]"
        data-name="PR019684 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={imgPr0196841}
        />
      </div>
    </div>
  );
}

// ── Ranking row inner components (unchanged) ──────────────────────────────────

function Frame3() {
  const p = usePlayer(0);
  return (
    <div className="absolute bg-[#73233e] content-stretch flex inset-[0_18.3%_0_18.95%] items-center justify-center px-[33.06px]">
      <p className="font-['HeadingNow-45Medium:Regular' ] leading-[normal] not-italic relative shrink-0 text-[37.03px] text-white uppercase whitespace-nowrap font-[HeadingNow-45Medium] text-[56px] text-left">
        {p.name}
      </p>
    </div>
  );
}
function Frame4() {
  const p = usePlayer(0);
  return (
    <div className="absolute bg-white content-stretch flex inset-[0_0_0_81.7%] items-center justify-center">
      <p className="font-[HeadingNow-46Bold] leading-[normal] not-italic relative shrink-0 text-[84.63px] text-black uppercase whitespace-nowrap font-[HeadingNow-46Bold]">
        {p.goals}
      </p>
    </div>
  );
}
function Frame5() {
  const p = usePlayer(1);
  return (
    <div className="absolute bg-[#805de5] content-stretch flex inset-[0_18.3%_0_18.95%] items-center justify-center px-[33.06px]">
      <p className="font-['HeadingNow-45Medium:Regular' ] leading-[normal] not-italic relative shrink-0 text-[37.03px] text-center text-white uppercase whitespace-nowrap font-[HeadingNow-45Medium] text-[56px]">
        {p.name}
      </p>
    </div>
  );
}
function Frame6() {
  const p = usePlayer(1);
  return (
    <div className="absolute bg-white content-stretch flex inset-[0_0_0_81.7%] items-center justify-center">
      <p className="font-[HeadingNow-46Bold] leading-[normal] not-italic relative shrink-0 text-[84.63px] text-black uppercase whitespace-nowrap">
        {p.goals}
      </p>
    </div>
  );
}

function Group() {
  return (
    <div
      className="absolute inset-[5.47%_10.58%_5.43%_10.61%]"
      data-name="Group"
    >
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 65.6528 74.2337"
      >
        <g id="Group">
          <path
            d={svgPaths.p4798900}
            fill="var(--fill-0, #030203)"
            id="Vector"
          />
          <path
            d={svgPaths.pa71e600}
            fill="var(--fill-0, #FDE253)"
            id="Vector_2"
          />
          <g id="Group_2">
            <path
              d={svgPaths.p41fc000}
              fill="var(--fill-0, #452F83)"
              id="Vector_3"
            />
            <path
              d={svgPaths.pb393f80}
              fill="var(--fill-0, #FDE253)"
              id="Vector_4"
            />
          </g>
          <path
            d={svgPaths.p16eecf00}
            fill="var(--fill-0, #6F569D)"
            id="Vector_5"
          />
          <path
            d={svgPaths.p39abaf80}
            fill="var(--fill-0, white)"
            id="Vector_6"
          />
          <g id="Group_3">
            <path
              d={svgPaths.p24a05b00}
              fill="var(--fill-0, white)"
              id="Vector_7"
            />
            <path
              d={svgPaths.p3b2fcf00}
              fill="var(--fill-0, white)"
              id="Vector_8"
            />
          </g>
          <g id="Group_4">
            <path
              d={svgPaths.p31a0600}
              fill="var(--fill-0, white)"
              id="Vector_9"
            />
            <path
              d={svgPaths.p5856100}
              fill="var(--fill-0, white)"
              id="Vector_10"
            />
          </g>
          <g id="Group_5">
            <path
              d={svgPaths.p18a3dbf0}
              fill="var(--fill-0, white)"
              id="Vector_11"
            />
            <path
              d={svgPaths.pcf76c40}
              fill="var(--fill-0, white)"
              id="Vector_12"
            />
          </g>
          <g id="Group_6">
            <g id="Group_7">
              <path
                d={svgPaths.p17dbda00}
                fill="var(--fill-0, #030203)"
                id="Vector_13"
              />
              <path
                d={svgPaths.p1607daf2}
                fill="var(--fill-0, #FDE253)"
                id="Vector_14"
              />
            </g>
            <path
              d={svgPaths.p22e7cd00}
              fill="var(--fill-0, #452F83)"
              id="Vector_15"
            />
            <path
              d={svgPaths.p28c44180}
              fill="url(#paint0_linear_1_1355)"
              id="Vector_16"
            />
            <path
              d={svgPaths.p36bc6600}
              fill="url(#paint1_linear_1_1355)"
              id="Vector_17"
            />
            <path
              d={svgPaths.p1482c200}
              fill="url(#paint2_linear_1_1355)"
              id="Vector_18"
            />
            <path
              d={svgPaths.p23d0c000}
              fill="url(#paint3_linear_1_1355)"
              id="Vector_19"
            />
            <path
              d={svgPaths.p2f9fa700}
              fill="url(#paint4_linear_1_1355)"
              id="Vector_20"
            />
            <path
              d={svgPaths.p8a62600}
              fill="url(#paint5_linear_1_1355)"
              id="Vector_21"
            />
            <path
              d={svgPaths.pc17ef80}
              fill="url(#paint6_linear_1_1355)"
              id="Vector_22"
            />
          </g>
        </g>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_1_1355"
            x1="17.9138"
            x2="15.7323"
            y1="11.9307"
            y2="2.57531"
          >
            <stop offset="0.36" stopColor="white" />
            <stop offset="0.5" stopColor="#DBD5E6" />
            <stop offset="0.8" stopColor="#8D7AB1" />
            <stop offset="0.94" stopColor="#6F569D" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint1_linear_1_1355"
            x1="10.5336"
            x2="6.14799"
            y1="15.032"
            y2="2.90451"
          >
            <stop offset="0.32" stopColor="white" />
            <stop offset="0.38" stopColor="#F6F5F9" />
            <stop offset="0.47" stopColor="#E1DBEA" />
            <stop offset="0.59" stopColor="#BDB1D2" />
            <stop offset="0.73" stopColor="#8C78B1" />
            <stop offset="0.8" stopColor="#6F569D" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint2_linear_1_1355"
            x1="25.4912"
            x2="25.6945"
            y1="10.4914"
            y2="1.44579"
          >
            <stop offset="0.32" stopColor="white" />
            <stop offset="0.39" stopColor="#F7F6F9" />
            <stop offset="0.51" stopColor="#E2DDEB" />
            <stop offset="0.65" stopColor="#C0B6D4" />
            <stop offset="0.82" stopColor="#927FB5" />
            <stop offset="0.94" stopColor="#6F569D" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint3_linear_1_1355"
            x1="33.3493"
            x2="33.3493"
            y1="13.8961"
            y2="1.69113"
          >
            <stop offset="0.49" stopColor="white" />
            <stop offset="0.55" stopColor="#F7F6F9" />
            <stop offset="0.64" stopColor="#E2DDEB" />
            <stop offset="0.76" stopColor="#C0B6D4" />
            <stop offset="0.9" stopColor="#927FB5" />
            <stop offset="1" stopColor="#6F569D" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint4_linear_1_1355"
            x1="39.881"
            x2="39.881"
            y1="14.7417"
            y2="1.79765"
          >
            <stop offset="0.45" stopColor="white" />
            <stop offset="0.51" stopColor="#F7F6F9" />
            <stop offset="0.62" stopColor="#E2DDEB" />
            <stop offset="0.75" stopColor="#C0B6D4" />
            <stop offset="0.9" stopColor="#927FB5" />
            <stop offset="1" stopColor="#6F569D" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint5_linear_1_1355"
            x1="46.0836"
            x2="48.7686"
            y1="15.813"
            y2="1.54589"
          >
            <stop offset="0.47" stopColor="white" />
            <stop offset="0.53" stopColor="#F9F9FB" />
            <stop offset="0.6" stopColor="#EBE8F1" />
            <stop offset="0.69" stopColor="#D4CDE2" />
            <stop offset="0.78" stopColor="#B3A6CB" />
            <stop offset="0.88" stopColor="#8A76AF" />
            <stop offset="0.94" stopColor="#6F569D" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint6_linear_1_1355"
            x1="56.1388"
            x2="58.1267"
            y1="19.3885"
            y2="2.63975"
          >
            <stop offset="0.46" stopColor="white" />
            <stop offset="0.53" stopColor="#FBFAFC" />
            <stop offset="0.6" stopColor="#F1EEF5" />
            <stop offset="0.66" stopColor="#E0DAEA" />
            <stop offset="0.73" stopColor="#C8BED9" />
            <stop offset="0.8" stopColor="#A99AC4" />
            <stop offset="0.87" stopColor="#836EAB" />
            <stop offset="0.91" stopColor="#6F569D" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
function Group2() {
  return (
    <div
      className="absolute inset-[22.84%_26.55%_17.57%_26.58%]"
      data-name="Group"
    >
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 39.0515 49.6461"
      >
        <g id="Group">
          <path
            d={svgPaths.p24c72b80}
            fill="var(--fill-0, #030203)"
            id="Vector"
          />
          <path
            d={svgPaths.p23ea2e00}
            fill="var(--fill-0, #6F569D)"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}
function Group3() {
  return (
    <div
      className="absolute inset-[24.58%_28.12%_18.47%_28.14%]"
      data-name="Group"
    >
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 36.4375 47.4497"
      >
        <g id="Group">
          <path
            d={svgPaths.p3a17d790}
            fill="var(--fill-0, #E5D89E)"
            id="Vector"
          />
          <path
            d={svgPaths.pd084c00}
            fill="var(--fill-0, #E5D89E)"
            id="Vector_2"
          />
          <g id="Group_2">
            <path
              d={svgPaths.p374ebb0}
              fill="url(#paint0_linear_1_1274)"
              id="Vector_3"
            />
            <path
              d={svgPaths.p3aa4e780}
              fill="var(--fill-0, white)"
              id="Vector_4"
            />
            <path
              d={svgPaths.pec78520}
              fill="var(--fill-0, white)"
              id="Vector_5"
            />
            <path
              d={svgPaths.p3c338170}
              fill="var(--fill-0, white)"
              id="Vector_6"
            />
            <path
              d={svgPaths.pc89900}
              fill="var(--fill-0, white)"
              id="Vector_7"
            />
            <path
              d={svgPaths.p35f6e200}
              fill="var(--fill-0, white)"
              id="Vector_8"
            />
            <path
              d={svgPaths.p22c52080}
              fill="var(--fill-0, white)"
              id="Vector_9"
            />
            <path
              d={svgPaths.p288ec400}
              fill="var(--fill-0, white)"
              id="Vector_10"
            />
            <path
              d={svgPaths.p6679700}
              fill="var(--fill-0, white)"
              id="Vector_11"
            />
            <path
              d={svgPaths.pe0858c0}
              fill="var(--fill-0, white)"
              id="Vector_12"
            />
            <path
              d={svgPaths.p39b7b480}
              fill="var(--fill-0, #6A539A)"
              id="Vector_13"
            />
            <path
              d={svgPaths.p35bcb880}
              fill="var(--fill-0, white)"
              id="Vector_14"
            />
            <path
              d={svgPaths.p218d6480}
              fill="var(--fill-0, white)"
              id="Vector_15"
            />
            <path
              d={svgPaths.p242e3500}
              fill="var(--fill-0, #6A539A)"
              id="Vector_16"
            />
            <path
              d={svgPaths.p38949a00}
              fill="var(--fill-0, white)"
              id="Vector_17"
            />
            <path
              d={svgPaths.p6a7900}
              fill="var(--fill-0, white)"
              id="Vector_18"
            />
            <path
              d={svgPaths.p13335140}
              fill="var(--fill-0, white)"
              id="Vector_19"
            />
            <path
              d={svgPaths.p18f48200}
              fill="var(--fill-0, white)"
              id="Vector_20"
            />
            <path
              d={svgPaths.p1c8ab800}
              fill="var(--fill-0, white)"
              id="Vector_21"
            />
            <path
              d={svgPaths.pc581880}
              fill="var(--fill-0, white)"
              id="Vector_22"
            />
            <path
              d={svgPaths.p1c00cf00}
              fill="var(--fill-0, white)"
              id="Vector_23"
            />
            <path
              d={svgPaths.p21e6400}
              fill="var(--fill-0, white)"
              id="Vector_24"
            />
            <path
              d={svgPaths.p27bd0c00}
              fill="var(--fill-0, #6A539A)"
              id="Vector_25"
            />
            <path
              d={svgPaths.p2fa34580}
              fill="var(--fill-0, #6A539A)"
              id="Vector_26"
            />
          </g>
          <g id="Group_3">
            <path
              d={svgPaths.p1ad54100}
              fill="var(--fill-0, #E3B23B)"
              id="Vector_27"
            />
            <path
              d={svgPaths.p2bddc200}
              fill="var(--fill-0, #8C388C)"
              id="Vector_28"
            />
            <path
              d={svgPaths.p27feab80}
              fill="var(--fill-0, #8C388C)"
              id="Vector_29"
            />
            <path
              d={svgPaths.p8411400}
              fill="var(--fill-0, #8C388C)"
              id="Vector_30"
            />
            <path
              d={svgPaths.p1e8749a0}
              fill="var(--fill-0, #8C388C)"
              id="Vector_31"
            />
            <path
              d={svgPaths.p16a44200}
              fill="var(--fill-0, #8C388C)"
              id="Vector_32"
            />
          </g>
          <g id="Group_4">
            <path
              d={svgPaths.p350541f0}
              fill="var(--fill-0, #8C388C)"
              id="Vector_33"
            />
            <path
              d={svgPaths.p21cbb400}
              fill="var(--fill-0, #8C388C)"
              id="Vector_34"
            />
            <path
              d={svgPaths.p1211ed00}
              fill="var(--fill-0, #8C388C)"
              id="Vector_35"
            />
            <path
              d={svgPaths.p1861b00}
              fill="var(--fill-0, #8C388C)"
              id="Vector_36"
            />
            <path
              d={svgPaths.pe2a900}
              fill="var(--fill-0, #E3B23B)"
              id="Vector_37"
            />
            <path
              d={svgPaths.p23304100}
              fill="var(--fill-0, #8C388C)"
              id="Vector_38"
            />
          </g>
        </g>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_1_1274"
            x1="18.2233"
            x2="18.2233"
            y1="28.6892"
            y2="3.6015"
          >
            <stop offset="0.22" stopColor="white" />
            <stop offset="0.25" stopColor="#FBFAFC" />
            <stop offset="0.27" stopColor="#F1EEF5" />
            <stop offset="0.3" stopColor="#E0DAE9" />
            <stop offset="0.33" stopColor="#C7BED9" />
            <stop offset="0.35" stopColor="#A899C4" />
            <stop offset="0.38" stopColor="#836EAA" />
            <stop offset="0.39" stopColor="#6F569D" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
function Group1() {
  return (
    <div
      className="absolute contents inset-[22.84%_26.55%_17.57%_26.58%]"
      data-name="Group"
    >
      <Group2 />
      <Group3 />
    </div>
  );
}
function Group9() {
  return (
    <div className="absolute contents inset-[5.47%_10.58%_5.43%_10.61%]">
      <Group />
      <Group1 />
    </div>
  );
}

function Frame7() {
  const p = usePlayer(2);
  return (
    <div className="absolute bg-[#5c00b7] content-stretch flex inset-[0_18.3%_0_18.95%] items-center justify-center px-[33.06px]">
      <p className="font-['HeadingNow-45Medium:Regular' ] leading-[normal] not-italic relative shrink-0 text-[39.67px] text-center text-white uppercase whitespace-nowrap font-[HeadingNow-45Medium] text-[56px]">
        {p.name}
      </p>
    </div>
  );
}
function Frame8() {
  const p = usePlayer(2);
  return (
    <div className="absolute bg-white content-stretch flex inset-[0_0_0_81.7%] items-center justify-center">
      <p className="font-[HeadingNow-46Bold] leading-[normal] not-italic relative shrink-0 text-[84.63px] text-black uppercase whitespace-nowrap">
        {p.goals}
      </p>
    </div>
  );
}

function Layer() {
  return (
    <div
      className="absolute inset-[3.75%_18.19%_3.72%_18.23%]"
      data-name="Layer_1"
    >
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 52.9729 77.0864"
      >
        <g clipPath="url(#clip0_1_1317)" id="Layer_1">
          <path
            d={svgPaths.p2110e200}
            fill="var(--fill-0, white)"
            id="Vector"
          />
          <path
            d={svgPaths.p31c22e80}
            fill="var(--fill-0, #F7378D)"
            id="Vector_2"
          />
          <path
            d={svgPaths.p4048b00}
            fill="var(--fill-0, #F7378D)"
            id="Vector_3"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_1317">
            <rect
              fill="white"
              height="77.0864"
              width="52.9729"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame9() {
  const p = usePlayer(3);
  return (
    <div className="absolute bg-[#ff5a00] content-stretch flex inset-[0_18.3%_0_18.95%] items-center justify-center px-[33.06px]">
      <p className="font-['HeadingNow-45Medium:Regular' ] leading-[normal] not-italic relative shrink-0 text-[34.7px] text-center text-white uppercase whitespace-nowrap font-[HeadingNow-45Medium] text-[56px]">
        {p.name}
      </p>
    </div>
  );
}
function Frame10() {
  const p = usePlayer(3);
  return (
    <div className="absolute bg-white content-stretch flex inset-[0_0_0_81.7%] items-center justify-center">
      <p className="font-[HeadingNow-46Bold] leading-[normal] not-italic relative shrink-0 text-[84.63px] text-black uppercase whitespace-nowrap">
        {p.goals}
      </p>
    </div>
  );
}
function Frame11() {
  const p = usePlayer(4);
  return (
    <div className="absolute bg-[#2810fc] content-stretch flex inset-[0_18.3%_0_18.95%] items-center justify-center px-[33.06px]">
      <p className="font-['HeadingNow-46Bold'] leading-[normal] not-italic relative shrink-0 text-[56px] text-center text-white uppercase whitespace-nowrap">
        {p.name}
      </p>
    </div>
  );
}
function Frame12() {
  const p = usePlayer(4);
  return (
    <div className="absolute bg-white content-stretch flex inset-[0_0_0_81.7%] items-center justify-center">
      <p className="font-[HeadingNow-46Bold] leading-[normal] not-italic relative shrink-0 text-[84.63px] text-black uppercase whitespace-nowrap">
        {p.goals}
      </p>
    </div>
  );
}
function Frame13() {
  const p = usePlayer(5);
  return (
    <div className="absolute bg-[#575757] content-stretch flex inset-[0_18.3%_0_18.95%] items-center justify-center px-[33.06px]">
      <p className="font-['HeadingNow-45Medium:Regular' ] leading-[normal] not-italic relative shrink-0 text-[37.03px] text-center text-white uppercase whitespace-nowrap font-[HeadingNow-46Bold] text-[56px]">
        {p.name}
      </p>
    </div>
  );
}
function Frame14() {
  const p = usePlayer(5);
  return (
    <div className="absolute bg-white content-stretch flex inset-[0_0_0_81.7%] items-center justify-center">
      <p className="font-[HeadingNow-46Bold] leading-[normal] not-italic relative shrink-0 text-[84.63px] text-black uppercase whitespace-nowrap">
        {p.goals}
      </p>
    </div>
  );
}
function Frame15() {
  const p = usePlayer(6);
  return (
    <div className="absolute bg-[#f881c8] content-stretch flex inset-[0_18.3%_0_18.95%] items-center justify-center px-[33.06px]">
      <p className="font-['HeadingNow-45Medium:Regular' ] leading-[normal] not-italic relative shrink-0 text-[39.67px] text-center text-white uppercase whitespace-nowrap font-[HeadingNow-45Medium] text-[56px]">
        {p.name}
      </p>
    </div>
  );
}
function Frame16() {
  const p = usePlayer(6);
  return (
    <div className="absolute bg-white content-stretch flex inset-[0_0_0_81.7%] items-center justify-center">
      <p className="font-[HeadingNow-46Bold] leading-[normal] not-italic relative shrink-0 text-[84.63px] text-black uppercase whitespace-nowrap">
        {p.goals}
      </p>
    </div>
  );
}

// Rankings list — now positioned on the LEFT side (left-57 mirrored from left-517)
function Frame2Mirrored() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[17.226px] items-start left-[57px] top-[367px]">
      {/* Row 1 – Aleix Martí */}
      <div
        className="h-[83.312px] relative shrink-0 w-[505.825px]"
        data-name="01 SPAIN/KINGS/Social Media/Ranking"
      >
        <Frame3 />
        <Frame4 />
        <div className="absolute inset-[0_76.21%_0_0] overflow-clip">
          <div className="absolute inset-[0_0_0_9.89%]">
            <svg
              className="absolute block inset-0 size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 108.438 83.3123"
            >
              <path
                d={svgPaths.p1f5df9c0}
                fill="var(--fill-0, #73233E)"
                id="Rectangle 66"
              />
            </svg>
          </div>
          <div className="absolute inset-[0_83.52%_0_0]">
            <svg
              className="absolute block inset-0 size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 19.8363 83.3123"
            >
              <path
                d={svgPaths.p28c04500}
                fill="var(--fill-0, #401322)"
                id="Rectangle 67"
              />
            </svg>
          </div>
          <div className="absolute inset-[0_9.89%_0_20.88%]">
            <div className="absolute inset-[1.8%_7.74%_1.86%_7.7%]">
              <svg
                className="absolute block inset-0 size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 70.4528 80.2667"
              >
                <g id="KL/ESP/ULT/COLOR">
                  <path d={svgPaths.p3a3bdf80} fill="#C4914F" />
                  <path d={svgPaths.p29bb6500} fill="black" />
                  <path d={svgPaths.pbef8a00} fill="#C4914F" />
                  <path d={svgPaths.p218df400} fill="#C4914F" />
                  <path d={svgPaths.p3c9aace0} fill="#C4914F" />
                  <path d={svgPaths.p21f34e00} fill="#C4914F" />
                  <path d={svgPaths.p2f3793c0} fill="#C4914F" />
                  <path d={svgPaths.p8f0a580} fill="#C4914F" />
                  <path
                    d={svgPaths.p3ae42080}
                    fill="var(--fill-0, #73233E)"
                  />
                  <path
                    d={svgPaths.p38284972}
                    fill="var(--fill-0, #73233E)"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Row 2 – Jorge Escobar */}
      <div
        className="h-[83.312px] relative shrink-0 w-[505.825px]"
        data-name="01 SPAIN/KINGS/Social Media/Ranking"
      >
        <Frame5 />
        <Frame6 />
        <div className="absolute inset-[0_76.21%_0_0] overflow-clip">
          <div className="absolute inset-[0_0_0_9.89%]">
            <svg
              className="absolute block inset-0 size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 108.438 83.3123"
            >
              <path
                d={svgPaths.p1f5df9c0}
                fill="var(--fill-0, #805DE5)"
                id="Rectangle 66"
              />
            </svg>
          </div>
          <div className="absolute inset-[0_83.52%_0_0]">
            <svg
              className="absolute block inset-0 size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 19.8363 83.3123"
            >
              <path
                d={svgPaths.p28c04500}
                fill="var(--fill-0, #4D318A)"
                id="Rectangle 67"
              />
            </svg>
          </div>
          <div className="absolute inset-[-0.25%_10.68%_0.25%_20.09%]">
            <Group9 />
          </div>
        </div>
      </div>

      {/* Row 3 – Gerard Verge */}
      <div
        className="h-[83.312px] relative shrink-0 w-[505.825px]"
        data-name="01 SPAIN/KINGS/Social Media/Ranking"
      >
        <Frame7 />
        <Frame8 />
        <div className="absolute inset-[0_76.21%_0_0] overflow-clip">
          <div className="absolute inset-[0_0_0_9.89%]">
            <svg
              className="absolute block inset-0 size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 108.438 83.3123"
            >
              <path
                d={svgPaths.p1f5df9c0}
                fill="var(--fill-0, #5C00B7)"
                id="Rectangle 66"
              />
            </svg>
          </div>
          <div className="absolute inset-[0_83.52%_0_0]">
            <svg
              className="absolute block inset-0 size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 19.8363 83.3123"
            >
              <path
                d={svgPaths.p28c04500}
                fill="var(--fill-0, #3F007D)"
                id="Rectangle 67"
              />
            </svg>
          </div>
          <div className="-translate-y-1/2 absolute h-[83.312px] left-[20.33%] right-[10.44%] top-1/2">
            <Layer />
          </div>
        </div>
      </div>

      {/* Row 4 – Sergi Gestí */}
      <div
        className="h-[83.312px] relative shrink-0 w-[505.825px]"
        data-name="01 SPAIN/KINGS/Social Media/Ranking"
      >
        <Frame9 />
        <Frame10 />
        <div className="absolute inset-[0_76.21%_0_0] overflow-clip">
          <div className="absolute inset-[0_0_0_9.89%]">
            <svg
              className="absolute block inset-0 size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 108.438 83.3123"
            >
              <path
                d={svgPaths.p1f5df9c0}
                fill="var(--fill-0, #FF5A00)"
                id="Rectangle 66"
              />
            </svg>
          </div>
          <div className="absolute inset-[0_83.52%_0_0]">
            <svg
              className="absolute block inset-0 size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 19.8363 83.3123"
            >
              <path
                d={svgPaths.p28c04500}
                fill="var(--fill-0, #BA4200)"
                id="Rectangle 67"
              />
            </svg>
          </div>
          <div className="absolute inset-[0_9.89%_0_20.88%]">
            <div className="absolute inset-[3.75%_17.75%_3.74%_17.75%]">
              <svg
                className="absolute block inset-0 size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 53.7405 77.0729"
              >
                <g id="KL/ESP/SAY/COLOR">
                  <path d={svgPaths.p349356c0} fill="#252E5B" />
                  <path d={svgPaths.pe5f200} fill="white" />
                  <path d={svgPaths.p37eeda00} fill="#F6A018" />
                  <path d={svgPaths.p1c8c2e00} fill="#F4941D" />
                  <path d={svgPaths.p11def00} fill="white" />
                  <path d={svgPaths.p2d608a00} fill="white" />
                  <path d={svgPaths.p1de46700} fill="white" />
                  <path d={svgPaths.p18f8d300} fill="white" />
                  <path d={svgPaths.p1e3e7000} fill="white" />
                  <path d={svgPaths.p5d9f0c0} fill="white" />
                  <path d={svgPaths.p3fe0ca00} fill="white" />
                  <path d={svgPaths.p2f8addc} fill="white" />
                  <path d={svgPaths.p12d06af0} fill="white" />
                  <path d={svgPaths.p29b98a44} fill="white" />
                  <path d={svgPaths.p3825800} fill="white" />
                  <path d={svgPaths.pa9b2b00} fill="white" />
                  <path d={svgPaths.p3870ab80} fill="white" />
                  <path d={svgPaths.p2fd60e00} fill="#E36C24" />
                  <path d={svgPaths.p1dcd5f80} fill="#A61916" />
                  <path d={svgPaths.p312cf300} fill="#A61916" />
                  <path d={svgPaths.p2a314500} fill="#A61916" />
                  <path
                    d={svgPaths.p247d4300}
                    fill="var(--fill-0, #F6EB64)"
                  />
                  <path
                    d={svgPaths.p219e5d90}
                    fill="var(--fill-0, #F6EB64)"
                  />
                  <path
                    d={svgPaths.p39e73b70}
                    fill="var(--fill-0, #F6EB64)"
                  />
                  <path
                    d={svgPaths.p3d8b1180}
                    fill="var(--fill-0, #F6EB64)"
                  />
                  <path
                    d={svgPaths.p1b345130}
                    fill="var(--fill-0, #F6EB64)"
                  />
                  <path
                    d={svgPaths.p3c3f9a00}
                    fill="var(--fill-0, #F6EB64)"
                  />
                  <path
                    d={svgPaths.p388d8c0}
                    fill="var(--fill-0, #F6EB64)"
                  />
                  <path
                    d={svgPaths.p2bdef600}
                    fill="var(--fill-0, #F6EB64)"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Row 5 – Galde Hugue */}
      <div
        className="h-[83.312px] relative shrink-0 w-[505.825px]"
        data-name="01 SPAIN/KINGS/Social Media/Ranking"
      >
        <Frame11 />
        <Frame12 />
        <div className="absolute inset-[0_76.21%_0_0] overflow-clip">
          <div className="absolute inset-[0_0_0_9.89%]">
            <svg
              className="absolute block inset-0 size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 108.438 83.3123"
            >
              <path
                d={svgPaths.p1f5df9c0}
                fill="var(--fill-0, #2810FC)"
                id="Rectangle 66"
              />
            </svg>
          </div>
          <div className="absolute inset-[0_83.52%_0_0]">
            <svg
              className="absolute block inset-0 size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 19.8363 83.3123"
            >
              <path
                d={svgPaths.p28c04500}
                fill="var(--fill-0, #1A0AA1)"
                id="Rectangle 67"
              />
            </svg>
          </div>
          <div className="absolute inset-[0_9.89%_0_20.88%]">
            <div className="absolute inset-[19.25%_3.9%]">
              <svg
                className="absolute block inset-0 size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 76.8153 51.2371"
              >
                <path
                  d={svgPaths.p3c24ad00}
                  fill="var(--fill-0, #FFED00)"
                  id="KL/ESP/XBU/WHITE"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Row 6 – Adri Espinar */}
      <div
        className="h-[83.312px] relative shrink-0 w-[505.825px]"
        data-name="01 SPAIN/KINGS/Social Media/Ranking"
      >
        <Frame13 />
        <Frame14 />
        <div className="absolute inset-[0_76.21%_0_0] overflow-clip">
          <div className="absolute inset-[0_0_0_9.89%]">
            <svg
              className="absolute block inset-0 size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 108.438 83.3123"
            >
              <path
                d={svgPaths.p1f5df9c0}
                fill="var(--fill-0, #575757)"
                id="Rectangle 66"
              />
            </svg>
          </div>
          <div className="absolute inset-[0_83.52%_0_0]">
            <svg
              className="absolute block inset-0 size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 19.8363 83.3123"
            >
              <path
                d={svgPaths.p28c04500}
                fill="var(--fill-0, #404040)"
                id="Rectangle 67"
              />
            </svg>
          </div>
          <div className="absolute inset-[0_9.89%_0_20.88%]">
            <div className="absolute inset-[5.45%_20.25%_5.53%_20.25%]">
              <svg
                className="absolute block inset-0 size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 49.5706 74.167"
              >
                <g id="KL/ESP/PIO/COLOR">
                  <path
                    d={svgPaths.p4e4cf00}
                    fill="var(--fill-0, #010101)"
                  />
                  <path d={svgPaths.pc66e2f0} fill="white" />
                  <path
                    d={svgPaths.p9b6e080}
                    fill="var(--fill-0, #010101)"
                  />
                  <path d={svgPaths.p2fb8f900} fill="white" />
                  <path
                    d={svgPaths.pf830b00}
                    fill="var(--fill-0, #010101)"
                  />
                  <path
                    d={svgPaths.p13a7f380}
                    fill="var(--fill-0, #010101)"
                  />
                  <path
                    d={svgPaths.p2e5d07c0}
                    fill="var(--fill-0, #010101)"
                  />
                  <path
                    d={svgPaths.p3bf96470}
                    fill="var(--fill-0, #010101)"
                  />
                  <path
                    d={svgPaths.p3d180280}
                    fill="var(--fill-0, #010101)"
                  />
                  <path
                    d={svgPaths.p1d958b00}
                    fill="var(--fill-0, #010101)"
                  />
                  <path
                    d={svgPaths.p244d87f0}
                    fill="var(--fill-0, #010101)"
                  />
                  <path
                    d={svgPaths.p38dd4700}
                    fill="var(--fill-0, #010101)"
                  />
                  <path
                    d={svgPaths.p2f88ea00}
                    fill="var(--fill-0, #010101)"
                  />
                  <path
                    d={svgPaths.p3f208800}
                    fill="var(--fill-0, #010101)"
                  />
                  <path
                    d={svgPaths.p2bd86df0}
                    fill="var(--fill-0, #010101)"
                  />
                  <path
                    d={svgPaths.p36d92600}
                    fill="var(--fill-0, #010101)"
                  />
                  <path d={svgPaths.p1d78b500} fill="#FDCF1F" />
                  <path d={svgPaths.p2274cf40} fill="#FDCF1F" />
                  <path
                    d={svgPaths.p3ccb34f0}
                    fill="var(--fill-0, #010101)"
                  />
                  <path
                    d={svgPaths.p28ab2500}
                    fill="var(--fill-0, #010101)"
                  />
                  <path
                    d={svgPaths.p34380280}
                    fill="var(--fill-0, #010101)"
                  />
                  <path
                    d={svgPaths.p35fe4000}
                    fill="var(--fill-0, #010101)"
                  />
                  <path
                    d={svgPaths.p1719800}
                    fill="var(--fill-0, #010101)"
                  />
                  <path
                    d={svgPaths.p176b7320}
                    fill="var(--fill-0, #010101)"
                  />
                  <path
                    d={svgPaths.p2b36e700}
                    fill="var(--fill-0, #010101)"
                  />
                  <path
                    d={svgPaths.pe8b7300}
                    fill="var(--fill-0, #010101)"
                  />
                  <path
                    d={svgPaths.p172b4900}
                    fill="var(--fill-0, #010101)"
                  />
                  <path d={svgPaths.p20702500} fill="#FFFCEF" />
                  <path
                    d={svgPaths.p17a16780}
                    fill="var(--fill-0, #010101)"
                  />
                  <path
                    d={svgPaths.p1b664780}
                    fill="var(--fill-0, #010101)"
                  />
                  <path
                    d={svgPaths.p183d4680}
                    fill="var(--fill-0, #010101)"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Row 7 – Julen Álvarez */}
      <div
        className="h-[83.312px] relative shrink-0 w-[505.825px]"
        data-name="01 SPAIN/KINGS/Social Media/Ranking"
      >
        <Frame15 />
        <Frame16 />
        <div className="absolute inset-[0_76.21%_0_0] overflow-clip">
          <div className="absolute inset-[0_0_0_9.89%]">
            <svg
              className="absolute block inset-0 size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 108.438 83.3123"
            >
              <path
                d={svgPaths.p1f5df9c0}
                fill="var(--fill-0, #F881C8)"
                id="Rectangle 66"
              />
            </svg>
          </div>
          <div className="absolute inset-[0_83.52%_0_0]">
            <svg
              className="absolute block inset-0 size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 19.8363 83.3123"
            >
              <path
                d={svgPaths.p28c04500}
                fill="var(--fill-0, #E74CA9)"
                id="Rectangle 67"
              />
            </svg>
          </div>
          <div className="absolute inset-[0_9.89%_0_20.88%]">
            <div className="absolute inset-[2.99%_3.01%_3.01%_2.99%]">
              <svg
                className="absolute block inset-0 size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 78.3136 78.3136"
              >
                <g id="KL/ESP/LCA">
                  <path
                    d={svgPaths.p35eacb60}
                    fill="var(--fill-0, #001433)"
                  />
                  <path d={svgPaths.p304e1200} fill="#F881C8" />
                  <path d={svgPaths.p20e43f00} fill="#F881C8" />
                  <path d={svgPaths.p3f547800} fill="#F881C8" />
                  <path d={svgPaths.p4fc5700} fill="#F881C8" />
                  <path d={svgPaths.p101e4f00} fill="#F881C8" />
                  <path d={svgPaths.p16f2b300} fill="#F881C8" />
                  <path d={svgPaths.p13525200} fill="#F881C8" />
                  <path d={svgPaths.p2aaade00} fill="#F881C8" />
                  <path d={svgPaths.p3da63600} fill="#F881C8" />
                  <path d={svgPaths.pa446300} fill="#F881C8" />
                  <path d={svgPaths.p1813d700} fill="#F881C8" />
                  <path d={svgPaths.p3e36b500} fill="#F881C8" />
                  <path d={svgPaths.p2d8a4700} fill="#F881C8" />
                  <path d={svgPaths.p5d89000} fill="#F881C8" />
                  <path d={svgPaths.p2f153900} fill="#F881C8" />
                  <path d={svgPaths.p17c45f00} fill="#F881C8" />
                  <path
                    d={svgPaths.p340d2100}
                    fill="var(--fill-0, #001433)"
                  />
                  <path
                    d={svgPaths.p2cb72d00}
                    fill="var(--fill-0, #001433)"
                  />
                  <path
                    d={svgPaths.p2283fc00}
                    fill="var(--fill-0, #001433)"
                  />
                  <path
                    d={svgPaths.p1aecc000}
                    fill="var(--fill-0, #001433)"
                  />
                  <path
                    d={svgPaths.p12385300}
                    fill="var(--fill-0, #001433)"
                  />
                  <path
                    d={svgPaths.p3b3bb500}
                    fill="var(--fill-0, #001433)"
                  />
                  <path
                    d={svgPaths.p4ad5900}
                    fill="var(--fill-0, #001433)"
                  />
                  <path
                    d={svgPaths.p14890380}
                    fill="var(--fill-0, #001433)"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Adidas logo — mirrored to left side (left-57)
function DesignMirrored() {
  return (
    <div
      className="absolute h-[95.01px] left-[57px] overflow-clip top-[1157px] w-[150.81px]"
      data-name="DESIGN"
    >
      <div className="absolute contents inset-[0_0_0.54%_0]">
        <div className="absolute contents inset-[1%_0.05%_0_0.64%]">
          <div className="absolute contents inset-[1%_0.05%_0_0.64%]">
            <div className="absolute contents inset-[1%_0.05%_0_0.64%]">
              <div
                className="absolute inset-[1%_0.05%_0_0.64%] mask-position-[-0.96px_-0.95px,_0px_0px]"
                style={{
                  maskImage: `url('${imgGroup}'), url('${imgGroup1}')`,
                }}
              >
                <svg
                  className="absolute block inset-0 size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 149.78 94.06"
                >
                  <g id="Group">
                    <path
                      d={svgPaths.p3c1e6700}
                      fill="var(--fill-0, white)"
                      id="Vector"
                    />
                    <path
                      d={svgPaths.p33d9dc80}
                      fill="var(--fill-0, white)"
                      id="Vector_2"
                    />
                    <path
                      d={svgPaths.p282c8e80}
                      fill="var(--fill-0, white)"
                      id="Vector_3"
                    />
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

// Kings League logo sub-components
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
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 145.134 72.9509"
      >
        <g id="Group 3392">
          <g id="Vector">
            <path
              d={svgPaths.p262a3b80}
              fill="var(--fill-0, #FBB800)"
            />
            <path
              d={svgPaths.p88f470}
              fill="var(--fill-0, #FBB800)"
            />
            <path
              d={svgPaths.p2b6b6e00}
              fill="var(--fill-0, #FBB800)"
            />
            <path
              d={svgPaths.p1b629100}
              fill="var(--fill-0, #FBB800)"
            />
            <path
              d={svgPaths.p20334800}
              fill="var(--fill-0, #FBB800)"
            />
            <path
              d={svgPaths.p3b4e2f80}
              fill="var(--fill-0, #FBB800)"
            />
            <path
              d={svgPaths.pcc6b410}
              fill="var(--fill-0, #FBB800)"
            />
            <path
              d={svgPaths.p3bdb0e00}
              fill="var(--fill-0, #FBB800)"
            />
            <path
              d={svgPaths.p3b0d5580}
              fill="var(--fill-0, #FBB800)"
            />
            <path
              d={svgPaths.p82d5af2}
              fill="var(--fill-0, #FBB800)"
            />
            <path
              d={svgPaths.p18efbc00}
              fill="var(--fill-0, #FBB800)"
            />
            <path
              d={svgPaths.p347b9a00}
              fill="var(--fill-0, #FBB800)"
            />
            <path
              d={svgPaths.p9910b00}
              fill="var(--fill-0, #FBB800)"
            />
            <path
              d={svgPaths.p392cc800}
              fill="var(--fill-0, #FBB800)"
            />
            <path
              d={svgPaths.p15d1e700}
              fill="var(--fill-0, #FBB800)"
            />
            <path
              d={svgPaths.p3c5e7d80}
              fill="var(--fill-0, #FBB800)"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

// Bottom ticker text
function TickerText() {
  const items = [0, 1, 2, 3, 4, 5];
  return (
    <>
      {items.map((i) => (
        <span
          key={i}
          className="content-stretch flex gap-[20px] items-center shrink-0"
        >
          <span className="font-['HeadingNow-45Medium' ] leading-[normal] not-italic text-[32px] text-black tracking-[6.4px] uppercase whitespace-nowrap font-[HeadingNow-45Medium]">
            kings league
          </span>
          <span className="font-['HeadingNow-45Medium' ] leading-[normal] not-italic text-[32px] text-black tracking-[6.4px] uppercase whitespace-nowrap font-[HeadingNow-45Medium]">
            spain
          </span>
          <svg
            fill="none"
            height="24"
            viewBox="0 0 28 24"
            width="28"
          >
            <path d={svgPaths.p55fca00} fill="black" />
          </svg>
        </span>
      ))}
    </>
  );
}

export default function TopScorersJ8Mirrored({
  players,
}: { players?: TopScorerRow[] } = {}) {
  return (
    <PlayersContext.Provider value={players ?? DEFAULT_TOP_SCORERS}>
    <div
      className="bg-black relative size-full"
      data-name="Top Scorers_J8_Mirrored"
    >
      {/* Background texture (rotated) */}
      <div
        className="absolute flex h-[2493px] items-center justify-center left-[-520px] top-[-675px] w-[1832px]"
        style={
          {
            "--transform-inner-width": "1185",
            "--transform-inner-height": "19",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-90">
          <div
            className="h-[1832px] relative w-[2493px]"
            data-name="00 Background/Kings"
          >
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={img00BackgroundKings}
            />
          </div>
        </div>
      </div>

      {/* Player panel — RIGHT side */}
      <Frame1Mirrored />

      {/* Main player photo — RIGHT side */}
      <div
        className="absolute h-[2119px] right-[-455px] top-[-96px] w-[1413px]"
        data-name="PR019684 2"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={imgPr0196842}
        />
      </div>

      {/* Rankings list — LEFT side */}
      <Frame2Mirrored />

      {/* GOLEADORES title — LEFT side, mirrored from right */}
      <p className="absolute font-['HeadingNow-37Extrabold:Regular' ] leading-[normal] left-[58px] not-italic text-[#fbb800] text-[161.241px] text-left top-[155px] uppercase whitespace-nowrap font-[HeadingNow-37Extrabold]">
        goleadores
      </p>

      {/* Adidas logo — LEFT side */}
      <DesignMirrored />

      {/* Kings League / ESP logo — LEFT side (mirrored from left-512 to left-186) */}
      <div
        className="absolute h-[222.303px] left-[186px] top-[-9.31px] w-[382px]"
        data-name="KINGS LEAGUE/ESP"
      >
        <Group7 />
        <div
          className="absolute inset-[24.34%_77.5%_24.13%_0]"
          data-name="Vector"
        >
          <svg
            className="absolute block inset-0 size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 85.9621 114.547"
          >
            <g id="Vector">
              <path d={svgPaths.p35081000} fill="#FBB800" />
              <path
                d={svgPaths.p3711aa00}
                fill="var(--fill-0, black)"
              />
            </g>
          </svg>
        </div>
        <Group8 />
      </div>

      {/* Jornada label — LEFT side (mirrored from right) */}
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex font-['Termina:Medium' ] gap-[18px] items-center leading-[normal] not-italic text-[#fbb800] text-[30px] uppercase whitespace-nowrap"
        style={{
          left: "calc(50% - 366.5px)",
          top: "calc(50% + 417.5px)",
        }}
      >
        <p className="relative shrink-0 font-[Termina]">JORNADA</p>
        <p className="relative shrink-0 font-[Termina]">8</p>
      </div>

      {/* Bottom ticker — LEFT-anchored (mirrored) */}
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