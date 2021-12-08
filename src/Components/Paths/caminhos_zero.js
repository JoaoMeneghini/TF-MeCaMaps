// Libs
import React from 'react';
// Styles
import { Svg } from './styles';

// render svg of paths, according to the vector returned by dijkstra algorithm
// viewbox was modified to fit path with map image
const Caminhos = (props) => {

    const color_path = '#4A89F3';
    const color_stair = '#DD4B3E';
    const color_test = '#0f0';
    const stroke = '1.5';

    const visible = 0;

    const mw = 0.555;
    const mh = 1;
    const w=800;
    const h=600;

    const x=w*(1-mw)/2-18.5;
    const y=h*(1-mh)/2+77.5;
    const w1=w*mw;
    const h1=h*mh;

    return (
        <div>
        <Svg
            viewBox={x.toString() + " " + y.toString() + " " + w1.toString() + " " + h1.toString()}
            >

            <path
                fill="none"
                stroke={props.color.includes('B-S') ? color_path : color_test}
                strokeOpacity={props.color.includes('B-S') ? 1 : visible}
                strokeWidth={stroke}
                d="M282.2 378.42L282.2 409.92"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('U-V') ? color_path : color_test}
                strokeOpacity={props.color.includes('U-V') ? 1 : visible}
                strokeWidth={stroke}
                d="M334.9 409.92L334.9 378.42"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('S-T') ? color_path : color_test}
                strokeOpacity={props.color.includes('S-T') ? 1 : visible}
                strokeWidth={stroke}
                d="M308.55 378.42L282.2 378.42"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('R-S') ? color_path : color_test}
                strokeOpacity={props.color.includes('R-S') ? 1 : visible}
                strokeWidth={stroke}
                d="M282.2 378.42L282.2 333.9"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('V-W') ? color_path : color_test}
                strokeOpacity={props.color.includes('V-W') ? 1 : visible}
                strokeWidth={stroke}
                d="M334.9 378.42L334.9 333.9"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('P-AA') ? color_path : color_test}
                strokeOpacity={props.color.includes('P-AA') ? 1 : visible}
                strokeWidth={stroke}
                d="M308.68 199.98L282.2 199.98"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('AX-AY') ? color_path : color_test}
                strokeOpacity={props.color.includes('AX-AY') ? 1 : visible}
                strokeWidth={stroke}
                d="M368.64 333.9L433.94 333.9"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('BC-BD') ? color_path : color_test}
                strokeOpacity={props.color.includes('BC-BD') ? 1 : visible}
                strokeWidth={stroke}
                d="M451.42 125.31L451.42 152.8"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('BJ-BK') ? color_path : color_test}
                strokeOpacity={props.color.includes('BJ-BK') ? 1 : visible}
                strokeWidth={stroke}
                d="M587.39 152.8L587.39 125.54"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('AJ-BB') ? color_path : color_test}
                strokeOpacity={props.color.includes('AJ-BB') ? 1 : visible}
                strokeWidth={stroke}
                d="M442.68 152.8L433.94 152.8"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('AI-AJ') ? color_path : color_test}
                strokeOpacity={props.color.includes('AI-AJ') ? 1 : visible}
                strokeWidth={stroke}
                d="M433.94 138.3L433.94 152.8"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('AY-AZ') ? color_path : color_test}
                strokeOpacity={props.color.includes('AY-AZ') ? 1 : visible}
                strokeWidth={stroke}
                d="M433.94 333.9L433.94 359.12"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('AZ-BA') ? color_path : color_test}
                strokeOpacity={props.color.includes('AZ-BA') ? 1 : visible}
                strokeWidth={stroke}
                d="M433.94 359.12L433.94 383.76"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('CV-CX') ? color_path : color_test}
                strokeOpacity={props.color.includes('CV-CX') ? 1 : visible}
                strokeWidth={stroke}
                d="M451.48 359.12L451.48 386.8"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('CN-CO') ? color_path : color_test}
                strokeOpacity={props.color.includes('CN-CO') ? 1 : visible}
                strokeWidth={stroke}
                d="M590.45 359.12L590.45 336.61"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('CL-CQ') ? color_path : color_test}
                strokeOpacity={props.color.includes('CL-CQ') ? 1 : visible}
                strokeWidth={stroke}
                d="M535.11 336.61L513.29 336.61"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('CO-CP') ? color_path : color_test}
                strokeOpacity={props.color.includes('CO-CP') ? 1 : visible}
                strokeWidth={stroke}
                d="M556.86 359.12L590.45 359.12"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('CQ-CS') ? color_path : color_test}
                strokeOpacity={props.color.includes('CQ-CS') ? 1 : visible}
                strokeWidth={stroke}
                d="M513.29 359.12L513.29 336.61"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('CP-CS') ? color_path : color_test}
                strokeOpacity={props.color.includes('CP-CS') ? 1 : visible}
                strokeWidth={stroke}
                d="M513.29 359.12L556.86 359.12"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('DB-DG') ? color_path : color_test}
                strokeOpacity={props.color.includes('DB-DG') ? 1 : visible}
                strokeWidth={stroke}
                d="M556.86 391.44L556.86 413.78"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('CZ-DC') ? color_path : color_test}
                strokeOpacity={props.color.includes('CZ-DC') ? 1 : visible}
                strokeWidth={stroke}
                d="M485.76 386.8L485.76 413.78"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('CB-CH') ? color_path : color_test}
                strokeOpacity={props.color.includes('CB-CH') ? 1 : visible}
                strokeWidth={stroke}
                d="M535.11 308.34L535.11 273.24"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('CB-CC') ? color_path : color_test}
                strokeOpacity={props.color.includes('CB-CC') ? 1 : visible}
                strokeWidth={stroke}
                d="M535.11 273.24L496.71 273.24"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('CC-CD') ? color_path : color_test}
                strokeOpacity={props.color.includes('CC-CD') ? 1 : visible}
                strokeWidth={stroke}
                d="M496.71 273.24L496.71 278.99"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('CD-CE') ? color_path : color_test}
                strokeOpacity={props.color.includes('CD-CE') ? 1 : visible}
                strokeWidth={stroke}
                d="M496.71 278.99L489.27 278.99"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('CE-CF') ? color_path : color_test}
                strokeOpacity={props.color.includes('CE-CF') ? 1 : visible}
                strokeWidth={stroke}
                d="M489.27 278.99L489.27 288.05"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('AW-CG') ? color_path : color_test}
                strokeOpacity={props.color.includes('AW-CG') ? 1 : visible}
                strokeWidth={stroke}
                d="M449.14 288.05L433.94 288.05"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('AW-AY') ? color_path : color_test}
                strokeOpacity={props.color.includes('AW-AY') ? 1 : visible}
                strokeWidth={stroke}
                d="M433.94 288.05L433.94 333.9"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('BQ-IW') ? color_path : color_test}
                strokeOpacity={props.color.includes('BQ-IW') ? 1 : visible}
                strokeWidth={stroke}
                d="M535.11 200.57L517.7 200.57"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('BN-BQ') ? color_path : color_test}
                strokeOpacity={props.color.includes('BN-BQ') ? 1 : visible}
                strokeWidth={stroke}
                d="M517.7 200.57L517.7 152.8"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('BB-BC') ? color_path : color_test}
                strokeOpacity={props.color.includes('BB-BC') ? 1 : visible}
                strokeWidth={stroke}
                d="M442.68 152.8L451.42 152.8"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('BB-Esc3') ? color_stair : color_test}
                strokeOpacity={props.color.includes('BB-Esc3') ? 1 : visible}
                strokeWidth={stroke}
                d="M442.68 152.8L442.68 162.75"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('BG-Esc4') ? color_stair : color_test}
                strokeOpacity={props.color.includes('BG-Esc4') ? 1 : visible}
                strokeWidth={stroke}
                d="M511.83 125.41L511.83 112.96"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('BK-Esc5') ? color_stair : color_test}
                strokeOpacity={props.color.includes('BK-Esc5') ? 1 : visible}
                strokeWidth={stroke}
                d="M587.39 152.8L587.39 161.68"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('CN-Esc7') ? color_stair : color_test}
                strokeOpacity={props.color.includes('CN-Esc7') ? 1 : visible}
                strokeWidth={stroke}
                d="M590.45 336.61L590.45 327.84"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('DB-Esc9') ? color_stair : color_test}
                strokeOpacity={props.color.includes('DB-Esc9') ? 1 : visible}
                strokeWidth={stroke}
                d="M556.86 391.44L564.41 391.44"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('Z-AA') ? color_path : color_test}
                strokeOpacity={props.color.includes('Z-AA') ? 1 : visible}
                strokeWidth={stroke}
                d="M308.68 199.98L334.9 199.98"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('AA-Esc2') ? color_stair : color_test}
                strokeOpacity={props.color.includes('AA-Esc2') ? 1 : visible}
                strokeWidth={stroke}
                d="M308.68 199.98L308.68 215.11"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('T-V') ? color_path : color_test}
                strokeOpacity={props.color.includes('T-V') ? 1 : visible}
                strokeWidth={stroke}
                d="M308.55 378.42L334.9 378.42"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('T-Esc1') ? color_stair : color_test}
                strokeOpacity={props.color.includes('T-Esc1') ? 1 : visible}
                strokeWidth={stroke}
                d="M308.55 378.42L308.55 387.75"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('W-AX') ? color_path : color_test}
                strokeOpacity={props.color.includes('W-AX') ? 1 : visible}
                strokeWidth={stroke}
                d="M334.9 333.9L368.64 333.9"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('AX-Esc11') ? color_stair : color_test}
                strokeOpacity={props.color.includes('AX-Esc11') ? 1 : visible}
                strokeWidth={stroke}
                d="M368.64 333.9L368.64 342.3"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('CG-Esc6') ? color_stair : color_test}
                strokeOpacity={props.color.includes('CG-Esc6') ? 1 : visible}
                strokeWidth={stroke}
                d="M449.14 288.05L449.14 276.81"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('CF-CG') ? color_path : color_test}
                strokeOpacity={props.color.includes('CF-CG') ? 1 : visible}
                strokeWidth={stroke}
                d="M449.14 288.05L489.28 288.05"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('C-D') ? color_path : color_test}
                strokeOpacity={props.color.includes('C-D') ? 1 : visible}
                strokeWidth={stroke}
                d="M208.94 409.92L208.94 367.04"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('D-E') ? color_path : color_test}
                strokeOpacity={props.color.includes('D-E') ? 1 : visible}
                strokeWidth={stroke}
                d="M208.94 367.04L208.94 336.99"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('E-F') ? color_path : color_test}
                strokeOpacity={props.color.includes('E-F') ? 1 : visible}
                strokeWidth={stroke}
                d="M208.94 336.99L208.94 305.32"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('F-G') ? color_path : color_test}
                strokeOpacity={props.color.includes('F-G') ? 1 : visible}
                strokeWidth={stroke}
                d="M208.94 305.85L208.94 274.61"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('G-H') ? color_path : color_test}
                strokeOpacity={props.color.includes('G-H') ? 1 : visible}
                strokeWidth={stroke}
                d="M208.94 274.61L208.94 243.56"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('H-I') ? color_path : color_test}
                strokeOpacity={props.color.includes('H-I') ? 1 : visible}
                strokeWidth={stroke}
                d="M208.94 243.56L208.94 210.26"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('I-J') ? color_path : color_test}
                strokeOpacity={props.color.includes('I-J') ? 1 : visible}
                strokeWidth={stroke}
                d="M208.94 210.26L208.98 194.86"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('J-K') ? color_path : color_test}
                strokeOpacity={props.color.includes('J-K') ? 1 : visible}
                strokeWidth={stroke}
                d="M208.98 194.86L208.98 175.95"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('K-L') ? color_path : color_test}
                strokeOpacity={props.color.includes('K-L') ? 1 : visible}
                strokeWidth={stroke}
                d="M208.98 175.95L208.94 138.3"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('B-C') ? color_path : color_test}
                strokeOpacity={props.color.includes('B-C') ? 1 : visible}
                strokeWidth={stroke}
                d="M208.94 409.92L282.2 409.92"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('A-B') ? color_path : color_test}
                strokeOpacity={props.color.includes('A-B') ? 1 : visible}
                strokeWidth={stroke}
                d="M282.2 409.92L308.7 409.92"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('A-U') ? color_path : color_test}
                strokeOpacity={props.color.includes('A-U') ? 1 : visible}
                strokeWidth={stroke}
                d="M308.7 409.92L334.9 409.92"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('R-X') ? color_path : color_test}
                strokeOpacity={props.color.includes('R-X') ? 1 : visible}
                strokeWidth={stroke}
                d="M282.2 333.9L307.78 333.9"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('W-X') ? color_path : color_test}
                strokeOpacity={props.color.includes('W-X') ? 1 : visible}
                strokeWidth={stroke}
                d="M307.78 333.9L334.9 333.9"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('Q-R') ? color_path : color_test}
                strokeOpacity={props.color.includes('Q-R') ? 1 : visible}
                strokeWidth={stroke}
                d="M282.2 333.9L282.2 218.14"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('P-Q') ? color_path : color_test}
                strokeOpacity={props.color.includes('P-Q') ? 1 : visible}
                strokeWidth={stroke}
                d="M282.2 218.14L282.2 199.98"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('L-M') ? color_path : color_test}
                strokeOpacity={props.color.includes('L-M') ? 1 : visible}
                strokeWidth={stroke}
                d="M208.94 138.3L253.56 138.3"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('M-N') ? color_path : color_test}
                strokeOpacity={props.color.includes('M-N') ? 1 : visible}
                strokeWidth={stroke}
                d="M253.56 138.3L282.2 138.3"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('O-P') ? color_path : color_test}
                strokeOpacity={props.color.includes('O-P') ? 1 : visible}
                strokeWidth={stroke}
                d="M282.2 199.98L282.2 161.65"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('N-O') ? color_path : color_test}
                strokeOpacity={props.color.includes('N-O') ? 1 : visible}
                strokeWidth={stroke}
                d="M282.2 161.65L282.2 138.3"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('Z-AB') ? color_path : color_test}
                strokeOpacity={props.color.includes('Z-AB') ? 1 : visible}
                strokeWidth={stroke}
                d="M334.9 199.98L334.9 185.32"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('AB-AD') ? color_path : color_test}
                strokeOpacity={props.color.includes('AB-AD') ? 1 : visible}
                strokeWidth={stroke}
                d="M334.9 185.32L334.9 138.3"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('N-AC') ? color_path : color_test}
                strokeOpacity={props.color.includes('N-AC') ? 1 : visible}
                strokeWidth={stroke}
                d="M282.2 138.3L301.86 138.3"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('AC-AD') ? color_path : color_test}
                strokeOpacity={props.color.includes('AC-AD') ? 1 : visible}
                strokeWidth={stroke}
                d="M301.86 138.3L334.9 138.3"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('AD-AE') ? color_path : color_test}
                strokeOpacity={props.color.includes('AD-AE') ? 1 : visible}
                strokeWidth={stroke}
                d="M334.9 138.3L349.43 138.3"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('AE-AF') ? color_path : color_test}
                strokeOpacity={props.color.includes('AE-AF') ? 1 : visible}
                strokeWidth={stroke}
                d="M349.43 138.3L367.77 138.3"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('AF-AG') ? color_path : color_test}
                strokeOpacity={props.color.includes('AF-AG') ? 1 : visible}
                strokeWidth={stroke}
                d="M367.77 138.3L379.85 138.3"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('AG-AH') ? color_path : color_test}
                strokeOpacity={props.color.includes('AG-AH') ? 1 : visible}
                strokeWidth={stroke}
                d="M379.85 138.3L401.4 138.3"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('AH-AI') ? color_path : color_test}
                strokeOpacity={props.color.includes('AH-AI') ? 1 : visible}
                strokeWidth={stroke}
                d="M401.4 138.3L433.94 138.3"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('AS-AW') ? color_path : color_test}
                strokeOpacity={props.color.includes('AS-AW') ? 1 : visible}
                strokeWidth={stroke}
                d="M433.94 288.05L433.94 255.83"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('AR-AS') ? color_path : color_test}
                strokeOpacity={props.color.includes('AR-AS') ? 1 : visible}
                strokeWidth={stroke}
                d="M433.94 255.83L433.94 233.5"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('AM-AR') ? color_path : color_test}
                strokeOpacity={props.color.includes('AM-AR') ? 1 : visible}
                strokeWidth={stroke}
                d="M433.94 233.5L433.94 203.73"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('BD-BE') ? color_path : color_test}
                strokeOpacity={props.color.includes('BD-BE') ? 1 : visible}
                strokeWidth={stroke}
                d="M451.42 125.31L469.15 125.31"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('BE-BF') ? color_path : color_test}
                strokeOpacity={props.color.includes('BE-BF') ? 1 : visible}
                strokeWidth={stroke}
                d="M469.15 125.31L492.01 125.31"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('BF-BG') ? color_path : color_test}
                strokeOpacity={props.color.includes('BF-BG') ? 1 : visible}
                strokeWidth={stroke}
                d="M492.01 125.31L511.83 125.41"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('BC-BP') ? color_path : color_test}
                strokeOpacity={props.color.includes('BC-BP') ? 1 : visible}
                strokeWidth={stroke}
                d="M451.42 152.8L481.49 152.8"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('BO-BP') ? color_path : color_test}
                strokeOpacity={props.color.includes('BO-BP') ? 1 : visible}
                strokeWidth={stroke}
                d="M481.49 152.8L501.85 152.8"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('BN-BO') ? color_path : color_test}
                strokeOpacity={props.color.includes('BN-BO') ? 1 : visible}
                strokeWidth={stroke}
                d="M501.85 152.8L517.7 152.8"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('BG-BH') ? color_path : color_test}
                strokeOpacity={props.color.includes('BG-BH') ? 1 : visible}
                strokeWidth={stroke}
                d="M511.83 125.41L526.55 125.41"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('BH-BI') ? color_path : color_test}
                strokeOpacity={props.color.includes('BH-BI') ? 1 : visible}
                strokeWidth={stroke}
                d="M526.55 125.41L546.19 125.41"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('BI-BJ') ? color_path : color_test}
                strokeOpacity={props.color.includes('BI-BJ') ? 1 : visible}
                strokeWidth={stroke}
                d="M546.19 125.41L587.39 125.54"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('BM-BN') ? color_path : color_test}
                strokeOpacity={props.color.includes('BM-BN') ? 1 : visible}
                strokeWidth={stroke}
                d="M517.7 152.8L526.74 152.8"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('BL-BM') ? color_path : color_test}
                strokeOpacity={props.color.includes('BL-BM') ? 1 : visible}
                strokeWidth={stroke}
                d="M526.74 152.8L557.99 152.8"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('BK-BL') ? color_path : color_test}
                strokeOpacity={props.color.includes('BK-BL') ? 1 : visible}
                strokeWidth={stroke}
                d="M557.99 152.8L587.39 152.8"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('BU-IW') ? color_path : color_test}
                strokeOpacity={props.color.includes('BU-IW') ? 1 : visible}
                strokeWidth={stroke}
                d="M535.11 200.57L555.52 200.57"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('BU-BV') ? color_path : color_test}
                strokeOpacity={props.color.includes('BU-BV') ? 1 : visible}
                strokeWidth={stroke}
                d="M555.52 200.57L555.52 210.04"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('BV-BW') ? color_path : color_test}
                strokeOpacity={props.color.includes('BV-BW') ? 1 : visible}
                strokeWidth={stroke}
                d="M555.52 210.04L566.62 210.04"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('BW-BX') ? color_path : color_test}
                strokeOpacity={props.color.includes('BW-BX') ? 1 : visible}
                strokeWidth={stroke}
                d="M566.62 210.04L566.62 216.85"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('BX-BY') ? color_path : color_test}
                strokeOpacity={props.color.includes('BX-BY') ? 1 : visible}
                strokeWidth={stroke}
                d="M566.62 216.85L585.87 216.85"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('BY-BZ') ? color_path : color_test}
                strokeOpacity={props.color.includes('BY-BZ') ? 1 : visible}
                strokeWidth={stroke}
                d="M585.87 216.85L585.87 221.55"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('BQ-BR') ? color_path : color_test}
                strokeOpacity={props.color.includes('BQ-BR') ? 1 : visible}
                strokeWidth={stroke}
                d="M517.7 200.57L491.93 200.57"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('BR-BS') ? color_path : color_test}
                strokeOpacity={props.color.includes('BR-BS') ? 1 : visible}
                strokeWidth={stroke}
                d="M491.93 200.57L460.19 200.57"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('BS-BT') ? color_path : color_test}
                strokeOpacity={props.color.includes('BS-BT') ? 1 : visible}
                strokeWidth={stroke}
                d="M460.19 200.57L460.19 208.2"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('CA-IW') ? color_path : color_test}
                strokeOpacity={props.color.includes('CA-IW') ? 1 : visible}
                strokeWidth={stroke}
                d="M535.11 200.57L535.11 257.09"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('CA-CB') ? color_path : color_test}
                strokeOpacity={props.color.includes('CA-CB') ? 1 : visible}
                strokeWidth={stroke}
                d="M535.11 257.09L535.11 273.24"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('CH-CI') ? color_path : color_test}
                strokeOpacity={props.color.includes('CH-CI') ? 1 : visible}
                strokeWidth={stroke}
                d="M535.11 308.34L561.58 308.34"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('CI-CJ') ? color_path : color_test}
                strokeOpacity={props.color.includes('CI-CJ') ? 1 : visible}
                strokeWidth={stroke}
                d="M561.58 308.34L582.24 308.34"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('CH-CK') ? color_path : color_test}
                strokeOpacity={props.color.includes('CH-CK') ? 1 : visible}
                strokeWidth={stroke}
                d="M535.11 308.34L535.11 326.07"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('CK-CL') ? color_path : color_test}
                strokeOpacity={props.color.includes('CK-CL') ? 1 : visible}
                strokeWidth={stroke}
                d="M535.11 326.07L535.11 336.61"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('CQ-CR') ? color_path : color_test}
                strokeOpacity={props.color.includes('CQ-CR') ? 1 : visible}
                strokeWidth={stroke}
                d="M513.29 336.61L498.14 336.61"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('CL-CM') ? color_path : color_test}
                strokeOpacity={props.color.includes('CL-CM') ? 1 : visible}
                strokeWidth={stroke}
                d="M535.11 336.61L550.5 336.61"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('CM-CN') ? color_path : color_test}
                strokeOpacity={props.color.includes('CM-CN') ? 1 : visible}
                strokeWidth={stroke}
                d="M550.5 336.61L590.45 336.61"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('AZ-CW') ? color_path : color_test}
                strokeOpacity={props.color.includes('AZ-CW') ? 1 : visible}
                strokeWidth={stroke}
                d="M433.94 359.12L441.78 359.12"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('CV-CW') ? color_path : color_test}
                strokeOpacity={props.color.includes('CV-CW') ? 1 : visible}
                strokeWidth={stroke}
                d="M441.78 359.12L451.48 359.12"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('CU-CV') ? color_path : color_test}
                strokeOpacity={props.color.includes('CU-CV') ? 1 : visible}
                strokeWidth={stroke}
                d="M451.48 359.12L471.67 359.12"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('CT-CU') ? color_path : color_test}
                strokeOpacity={props.color.includes('CT-CU') ? 1 : visible}
                strokeWidth={stroke}
                d="M471.67 359.12L487.54 359.12"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('CS-CT') ? color_path : color_test}
                strokeOpacity={props.color.includes('CS-CT') ? 1 : visible}
                strokeWidth={stroke}
                d="M487.54 359.12L513.29 359.12"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('BA-Esc8') ? color_stair : color_test}
                strokeOpacity={props.color.includes('BA-Esc8') ? 1 : visible}
                strokeWidth={stroke}
                d="M433.94 383.76L442.18 383.76"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('CX-CY') ? color_path : color_test}
                strokeOpacity={props.color.includes('CX-CY') ? 1 : visible}
                strokeWidth={stroke}
                d="M451.48 386.8L471.25 386.8"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('CP-DA') ? color_path : color_test}
                strokeOpacity={props.color.includes('CP-DA') ? 1 : visible}
                strokeWidth={stroke}
                d="M556.86 359.12L556.86 375.17"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('DA-DB') ? color_path : color_test}
                strokeOpacity={props.color.includes('DA-DB') ? 1 : visible}
                strokeWidth={stroke}
                d="M556.86 375.17L556.86 391.44"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('DC-DE') ? color_path : color_test}
                strokeOpacity={props.color.includes('DC-DE') ? 1 : visible}
                strokeWidth={stroke}
                d="M485.76 413.78L508.41 413.78"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('DE-DF') ? color_path : color_test}
                strokeOpacity={props.color.includes('DE-DF') ? 1 : visible}
                strokeWidth={stroke}
                d="M508.41 413.78L547.43 413.78"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('DF-DG') ? color_path : color_test}
                strokeOpacity={props.color.includes('DF-DG') ? 1 : visible}
                strokeWidth={stroke}
                d="M547.43 413.78L556.86 413.78"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('DG-DH') ? color_path : color_test}
                strokeOpacity={props.color.includes('DG-DH') ? 1 : visible}
                strokeWidth={stroke}
                d="M556.86 413.78L578.06 413.78"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('DH-DI') ? color_path : color_test}
                strokeOpacity={props.color.includes('DH-DI') ? 1 : visible}
                strokeWidth={stroke}
                d="M578.06 413.78L589.63 413.78"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('CY-CZ') ? color_path : color_test}
                strokeOpacity={props.color.includes('CY-CZ') ? 1 : visible}
                strokeWidth={stroke}
                d="M471.25 386.8L485.76 386.8"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('AT-AX') ? color_path : color_test}
                strokeOpacity={props.color.includes('AT-AX') ? 1 : visible}
                strokeWidth={stroke}
                d="M368.64 333.9L368.64 298.42"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('AT-AV') ? color_path : color_test}
                strokeOpacity={props.color.includes('AT-AV') ? 1 : visible}
                strokeWidth={stroke}
                d="M368.64 298.42L401.4 298.42"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('AV-AY') ? color_path : color_test}
                strokeOpacity={props.color.includes('AV-AY') ? 1 : visible}
                strokeWidth={stroke}
                d="M401.4 298.42L433.94 333.9"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('AP-AT') ? color_path : color_test}
                strokeOpacity={props.color.includes('AP-AT') ? 1 : visible}
                strokeWidth={stroke}
                d="M368.64 298.42L368.64 252.98"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('AP-AQ') ? color_path : color_test}
                strokeOpacity={props.color.includes('AP-AQ') ? 1 : visible}
                strokeWidth={stroke}
                d="M368.64 252.98L368.64 233.08"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('W-Y') ? color_path : color_test}
                strokeOpacity={props.color.includes('W-Y') ? 1 : visible}
                strokeWidth={stroke}
                d="M334.9 333.9L334.9 252.98"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('Y-AP') ? color_path : color_test}
                strokeOpacity={props.color.includes('Y-AP') ? 1 : visible}
                strokeWidth={stroke}
                d="M368.64 252.98L334.9 252.98"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('Y-Z') ? color_path : color_test}
                strokeOpacity={props.color.includes('Y-Z') ? 1 : visible}
                strokeWidth={stroke}
                d="M334.9 252.98L334.9 199.98"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('AU-AV') ? color_path : color_test}
                strokeOpacity={props.color.includes('AU-AV') ? 1 : visible}
                strokeWidth={stroke}
                d="M401.4 298.42L401.4 288.05"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('AU-AW') ? color_path : color_test}
                strokeOpacity={props.color.includes('AU-AW') ? 1 : visible}
                strokeWidth={stroke}
                d="M433.94 288.05L401.4 288.05"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('AO-AP') ? color_path : color_test}
                strokeOpacity={props.color.includes('AO-AP') ? 1 : visible}
                strokeWidth={stroke}
                d="M368.64 252.98L401.4 252.98"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('AO-AU') ? color_path : color_test}
                strokeOpacity={props.color.includes('AO-AU') ? 1 : visible}
                strokeWidth={stroke}
                d="M401.4 288.05L401.4 252.98"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('AN-AO') ? color_path : color_test}
                strokeOpacity={props.color.includes('AN-AO') ? 1 : visible}
                strokeWidth={stroke}
                d="M401.4 252.98L401.4 203.73"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('AK-AN') ? color_path : color_test}
                strokeOpacity={props.color.includes('AK-AN') ? 1 : visible}
                strokeWidth={stroke}
                d="M401.4 203.73L401.4 170.91"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('AK-AL') ? color_path : color_test}
                strokeOpacity={props.color.includes('AK-AL') ? 1 : visible}
                strokeWidth={stroke}
                d="M401.4 170.91L433.94 170.91"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('AM-AN') ? color_path : color_test}
                strokeOpacity={props.color.includes('AM-AN') ? 1 : visible}
                strokeWidth={stroke}
                d="M401.4 203.73L433.94 203.73"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('AH-AK') ? color_path : color_test}
                strokeOpacity={props.color.includes('AH-AK') ? 1 : visible}
                strokeWidth={stroke}
                d="M401.4 170.91L401.4 138.3"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('AL-AM') ? color_path : color_test}
                strokeOpacity={props.color.includes('AL-AM') ? 1 : visible}
                strokeWidth={stroke}
                d="M433.94 203.73L433.94 170.91"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('AJ-AL') ? color_path : color_test}
                strokeOpacity={props.color.includes('AJ-AL') ? 1 : visible}
                strokeWidth={stroke}
                d="M433.94 170.91L433.94 152.8"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('A-DJ') ? color_path : color_test}
                strokeOpacity={props.color.includes('A-DJ') ? 1 : visible}
                strokeWidth={stroke}
                d="M308.7 409.92L308.7 458.33"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('DJ-DK') ? color_path : color_test}
                strokeOpacity={props.color.includes('DJ-DK') ? 1 : visible}
                strokeWidth={stroke}
                d="M308.7 458.33L581.71 458.33"
            ></path>
            <path
                fill="none"
                stroke={props.color.includes('DI-Esc10') ? color_stair : color_test}
                strokeOpacity={props.color.includes('DI-Esc10') ? 1 : visible}
                strokeWidth={stroke}
                d="M589.63 421.32L589.68 413.78"
            ></path>
        </Svg>
    </div>
  )
};

export default Caminhos;
