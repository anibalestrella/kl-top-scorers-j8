// team-logos.tsx
// All Kings League Spain team logo components + theme configuration.
// Also exports RankingRow — the shared dynamic row used by both
// TopScorersJ8.tsx and TopScorersJ8Mirrored.tsx.

import type { TopScorerRow } from "./players-context";
import svgPaths from "./svg-xisd0t2cvr";

// ─────────────────────────────────────────────────────────────────────────────
// THEME TYPE
// ─────────────────────────────────────────────────────────────────────────────

export type TeamTheme = {
  primary: string;        // background color of player-name bar & badge shape
  secondary: string;      // darker shadow color of the badge side stripe
  logoWrapperClass: string; // tailwind classes for the logo container div
  Logo: React.FC;         // logo component rendered inside the badge
};

// ─────────────────────────────────────────────────────────────────────────────
// LOGO COMPONENTS
// ─────────────────────────────────────────────────────────────────────────────

/** Ultimate Móstoles — Spain crest (maroon) */
export function LogoULT() {
  return (
    <div className="absolute inset-[1.8%_7.74%_1.86%_7.7%]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 70.4528 80.2667">
        <g id="KL/ESP/ULT/COLOR">
          <path d={svgPaths.p3a3bdf80} fill="#C4914F" />
          <path d={svgPaths.p29bb6500} fill="black" />
          <path d={svgPaths.pbef8a00}  fill="#C4914F" />
          <path d={svgPaths.p218df400} fill="#C4914F" />
          <path d={svgPaths.p3c9aace0} fill="#C4914F" />
          <path d={svgPaths.p21f34e00} fill="#C4914F" />
          <path d={svgPaths.p2f3793c0} fill="#C4914F" />
          <path d={svgPaths.p8f0a580}  fill="#C4914F" />
          <path d={svgPaths.p3ae42080} fill="var(--fill-0, #73233E)" />
          <path d={svgPaths.p38284972} fill="var(--fill-0, #73233E)" />
        </g>
      </svg>
    </div>
  );
}

