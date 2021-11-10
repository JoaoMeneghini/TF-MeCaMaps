import React from 'react';
import { Svg } from './styles';

const Caminhos = (props) => {
  let black =  '#000000';
  let green = '#00FF7F';

  const m = 0.57;
  const h=600*m;
  const w=800*m;

  return (
    <div>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width="800"
        height="600"
        viewBox={"140 " + "105 " + w.toString() + " " + h.toString()}
        >
        <path
            fill="none"
            stroke={props.color.includes('B-S') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('B-S') ? 1 : 1}
            strokeWidth="0.5"
            d="M282.2 378.42L282.2 409.92"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('A-U') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('A-U') ? 1 : 1}
            strokeWidth="0.5"
            d="M308.7 409.92L334.9 409.92"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('U-V') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('U-V') ? 1 : 1}
            strokeWidth="0.5"
            d="M334.9 409.92L334.9 378.42"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('S-T') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('S-T') ? 1 : 1}
            strokeWidth="0.5"
            d="M308.55 378.42L282.2 378.42"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('R-S') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('R-S') ? 1 : 1}
            strokeWidth="0.5"
            d="M282.2 378.42L282.2 333.9"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('V-W') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('V-W') ? 1 : 1}
            strokeWidth="0.5"
            d="M334.9 378.42L334.9 333.9"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('P-AA') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('P-AA') ? 1 : 1}
            strokeWidth="0.5"
            d="M308.68 199.98L282.2 199.98"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('AX-AY') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('AX-AY') ? 1 : 1}
            strokeWidth="0.5"
            d="M368.64 333.9L433.94 333.9"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('BC-BD') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('BC-BD') ? 1 : 1}
            strokeWidth="0.5"
            d="M451.42 125.31L451.42 152.8"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('BJ-BK') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('BJ-BK') ? 1 : 1}
            strokeWidth="0.5"
            d="M587.39 152.8L587.39 125.54"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('AJ-BB') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('AJ-BB') ? 1 : 1}
            strokeWidth="0.5"
            d="M442.68 152.8L433.94 152.8"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('AI-AJ') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('AI-AJ') ? 1 : 1}
            strokeWidth="0.5"
            d="M433.94 138.3L433.94 152.8"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('AY-AZ') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('AY-AZ') ? 1 : 1}
            strokeWidth="0.5"
            d="M433.94 333.9L433.94 359.12"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('AZ-BA') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('AZ-BA') ? 1 : 1}
            strokeWidth="0.5"
            d="M433.94 359.12L433.94 383.76"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('CV-CX') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('CV-CX') ? 1 : 1}
            strokeWidth="0.5"
            d="M451.48 359.12L451.48 386.8"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('CN-CO') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('CN-CO') ? 1 : 1}
            strokeWidth="0.5"
            d="M590.45 359.12L590.45 336.61"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('CL-CQ') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('CL-CQ') ? 1 : 1}
            strokeWidth="0.5"
            d="M535.11 336.61L513.29 336.61"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('CO-CP') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('CO-CP') ? 1 : 1}
            strokeWidth="0.5"
            d="M556.86 359.12L590.45 359.12"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('CQ-CS') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('CQ-CS') ? 1 : 1}
            strokeWidth="0.5"
            d="M513.29 359.12L513.29 336.61"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('CP-CS') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('CP-CS') ? 1 : 1}
            strokeWidth="0.5"
            d="M513.29 359.12L556.86 359.12"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('DB-DG') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('DB-DG') ? 1 : 1}
            strokeWidth="0.5"
            d="M556.86 391.44L556.86 413.78"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('CZ-DC') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('CZ-DC') ? 1 : 1}
            strokeWidth="0.5"
            d="M485.76 386.8L485.76 413.78"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('CB-CH') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('CB-CH') ? 1 : 1}
            strokeWidth="0.5"
            d="M535.11 308.34L535.11 273.24"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('CB-CC') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('CB-CC') ? 1 : 1}
            strokeWidth="0.5"
            d="M535.11 273.24L496.71 273.24"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('CC-CD') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('CC-CD') ? 1 : 1}
            strokeWidth="0.5"
            d="M496.71 273.24L496.71 278.99"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('CD-CE') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('CD-CE') ? 1 : 1}
            strokeWidth="0.5"
            d="M496.71 278.99L489.27 278.99"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('CE-CF') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('CE-CF') ? 1 : 1}
            strokeWidth="0.5"
            d="M489.27 278.99L489.27 288.05"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('AW-CG') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('AW-CG') ? 1 : 1}
            strokeWidth="0.5"
            d="M449.14 288.05L433.94 288.05"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('AW-AY') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('AW-AY') ? 1 : 1}
            strokeWidth="0.5"
            d="M433.94 288.05L433.94 333.9"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('BQ-IW') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('BQ-IW') ? 1 : 1}
            strokeWidth="0.5"
            d="M535.11 200.57L517.7 200.57"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('BN-BQ') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('BN-BQ') ? 1 : 1}
            strokeWidth="0.5"
            d="M517.7 200.57L517.7 152.8"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('BB-BC') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('BB-BC') ? 1 : 1}
            strokeWidth="0.5"
            d="M442.68 152.8L451.42 152.8"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('BB-Esc3') ? "#f00" : "#000"}
            strokeOpacity={props.color.includes('BB-Esc3') ? 1 : 1}
            strokeWidth="0.5"
            d="M442.68 152.8L442.68 162.75"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('BG-Esc4') ? "#f00" : "#000"}
            strokeOpacity={props.color.includes('BG-Esc4') ? 1 : 1}
            strokeWidth="0.5"
            d="M511.83 125.41L511.83 112.96"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('BK-Esc5') ? "#f00" : "#000"}
            strokeOpacity={props.color.includes('BK-Esc5') ? 1 : 1}
            strokeWidth="0.5"
            d="M587.39 152.8L587.39 161.68"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('CN-Esc7') ? "#f00" : "#000"}
            strokeOpacity={props.color.includes('CN-Esc7') ? 1 : 1}
            strokeWidth="0.5"
            d="M590.45 336.61L590.45 327.84"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('DB-Esc9') ? "#f00" : "#000"}
            strokeOpacity={props.color.includes('DB-Esc9') ? 1 : 1}
            strokeWidth="0.5"
            d="M556.86 391.44L564.41 391.44"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('Z-AA') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('Z-AA') ? 1 : 1}
            strokeWidth="0.5"
            d="M308.68 199.98L334.9 199.98"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('AA-Esc2') ? "#f00" : "#000"}
            strokeOpacity={props.color.includes('AA-Esc2') ? 1 : 1}
            strokeWidth="0.5"
            d="M308.68 199.98L308.68 215.11"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('T-V') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('T-V') ? 1 : 1}
            strokeWidth="0.5"
            d="M308.55 378.42L334.9 378.42"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('T-Esc1') ? "#f00" : "#000"}
            strokeOpacity={props.color.includes('T-Esc1') ? 1 : 1}
            strokeWidth="0.5"
            d="M308.55 378.42L308.55 387.75"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('W-AX') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('W-AX') ? 1 : 1}
            strokeWidth="0.5"
            d="M334.9 333.9L368.64 333.9"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('AX-Esc11') ? "#f00" : "#000"}
            strokeOpacity={props.color.includes('AX-Esc11') ? 1 : 1}
            strokeWidth="0.5"
            d="M368.64 333.9L368.64 342.3"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('CG-Esc6') ? "#f00" : "#000"}
            strokeOpacity={props.color.includes('CG-Esc6') ? 1 : 1}
            strokeWidth="0.5"
            d="M449.14 288.05L449.14 276.81"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('CF-CG') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('CF-CG') ? 1 : 1}
            strokeWidth="0.5"
            d="M449.14 288.05L489.28 288.05"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('C-D') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('C-D') ? 1 : 1}
            strokeWidth="0.5"
            d="M208.94 409.92L208.94 367.04"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('D-E') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('D-E') ? 1 : 1}
            strokeWidth="0.5"
            d="M208.94 367.04L208.94 336.99"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('E-F') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('E-F') ? 1 : 1}
            strokeWidth="0.5"
            d="M208.94 336.99L208.94 305.32"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('F-G') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('F-G') ? 1 : 1}
            strokeWidth="0.5"
            d="M208.94 305.85L208.94 274.61"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('G-H') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('G-H') ? 1 : 1}
            strokeWidth="0.5"
            d="M208.94 274.61L208.94 243.56"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('H-I') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('H-I') ? 1 : 1}
            strokeWidth="0.5"
            d="M208.94 243.56L208.94 210.26"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('I-J') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('I-J') ? 1 : 1}
            strokeWidth="0.5"
            d="M208.94 210.26L208.98 194.86"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('J-K') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('J-K') ? 1 : 1}
            strokeWidth="0.5"
            d="M208.98 194.86L208.98 175.95"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('K-L') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('K-L') ? 1 : 1}
            strokeWidth="0.5"
            d="M208.98 175.95L208.94 138.3"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('B-C') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('B-C') ? 1 : 1}
            strokeWidth="0.5"
            d="M208.94 409.92L282.2 409.92"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('A-B') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('A-B') ? 1 : 1}
            strokeWidth="0.5"
            d="M282.2 409.92L308.7 409.92"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('R-X') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('R-X') ? 1 : 1}
            strokeWidth="0.5"
            d="M282.2 333.9L307.78 333.9"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('W-X') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('W-X') ? 1 : 1}
            strokeWidth="0.5"
            d="M307.78 333.9L334.9 333.9"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('Q-R') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('Q-R') ? 1 : 1}
            strokeWidth="0.5"
            d="M282.2 333.9L282.2 218.14"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('P-Q') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('P-Q') ? 1 : 1}
            strokeWidth="0.5"
            d="M282.2 218.14L282.2 199.98"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('L-M') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('L-M') ? 1 : 1}
            strokeWidth="0.5"
            d="M208.94 138.3L253.56 138.3"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('M-N') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('M-N') ? 1 : 1}
            strokeWidth="0.5"
            d="M253.56 138.3L282.2 138.3"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('O-P') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('O-P') ? 1 : 1}
            strokeWidth="0.5"
            d="M282.2 199.98L282.2 161.65"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('N-O') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('N-O') ? 1 : 1}
            strokeWidth="0.5"
            d="M282.2 161.65L282.2 138.3"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('Z-AB') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('Z-AB') ? 1 : 1}
            strokeWidth="0.5"
            d="M334.9 199.98L334.9 185.32"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('AB-AD') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('AB-AD') ? 1 : 1}
            strokeWidth="0.5"
            d="M334.9 185.32L334.9 138.3"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('N-AC') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('N-AC') ? 1 : 1}
            strokeWidth="0.5"
            d="M282.2 138.3L301.86 138.3"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('AC-AD') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('AC-AD') ? 1 : 1}
            strokeWidth="0.5"
            d="M301.86 138.3L334.9 138.3"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('AD-AE') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('AD-AE') ? 1 : 1}
            strokeWidth="0.5"
            d="M334.9 138.3L349.43 138.3"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('AE-AF') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('AE-AF') ? 1 : 1}
            strokeWidth="0.5"
            d="M349.43 138.3L367.77 138.3"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('AF-AG') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('AF-AG') ? 1 : 1}
            strokeWidth="0.5"
            d="M367.77 138.3L379.85 138.3"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('AG-AH') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('AG-AH') ? 1 : 1}
            strokeWidth="0.5"
            d="M379.85 138.3L401.4 138.3"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('AH-AI') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('AH-AI') ? 1 : 1}
            strokeWidth="0.5"
            d="M401.4 138.3L433.94 138.3"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('AS-AW') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('AS-AW') ? 1 : 1}
            strokeWidth="0.5"
            d="M433.94 288.05L433.94 255.83"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('AR-AS') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('AR-AS') ? 1 : 1}
            strokeWidth="0.5"
            d="M433.94 255.83L433.94 233.5"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('AM-AR') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('AM-AR') ? 1 : 1}
            strokeWidth="0.5"
            d="M433.94 233.5L433.94 203.73"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('BD-BE') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('BD-BE') ? 1 : 1}
            strokeWidth="0.5"
            d="M451.42 125.31L469.15 125.31"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('BE-BF') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('BE-BF') ? 1 : 1}
            strokeWidth="0.5"
            d="M469.15 125.31L492.01 125.31"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('BF-BG') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('BF-BG') ? 1 : 1}
            strokeWidth="0.5"
            d="M492.01 125.31L511.83 125.41"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('BC-BP') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('BC-BP') ? 1 : 1}
            strokeWidth="0.5"
            d="M451.42 152.8L481.49 152.8"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('BO-BP') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('BO-BP') ? 1 : 1}
            strokeWidth="0.5"
            d="M481.49 152.8L501.85 152.8"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('BN-BO') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('BN-BO') ? 1 : 1}
            strokeWidth="0.5"
            d="M501.85 152.8L517.7 152.8"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('BG-BH') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('BG-BH') ? 1 : 1}
            strokeWidth="0.5"
            d="M511.83 125.41L526.55 125.41"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('BH-BI') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('BH-BI') ? 1 : 1}
            strokeWidth="0.5"
            d="M526.55 125.41L546.19 125.41"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('BI-BJ') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('BI-BJ') ? 1 : 1}
            strokeWidth="0.5"
            d="M546.19 125.41L587.39 125.54"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('BM-BN') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('BM-BN') ? 1 : 1}
            strokeWidth="0.5"
            d="M517.7 152.8L526.74 152.8"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('BL-BM') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('BL-BM') ? 1 : 1}
            strokeWidth="0.5"
            d="M526.74 152.8L557.99 152.8"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('BK-BL') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('BK-BL') ? 1 : 1}
            strokeWidth="0.5"
            d="M557.99 152.8L587.39 152.8"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('BU-IW') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('BU-IW') ? 1 : 1}
            strokeWidth="0.5"
            d="M535.11 200.57L555.52 200.57"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('BU-BV') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('BU-BV') ? 1 : 1}
            strokeWidth="0.5"
            d="M555.52 200.57L555.52 210.04"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('BV-BW') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('BV-BW') ? 1 : 1}
            strokeWidth="0.5"
            d="M555.52 210.04L566.62 210.04"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('BW-BX') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('BW-BX') ? 1 : 1}
            strokeWidth="0.5"
            d="M566.62 210.04L566.62 216.85"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('BX-BY') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('BX-BY') ? 1 : 1}
            strokeWidth="0.5"
            d="M566.62 216.85L585.87 216.85"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('BY-BZ') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('BY-BZ') ? 1 : 1}
            strokeWidth="0.5"
            d="M585.87 216.85L585.87 221.55"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('BQ-BR') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('BQ-BR') ? 1 : 1}
            strokeWidth="0.5"
            d="M517.7 200.57L491.93 200.57"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('BR-BS') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('BR-BS') ? 1 : 1}
            strokeWidth="0.5"
            d="M491.93 200.57L460.19 200.57"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('BS-BT') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('BS-BT') ? 1 : 1}
            strokeWidth="0.5"
            d="M460.19 200.57L460.19 208.2"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('CA-IW') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('CA-IW') ? 1 : 1}
            strokeWidth="0.5"
            d="M535.11 200.57L535.11 257.09"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('CA-CB') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('CA-CB') ? 1 : 1}
            strokeWidth="0.5"
            d="M535.11 257.09L535.11 273.24"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('CH-CI') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('CH-CI') ? 1 : 1}
            strokeWidth="0.5"
            d="M535.11 308.34L561.58 308.34"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('CI-CJ') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('CI-CJ') ? 1 : 1}
            strokeWidth="0.5"
            d="M561.58 308.34L582.24 308.34"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('CH-CK') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('CH-CK') ? 1 : 1}
            strokeWidth="0.5"
            d="M535.11 308.34L535.11 326.07"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('CK-CL') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('CK-CL') ? 1 : 1}
            strokeWidth="0.5"
            d="M535.11 326.07L535.11 336.61"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('CQ-CR') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('CQ-CR') ? 1 : 1}
            strokeWidth="0.5"
            d="M513.29 336.61L498.14 336.61"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('CL-CM') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('CL-CM') ? 1 : 1}
            strokeWidth="0.5"
            d="M535.11 336.61L550.5 336.61"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('CM-CN') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('CM-CN') ? 1 : 1}
            strokeWidth="0.5"
            d="M550.5 336.61L590.45 336.61"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('AZ-CW') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('AZ-CW') ? 1 : 1}
            strokeWidth="0.5"
            d="M433.94 359.12L441.78 359.12"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('CV-CW') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('CV-CW') ? 1 : 1}
            strokeWidth="0.5"
            d="M441.78 359.12L451.48 359.12"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('CU-CV') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('CU-CV') ? 1 : 1}
            strokeWidth="0.5"
            d="M451.48 359.12L471.67 359.12"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('CT-CU') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('CT-CU') ? 1 : 1}
            strokeWidth="0.5"
            d="M471.67 359.12L487.54 359.12"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('CS-CT') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('CS-CT') ? 1 : 1}
            strokeWidth="0.5"
            d="M487.54 359.12L513.29 359.12"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('BA-Esc8') ? "#f00" : "#000"}
            strokeOpacity={props.color.includes('BA-Esc8') ? 1 : 1}
            strokeWidth="0.5"
            d="M433.94 383.76L442.18 383.76"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('CX-CY') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('CX-CY') ? 1 : 1}
            strokeWidth="0.5"
            d="M451.48 386.8L471.25 386.8"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('CP-DA') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('CP-DA') ? 1 : 1}
            strokeWidth="0.5"
            d="M556.86 359.12L556.86 375.17"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('DA-DB') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('DA-DB') ? 1 : 1}
            strokeWidth="0.5"
            d="M556.86 375.17L556.86 391.44"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('DC-DE') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('DC-DE') ? 1 : 1}
            strokeWidth="0.5"
            d="M485.76 413.78L508.41 413.78"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('DE-DF') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('DE-DF') ? 1 : 1}
            strokeWidth="0.5"
            d="M508.41 413.78L547.43 413.78"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('DF-DG') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('DF-DG') ? 1 : 1}
            strokeWidth="0.5"
            d="M547.43 413.78L556.86 413.78"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('DG-DH') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('DG-DH') ? 1 : 1}
            strokeWidth="0.5"
            d="M556.86 413.78L578.06 413.78"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('DH-DI') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('DH-DI') ? 1 : 1}
            strokeWidth="0.5"
            d="M578.06 413.78L589.63 413.78"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('CY-CZ') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('CY-CZ') ? 1 : 1}
            strokeWidth="0.5"
            d="M471.25 386.8L485.76 386.8"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('AT-AX') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('AT-AX') ? 1 : 1}
            strokeWidth="0.5"
            d="M368.64 333.9L368.64 298.42"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('AT-AV') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('AT-AV') ? 1 : 1}
            strokeWidth="0.5"
            d="M368.64 298.42L401.4 298.42"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('AV-AY') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('AV-AY') ? 1 : 1}
            strokeWidth="0.5"
            d="M401.4 298.42L433.94 333.9"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('AP-AT') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('AP-AT') ? 1 : 1}
            strokeWidth="0.5"
            d="M368.64 298.42L368.64 252.98"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('AP-AQ') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('AP-AQ') ? 1 : 1}
            strokeWidth="0.5"
            d="M368.64 252.98L368.64 233.08"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('W-Y') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('W-Y') ? 1 : 1}
            strokeWidth="0.5"
            d="M334.9 333.9L334.9 252.98"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('Y-AP') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('Y-AP') ? 1 : 1}
            strokeWidth="0.5"
            d="M368.64 252.98L334.9 252.98"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('Y-Z') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('Y-Z') ? 1 : 1}
            strokeWidth="0.5"
            d="M334.9 252.98L334.9 199.98"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('AU-AV') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('AU-AV') ? 1 : 1}
            strokeWidth="0.5"
            d="M401.4 298.42L401.4 288.05"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('AU-AW') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('AU-AW') ? 1 : 1}
            strokeWidth="0.5"
            d="M433.94 288.05L401.4 288.05"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('AO-AP') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('AO-AP') ? 1 : 1}
            strokeWidth="0.5"
            d="M368.64 252.98L401.4 252.98"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('AO-AU') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('AO-AU') ? 1 : 1}
            strokeWidth="0.5"
            d="M401.4 288.05L401.4 252.98"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('AN-AO') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('AN-AO') ? 1 : 1}
            strokeWidth="0.5"
            d="M401.4 252.98L401.4 203.73"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('AK-AN') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('AK-AN') ? 1 : 1}
            strokeWidth="0.5"
            d="M401.4 203.73L401.4 170.91"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('AK-AL') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('AK-AL') ? 1 : 1}
            strokeWidth="0.5"
            d="M401.4 170.91L433.94 170.91"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('AM-AN') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('AM-AN') ? 1 : 1}
            strokeWidth="0.5"
            d="M401.4 203.73L433.94 203.73"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('AH-AK') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('AH-AK') ? 1 : 1}
            strokeWidth="0.5"
            d="M401.4 170.91L401.4 138.3"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('AL-AM') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('AL-AM') ? 1 : 1}
            strokeWidth="0.5"
            d="M433.94 203.73L433.94 170.91"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('AJ-AL') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('AJ-AL') ? 1 : 1}
            strokeWidth="0.5"
            d="M433.94 170.91L433.94 152.8"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('A-DJ') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('A-DJ') ? 1 : 1}
            strokeWidth="0.5"
            d="M308.7 409.92L308.7 458.33"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('DJ-DK') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('DJ-DK') ? 1 : 1}
            strokeWidth="0.5"
            d="M308.7 458.33L581.71 458.33"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('DK-DL') ? "#0f0" : "#000"}
            strokeOpacity={props.color.includes('DK-DL') ? 1 : 1}
            strokeWidth="0.5"
            d="M581.71 458.33L581.71 486.97"
        ></path>
        <path
            fill="none"
            stroke={props.color.includes('DI-Esc10') ? "#f00" : "#000"}
            strokeOpacity={props.color.includes('DI-Esc10') ? 1 : 1}
            strokeWidth="0.5"
            d="M589.63 421.32L589.68 413.78"
        ></path>
    </Svg>
    </div>
  )
};

export default Caminhos;