/** Jijantes FC — purple/yellow crown badge (row 2 in original design) */
export function LogoJIJ() {
  return (
    <>
      {/* Outer badge ring */}
      <div className="absolute inset-[5.47%_10.58%_5.43%_10.61%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 65.6528 74.2337">
          <g id="Group">
            <path d={svgPaths.p4798900}  fill="var(--fill-0, #030203)" />
            <path d={svgPaths.pa71e600}  fill="var(--fill-0, #FDE253)" />
            <g id="Group_2">
              <path d={svgPaths.p41fc000}  fill="var(--fill-0, #452F83)" />
              <path d={svgPaths.pb393f80}  fill="var(--fill-0, #FDE253)" />
            </g>
            <path d={svgPaths.p16eecf00} fill="var(--fill-0, #6F569D)" />
            <path d={svgPaths.p39abaf80} fill="var(--fill-0, white)" />
            <g id="Group_3">
              <path d={svgPaths.p24a05b00} fill="var(--fill-0, white)" />
              <path d={svgPaths.p3b2fcf00} fill="var(--fill-0, white)" />
            </g>
            <g id="Group_4">
              <path d={svgPaths.p31a0600} fill="var(--fill-0, white)" />
              <path d={svgPaths.p5856100} fill="var(--fill-0, white)" />
            </g>
            <g id="Group_5">
              <path d={svgPaths.p18a3dbf0} fill="var(--fill-0, white)" />
              <path d={svgPaths.pcf76c40}  fill="var(--fill-0, white)" />
            </g>
            <g id="Group_6">
              <g id="Group_7">
                <path d={svgPaths.p17dbda00} fill="var(--fill-0, #030203)" />
                <path d={svgPaths.p1607daf2} fill="var(--fill-0, #FDE253)" />
              </g>
              <path d={svgPaths.p22e7cd00} fill="var(--fill-0, #452F83)" />
              <path d={svgPaths.p28c44180} fill="url(#jij_g0)" />
              <path d={svgPaths.p36bc6600} fill="url(#jij_g1)" />
              <path d={svgPaths.p1482c200} fill="url(#jij_g2)" />
              <path d={svgPaths.p23d0c000} fill="url(#jij_g3)" />
              <path d={svgPaths.p2f9fa700} fill="url(#jij_g4)" />
              <path d={svgPaths.p8a62600}  fill="url(#jij_g5)" />
              <path d={svgPaths.pc17ef80}  fill="url(#jij_g6)" />
            </g>
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="jij_g0" x1="17.9138" x2="15.7323" y1="11.9307" y2="2.57531">
              <stop offset="0.36" stopColor="white" /><stop offset="0.5" stopColor="#DBD5E6" /><stop offset="0.8" stopColor="#8D7AB1" /><stop offset="0.94" stopColor="#6F569D" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="jij_g1" x1="10.5336" x2="6.14799" y1="15.032" y2="2.90451">
              <stop offset="0.32" stopColor="white" /><stop offset="0.38" stopColor="#F6F5F9" /><stop offset="0.47" stopColor="#E1DBEA" /><stop offset="0.59" stopColor="#BDB1D2" /><stop offset="0.73" stopColor="#8C78B1" /><stop offset="0.8" stopColor="#6F569D" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="jij_g2" x1="25.4912" x2="25.6945" y1="10.4914" y2="1.44579">
              <stop offset="0.32" stopColor="white" /><stop offset="0.39" stopColor="#F7F6F9" /><stop offset="0.51" stopColor="#E2DDEB" /><stop offset="0.65" stopColor="#C0B6D4" /><stop offset="0.82" stopColor="#927FB5" /><stop offset="0.94" stopColor="#6F569D" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="jij_g3" x1="33.3493" x2="33.3493" y1="13.8961" y2="1.69113">
              <stop offset="0.49" stopColor="white" /><stop offset="0.55" stopColor="#F7F6F9" /><stop offset="0.64" stopColor="#E2DDEB" /><stop offset="0.76" stopColor="#C0B6D4" /><stop offset="0.9" stopColor="#927FB5" /><stop offset="1" stopColor="#6F569D" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="jij_g4" x1="39.881" x2="39.881" y1="14.7417" y2="1.79765">
              <stop offset="0.45" stopColor="white" /><stop offset="0.51" stopColor="#F7F6F9" /><stop offset="0.62" stopColor="#E2DDEB" /><stop offset="0.75" stopColor="#C0B6D4" /><stop offset="0.9" stopColor="#927FB5" /><stop offset="1" stopColor="#6F569D" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="jij_g5" x1="46.0836" x2="48.7686" y1="15.813" y2="1.54589">
              <stop offset="0.47" stopColor="white" /><stop offset="0.53" stopColor="#F9F9FB" /><stop offset="0.6" stopColor="#EBE8F1" /><stop offset="0.69" stopColor="#D4CDE2" /><stop offset="0.78" stopColor="#B3A6CB" /><stop offset="0.88" stopColor="#8A76AF" /><stop offset="0.94" stopColor="#6F569D" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="jij_g6" x1="56.1388" x2="58.1267" y1="19.3885" y2="2.63975">
              <stop offset="0.46" stopColor="white" /><stop offset="0.53" stopColor="#FBFAFC" /><stop offset="0.6" stopColor="#F1EEF5" /><stop offset="0.66" stopColor="#E0DAEA" /><stop offset="0.73" stopColor="#C8BED9" /><stop offset="0.8" stopColor="#A99AC4" /><stop offset="0.87" stopColor="#836EAB" /><stop offset="0.91" stopColor="#6F569D" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Shadow part */}
      <div className="absolute inset-[22.84%_26.55%_17.57%_26.58%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39.0515 49.6461">
          <g id="Group">
            <path d={svgPaths.p24c72b80} fill="var(--fill-0, #030203)" />
            <path d={svgPaths.p23ea2e00} fill="var(--fill-0, #6F569D)" />
          </g>
        </svg>
      </div>

      {/* Inner logo detail */}
      <div className="absolute inset-[24.58%_28.12%_18.47%_28.14%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36.4375 47.4497">
          <g id="Group">
            <path d={svgPaths.p3a17d790} fill="var(--fill-0, #E5D89E)" />
            <path d={svgPaths.pd084c00}  fill="var(--fill-0, #E5D89E)" />
            <g id="Group_2">
              <path d={svgPaths.p374ebb0}   fill="url(#jij2_g0)" />
              <path d={svgPaths.p3aa4e780}  fill="var(--fill-0, white)" />
              <path d={svgPaths.pec78520}   fill="var(--fill-0, white)" />
              <path d={svgPaths.p3c338170}  fill="var(--fill-0, white)" />
              <path d={svgPaths.pc89900}    fill="var(--fill-0, white)" />
              <path d={svgPaths.p35f6e200}  fill="var(--fill-0, white)" />
              <path d={svgPaths.p22c52080}  fill="var(--fill-0, white)" />
              <path d={svgPaths.p288ec400}  fill="var(--fill-0, white)" />
              <path d={svgPaths.p6679700}   fill="var(--fill-0, white)" />
              <path d={svgPaths.pe0858c0}   fill="var(--fill-0, white)" />
              <path d={svgPaths.p39b7b480}  fill="var(--fill-0, #6A539A)" />
              <path d={svgPaths.p35bcb880}  fill="var(--fill-0, white)" />
              <path d={svgPaths.p218d6480}  fill="var(--fill-0, white)" />
              <path d={svgPaths.p242e3500}  fill="var(--fill-0, #6A539A)" />
              <path d={svgPaths.p38949a00}  fill="var(--fill-0, white)" />
              <path d={svgPaths.p6a7900}    fill="var(--fill-0, white)" />
              <path d={svgPaths.p13335140}  fill="var(--fill-0, white)" />
              <path d={svgPaths.p18f48200}  fill="var(--fill-0, white)" />
              <path d={svgPaths.p1c8ab800}  fill="var(--fill-0, white)" />
              <path d={svgPaths.pc581880}   fill="var(--fill-0, white)" />
              <path d={svgPaths.p1c00cf00}  fill="var(--fill-0, white)" />
              <path d={svgPaths.p21e6400}   fill="var(--fill-0, white)" />
              <path d={svgPaths.p27bd0c00}  fill="var(--fill-0, #6A539A)" />
              <path d={svgPaths.p2fa34580}  fill="var(--fill-0, #6A539A)" />
            </g>
            <g id="Group_3">
              <path d={svgPaths.p1ad54100}  fill="var(--fill-0, #E3B23B)" />
              <path d={svgPaths.p2bddc200}  fill="var(--fill-0, #8C388C)" />
              <path d={svgPaths.p27feab80}  fill="var(--fill-0, #8C388C)" />
              <path d={svgPaths.p8411400}   fill="var(--fill-0, #8C388C)" />
              <path d={svgPaths.p1e8749a0}  fill="var(--fill-0, #8C388C)" />
              <path d={svgPaths.p16a44200}  fill="var(--fill-0, #8C388C)" />
            </g>
            <g id="Group_4">
              <path d={svgPaths.p350541f0}  fill="var(--fill-0, #8C388C)" />
              <path d={svgPaths.p21cbb400}  fill="var(--fill-0, #8C388C)" />
              <path d={svgPaths.p1211ed00}  fill="var(--fill-0, #8C388C)" />
              <path d={svgPaths.p1861b00}   fill="var(--fill-0, #8C388C)" />
              <path d={svgPaths.pe2a900}    fill="var(--fill-0, #E3B23B)" />
              <path d={svgPaths.p23304100}  fill="var(--fill-0, #8C388C)" />
            </g>
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="jij2_g0" x1="18.2233" x2="18.2233" y1="28.6892" y2="3.6015">
              <stop offset="0.22" stopColor="white" /><stop offset="0.25" stopColor="#FBFAFC" /><stop offset="0.27" stopColor="#F1EEF5" /><stop offset="0.3" stopColor="#E0DAE9" /><stop offset="0.33" stopColor="#C7BED9" /><stop offset="0.35" stopColor="#A899C4" /><stop offset="0.38" stopColor="#836EAA" /><stop offset="0.39" stopColor="#6F569D" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </>
  );
}

/** Porcinos FC / Rayo de Barcelona — pink/white logo on deep purple (row 3) */
export function LogoLAY() {
  return (
    <div className="absolute inset-[3.75%_18.19%_3.72%_18.23%]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 52.9729 77.0864">
        <g clipPath="url(#lay_clip)">
          <path d={svgPaths.p2110e200} fill="var(--fill-0, white)" />
          <path d={svgPaths.p31c22e80} fill="var(--fill-0, #F7378D)" />
          <path d={svgPaths.p4048b00}  fill="var(--fill-0, #F7378D)" />
        </g>
        <defs>
          <clipPath id="lay_clip">
            <rect fill="white" height="77.0864" width="52.9729" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

/** Saiyans FC — orange team logo */
export function LogoSAY() {
  return (
    <div className="absolute inset-[3.75%_17.75%_3.74%_17.75%]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 53.7405 77.0729">
        <g id="KL/ESP/SAY/COLOR">
          <path d={svgPaths.p349356c0} fill="#252E5B" />
          <path d={svgPaths.pe5f200}   fill="white" />
          <path d={svgPaths.p37eeda00} fill="#F6A018" />
          <path d={svgPaths.p1c8c2e00} fill="#F4941D" />
          <path d={svgPaths.p11def00}  fill="white" />
          <path d={svgPaths.p2d608a00} fill="white" />
          <path d={svgPaths.p1de46700} fill="white" />
          <path d={svgPaths.p18f8d300} fill="white" />
          <path d={svgPaths.p1e3e7000} fill="white" />
          <path d={svgPaths.p5d9f0c0}  fill="white" />
          <path d={svgPaths.p3fe0ca00} fill="white" />
          <path d={svgPaths.p2f8addc}  fill="white" />
          <path d={svgPaths.p12d06af0} fill="white" />
          <path d={svgPaths.p29b98a44} fill="white" />
          <path d={svgPaths.p3825800}  fill="white" />
          <path d={svgPaths.pa9b2b00}  fill="white" />
          <path d={svgPaths.p3870ab80} fill="white" />
          <path d={svgPaths.p2fd60e00} fill="#E36C24" />
          <path d={svgPaths.p1dcd5f80} fill="#A61916" />
          <path d={svgPaths.p312cf300} fill="#A61916" />
          <path d={svgPaths.p2a314500} fill="#A61916" />
          <path d={svgPaths.p247d4300} fill="var(--fill-0, #F6EB64)" />
          <path d={svgPaths.p219e5d90} fill="var(--fill-0, #F6EB64)" />
          <path d={svgPaths.p39e73b70} fill="var(--fill-0, #F6EB64)" />
          <path d={svgPaths.p3d8b1180} fill="var(--fill-0, #F6EB64)" />
          <path d={svgPaths.p1b345130} fill="var(--fill-0, #F6EB64)" />
          <path d={svgPaths.p3c3f9a00} fill="var(--fill-0, #F6EB64)" />
          <path d={svgPaths.p388d8c0}  fill="var(--fill-0, #F6EB64)" />
          <path d={svgPaths.p2bdef600} fill="var(--fill-0, #F6EB64)" />
        </g>
      </svg>
    </div>
  );
}

/** XBuyer Team — blue with yellow logo */
export function LogoXBU() {
  return (
    <div className="absolute inset-[19.25%_3.9%]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 76.8153 51.2371">
        <path d={svgPaths.p3c24ad00} fill="var(--fill-0, #FFED00)" id="KL/ESP/XBU/WHITE" />
      </svg>
    </div>
  );
}

/** El Barrio / Piojos — gray with black/gold logo */
export function LogoPIO() {
  return (
    <div className="absolute inset-[5.45%_20.25%_5.53%_20.25%]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49.5706 74.167">
        <g id="KL/ESP/PIO/COLOR">
          <path d={svgPaths.p4e4cf00}   fill="var(--fill-0, #010101)" />
          <path d={svgPaths.pc66e2f0}   fill="white" />
          <path d={svgPaths.p9b6e080}   fill="var(--fill-0, #010101)" />
          <path d={svgPaths.p2fb8f900}  fill="white" />
          <path d={svgPaths.p7da5400}   fill="var(--fill-0, #010101)" />
          <path d={svgPaths.pf830b00}   fill="var(--fill-0, #010101)" />
          <path d={svgPaths.p13a7f380}  fill="var(--fill-0, #010101)" />
          <path d={svgPaths.p2e5d07c0}  fill="var(--fill-0, #010101)" />
          <path d={svgPaths.p3bf96470}  fill="var(--fill-0, #010101)" />
          <path d={svgPaths.p3d180280}  fill="var(--fill-0, #010101)" />
          <path d={svgPaths.p1d958b00}  fill="var(--fill-0, #010101)" />
          <path d={svgPaths.p244d87f0}  fill="var(--fill-0, #010101)" />
          <path d={svgPaths.p38dd4700}  fill="var(--fill-0, #010101)" />
          <path d={svgPaths.p2f88ea00}  fill="var(--fill-0, #010101)" />
          <path d={svgPaths.p3f208800}  fill="var(--fill-0, #010101)" />
          <path d={svgPaths.p2bd86df0}  fill="var(--fill-0, #010101)" />
          <path d={svgPaths.p36d92600}  fill="var(--fill-0, #010101)" />
          <path d={svgPaths.p1d78b500}  fill="#FDCF1F" />
          <path d={svgPaths.p2274cf40}  fill="#FDCF1F" />
          <path d={svgPaths.p3ccb34f0}  fill="var(--fill-0, #010101)" />
          <path d={svgPaths.p28ab2500}  fill="var(--fill-0, #010101)" />
          <path d={svgPaths.p34380280}  fill="var(--fill-0, #010101)" />
          <path d={svgPaths.p35fe4000}  fill="var(--fill-0, #010101)" />
          <path d={svgPaths.p1719800}   fill="var(--fill-0, #010101)" />
          <path d={svgPaths.p176b7320}  fill="var(--fill-0, #010101)" />
          <path d={svgPaths.p2b36e700}  fill="var(--fill-0, #010101)" />
          <path d={svgPaths.pe8b7300}   fill="var(--fill-0, #010101)" />
          <path d={svgPaths.p172b4900}  fill="var(--fill-0, #010101)" />
          <path d={svgPaths.p20702500}  fill="#FFFCEF" />
          <path d={svgPaths.p17a16780}  fill="var(--fill-0, #010101)" />
          <path d={svgPaths.p1b664780}  fill="var(--fill-0, #010101)" />
          <path d={svgPaths.p183d4680}  fill="var(--fill-0, #010101)" />
        </g>
      </svg>
    </div>
  );
}

/** Las Chicas Alpha — pink logo on dark navy */
export function LogoLCA() {
  return (
    <div className="absolute inset-[2.99%_3.01%_3.01%_2.99%]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 78.3136 78.3136">
        <g id="KL/ESP/LCA">
          <path d={svgPaths.p35eacb60} fill="var(--fill-0, #001433)" />
          <path d={svgPaths.p304e1200} fill="#F881C8" />
          <path d={svgPaths.p20e43f00} fill="#F881C8" />
          <path d={svgPaths.p3f547800} fill="#F881C8" />
          <path d={svgPaths.p4fc5700}  fill="#F881C8" />
          <path d={svgPaths.p101e4f00} fill="#F881C8" />
          <path d={svgPaths.p16f2b300} fill="#F881C8" />
          <path d={svgPaths.p13525200} fill="#F881C8" />
          <path d={svgPaths.p2aaade00} fill="#F881C8" />
          <path d={svgPaths.p3da63600} fill="#F881C8" />
          <path d={svgPaths.pa446300}  fill="#F881C8" />
          <path d={svgPaths.p1813d700} fill="#F881C8" />
          <path d={svgPaths.p3e36b500} fill="#F881C8" />
          <path d={svgPaths.p2d8a4700} fill="#F881C8" />
          <path d={svgPaths.p5d89000}  fill="#F881C8" />
          <path d={svgPaths.p2f153900} fill="#F881C8" />
          <path d={svgPaths.p17c45f00} fill="#F881C8" />
          <path d={svgPaths.p340d2100} fill="var(--fill-0, #001433)" />
          <path d={svgPaths.p2cb72d00} fill="var(--fill-0, #001433)" />
          <path d={svgPaths.p2283fc00} fill="var(--fill-0, #001433)" />
          <path d={svgPaths.p1aecc000} fill="var(--fill-0, #001433)" />
          <path d={svgPaths.p12385300} fill="var(--fill-0, #001433)" />
          <path d={svgPaths.p3b3bb500} fill="var(--fill-0, #001433)" />
          <path d={svgPaths.p4ad5900}  fill="var(--fill-0, #001433)" />
          <path d={svgPaths.p14890380} fill="var(--fill-0, #001433)" />
        </g>
      </svg>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// TEAM THEME CONFIG
// Add / adjust keyword arrays to match whatever team names appear in your sheet.
// Matching is case-insensitive, partial (includes). First match wins.
// ─────────────────────────────────────────────────────────────────────────────

const TEAM_CONFIGS: Array<{
  keywords: string[];
  theme: TeamTheme;
}> = [
  {
    // Ultimate Móstoles
    keywords: ["ult", "ultimate", "mostoles", "móstoles"],
    theme: {
      primary: "#73233E",
      secondary: "#401322",
      logoWrapperClass: "inset-[0_9.89%_0_20.88%]",
      Logo: LogoULT,
    },
  },
  {
    // Jijantes FC (Ibai)
    keywords: ["jij", "jijante", "1k fc", "gigante"],
    theme: {
      primary: "#805DE5",
      secondary: "#4D318A",
      logoWrapperClass: "inset-[-0.25%_10.68%_0.25%_20.09%]",
      Logo: LogoJIJ,
    },
  },
  {
    // Porcinos FC / Rayo de Barcelona
    keywords: ["porc", "porcino", "rayo", "barcel"],
    theme: {
      primary: "#5C00B7",
      secondary: "#3F007D",
      logoWrapperClass: "-translate-y-1/2 h-[83.312px] left-[20.33%] right-[10.44%] top-1/2",
      Logo: LogoLAY,
    },
  },
  {
    // Saiyans (TheGrefg)
    keywords: ["say", "saiy", "grefg", "sayan", "saian", "dragon"],
    theme: {
      primary: "#FF5A00",
      secondary: "#BA4200",
      logoWrapperClass: "inset-[0_9.89%_0_20.88%]",
      Logo: LogoSAY,
    },
  },
  {
    // XBuyer Team / XBoys
    keywords: ["xbu", "xboy", "buyer", "xbuyer", "x buyer", "x boys"],
    theme: {
      primary: "#2810FC",
      secondary: "#1A0AA1",
      logoWrapperClass: "inset-[0_9.89%_0_20.88%]",
      Logo: LogoXBU,
    },
  },
  {
    // El Barrio / Piojos / Kunisport / Los Troncos
    keywords: ["pio", "piojo", "barrio", "kuni", "kunisport", "tronco", "aniquilad"],
    theme: {
      primary: "#575757",
      secondary: "#404040",
      logoWrapperClass: "inset-[0_9.89%_0_20.88%]",
      Logo: LogoPIO,
    },
  },
  {
    // Las Chicas Alpha / Las Chicas Alfa
    keywords: ["lca", "chica", "alfa", "alpha", "agoney"],
    theme: {
      primary: "#F881C8",
      secondary: "#E74CA9",
      logoWrapperClass: "inset-[0_9.89%_0_20.88%]",
      Logo: LogoLCA,
    },
  },
];

/** Default fallback when team name doesn't match any known team */
const FALLBACK_THEME: TeamTheme = {
  primary: "#444444",
  secondary: "#222222",
  logoWrapperClass: "inset-[0_9.89%_0_20.88%]",
  Logo: LogoULT,
};

/**
 * Given a team name from the Google Sheet (column Equipo),
 * returns the matching TeamTheme — or a neutral fallback.
 */
export function getTeamTheme(team?: string): TeamTheme {
  if (!team) return FALLBACK_THEME;
  const t = team.toLowerCase();
  for (const { keywords, theme } of TEAM_CONFIGS) {
    if (keywords.some((k) => t.includes(k))) return theme;
  }
  return FALLBACK_THEME;
}

// ─────────────────────────────────────────────────────────────────────────────
// SHARED RANKING ROW
// Used by both TopScorersJ8 (original) and TopScorersJ8Mirrored.
// Each row reads the player's team name and applies the matching theme.
// ─────────────────────────────────────────────────────────────────────────────

export function RankingRow({ player }: { player: TopScorerRow }) {
  const theme = getTeamTheme(player.team);
  const Logo = theme.Logo;

  return (
    <div
      className="h-[83.312px] relative shrink-0 w-[505.825px]"
      data-name="01 SPAIN/KINGS/Social Media/Ranking"
    >
      {/* Player name bar — team primary colour */}
      <div
        className="absolute content-stretch flex inset-[0_18.3%_0_18.95%] items-center justify-center px-[33.06px]"
        style={{ backgroundColor: theme.primary }}
      >
        <p className="font-['HeadingNow-45Medium'] leading-[normal] not-italic relative shrink-0 text-[37.03px] text-center text-white uppercase whitespace-nowrap">
          {player.name}
        </p>
      </div>

      {/* Goals — always white panel, far right */}
      <div className="absolute bg-white content-stretch flex inset-[0_0_0_81.7%] items-center justify-center">
        <p className="font-['HeadingNow-46Bold'] leading-[normal] not-italic relative shrink-0 text-[84.63px] text-black uppercase whitespace-nowrap">
          {player.goals}
        </p>
      </div>

      {/* Team badge — trapezoid on the left */}
      <div className="absolute inset-[0_76.21%_0_0] overflow-clip" data-name="01 SPAIN/KINGS/Side/Local">
        {/* Main trapezoid shape */}
        <div className="absolute inset-[0_0_0_9.89%]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 108.438 83.3123">
            <path d={svgPaths.p1f5df9c0} fill={theme.primary} id="Rectangle 66" />
          </svg>
        </div>
        {/* Shadow stripe */}
        <div className="absolute inset-[0_83.52%_0_0]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.8363 83.3123">
            <path d={svgPaths.p28c04500} fill={theme.secondary} id="Rectangle 67" />
          </svg>
        </div>
        {/* Team logo */}
        <div className={`absolute ${theme.logoWrapperClass}`} data-name="KINGS ESP">
          <Logo />
        </div>
      </div>
    </div>
  );
}
