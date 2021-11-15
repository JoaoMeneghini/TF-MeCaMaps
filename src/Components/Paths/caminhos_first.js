import React from 'react';
import { Svg } from './styles';

const Caminhos = (props) => {

    const mw = 1;
    const mh = 0.25;
    const w=800;
    const h=600;

    const x=w*(1-mw)/2;
    const y=h*(1-mh)/2;
    const w1=w*mw;
    const h1=h*mh;

  return (
    <div>
      <Svg
        preserveAspectRatio="xMidYMid meet"
        viewBox={x.toString() + " " + y.toString() + " " + w1.toString() + " " + h1.toString()}
      >
        <path
          fill="none"
          stroke={props.color.includes('EX-Esc1') ? "RED" : "#000"}
          strokeOpacity={props.color.includes('EX-Esc1') ? 1 : 1}
          strokeWidth="0.5"
          d="M250.92 417.68L250.92 407.37"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('DU-EX') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('DU-EX') ? 1 : 1}
          strokeWidth="0.5"
          d="M250.92 407.37L236.56 407.37"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('EX-FG') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('EX-FG') ? 1 : 1}
          strokeWidth="0.5"
          d="M250.92 407.37L265.69 407.37"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('DS-FE') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('DS-FE') ? 1 : 1}
          strokeWidth="0.5"
          d="M236.56 432.97L265.69 432.97"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('DZ-FL') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('DZ-FL') ? 1 : 1}
          strokeWidth="0.5"
          d="M265.69 354.44L236.56 354.4"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('EN-FX') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('EN-FX') ? 1 : 1}
          strokeWidth="0.5"
          d="M236.56 231.15L265.69 231.15"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('EP-EW') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('EP-EW') ? 1 : 1}
          strokeWidth="0.5"
          d="M236.56 211.57L250.93 211.57"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('FX-FY') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('FX-FY') ? 1 : 1}
          strokeWidth="0.5"
          d="M265.69 231.15L265.69 211.57"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('FL-GE') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('FL-GE') ? 1 : 1}
          strokeWidth="0.5"
          d="M265.69 354.44L317.06 354.58"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('GE-HC') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('GE-HC') ? 1 : 1}
          strokeWidth="0.5"
          d="M317.06 354.58L389.32 354.79"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('HB-HC') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('HB-HC') ? 1 : 1}
          strokeWidth="0.5"
          d="M389.32 354.79L389.32 390.86"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('HB-Esc8') ? "RED" : "#000"}
          strokeOpacity={props.color.includes('HB-Esc8') ? 1 : 1}
          strokeWidth="0.5"
          d="M389.32 390.86L397.44 390.86"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('GZ-HA') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('GZ-HA') ? 1 : 1}
          strokeWidth="0.5"
          d="M389.32 417.34L398.33 417.34"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('GF-GG') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('GF-GG') ? 1 : 1}
          strokeWidth="0.5"
          d="M398.33 450.87L387.3 450.87"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('GS-GT') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('GS-GT') ? 1 : 1}
          strokeWidth="0.5"
          d="M558.78 450.56L558.78 470.5"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('GW-GX') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('GW-GX') ? 1 : 1}
          strokeWidth="0.5"
          d="M463.8 387.35L529.18 387.49"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('GV-GW') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('GV-GW') ? 1 : 1}
          strokeWidth="0.5"
          d="M529.18 387.49L529.18 402.24"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('HR-HS') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('HR-HS') ? 1 : 1}
          strokeWidth="0.5"
          d="M389.32 305.3L407.87 305.3"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('HS-Esc6') ? "RED" : "#000"}
          strokeOpacity={props.color.includes('HS-Esc6') ? 1 : 1}
          strokeWidth="0.5"
          d="M407.87 305.3L407.87 292.84"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('HS-HT') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('HS-HT') ? 1 : 1}
          strokeWidth="0.5"
          d="M407.87 305.3L477.9 305.3"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('IE-IF') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('IE-IF') ? 1 : 1}
          strokeWidth="0.5"
          d="M389.32 161.88L398.41 161.88"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('IF-IV') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('IF-IV') ? 1 : 1}
          strokeWidth="0.5"
          d="M398.41 161.88L398.41 124.66"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('IN-Esc5') ? "RED" : "#000"}
          strokeOpacity={props.color.includes('IN-Esc5') ? 1 : 1}
          strokeWidth="0.5"
          d="M562.23 161.88L562.23 174.71"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('IN-IO') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('IN-IO') ? 1 : 1}
          strokeWidth="0.5"
          d="M562.23 161.88L562.23 124.66"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('IR-Esc4') ? "RED" : "#000"}
          strokeOpacity={props.color.includes('IR-Esc4') ? 1 : 1}
          strokeWidth="0.5"
          d="M474.91 124.66L474.91 113.36"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('GG-GH') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('GG-GH') ? 1 : 1}
          strokeWidth="0.5"
          d="M398.33 450.87L404.25 450.87"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('GH-GI') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('GH-GI') ? 1 : 1}
          strokeWidth="0.5"
          d="M404.25 450.87L412.37 450.87"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('GI-GJ') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('GI-GJ') ? 1 : 1}
          strokeWidth="0.5"
          d="M412.37 450.87L420.39 450.87"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('GJ-GK') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('GJ-GK') ? 1 : 1}
          strokeWidth="0.5"
          d="M420.39 450.87L428.54 450.81"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('GK-GL') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('GK-GL') ? 1 : 1}
          strokeWidth="0.5"
          d="M428.54 450.81L438.21 450.75"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('GL-GM') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('GL-GM') ? 1 : 1}
          strokeWidth="0.5"
          d="M438.21 450.75L447.03 450.69"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('GM-GN') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('GM-GN') ? 1 : 1}
          strokeWidth="0.5"
          d="M447.03 450.69L456.24 450.63"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('GN-GO') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('GN-GO') ? 1 : 1}
          strokeWidth="0.5"
          d="M456.24 450.63L465.37 450.56"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('GO-GP') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('GO-GP') ? 1 : 1}
          strokeWidth="0.5"
          d="M465.37 450.56L491.02 450.56"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('GP-GQ') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('GP-GQ') ? 1 : 1}
          strokeWidth="0.5"
          d="M491.02 450.56L512.39 450.56"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('GQ-GR') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('GQ-GR') ? 1 : 1}
          strokeWidth="0.5"
          d="M512.39 450.56L536.83 450.56"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('GR-GS') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('GR-GS') ? 1 : 1}
          strokeWidth="0.5"
          d="M536.83 450.56L558.78 450.56"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('GY-GZ') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('GY-GZ') ? 1 : 1}
          strokeWidth="0.5"
          d="M398.33 417.34L398.33 428.83"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('GH-GY') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('GH-GY') ? 1 : 1}
          strokeWidth="0.5"
          d="M398.33 428.83L398.33 450.87"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('HC-HD') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('HC-HD') ? 1 : 1}
          strokeWidth="0.5"
          d="M389.32 354.79L397.19 354.79"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('HD-HE') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('HD-HE') ? 1 : 1}
          strokeWidth="0.5"
          d="M397.19 354.79L415.76 354.79"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('qlq coisa') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('HE-HF') ? 1 : 1}
          strokeWidth="0.5"
          d="M415.76 354.79L428.75 354.79"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('HF-HG') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('HF-HG') ? 1 : 1}
          strokeWidth="0.5"
          d="M428.75 354.79L445.25 354.79"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('HG-HH') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('HG-HH') ? 1 : 1}
          strokeWidth="0.5"
          d="M445.25 354.79L462.57 354.79"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('HH-HI') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('HH-HI') ? 1 : 1}
          strokeWidth="0.5"
          d="M462.57 354.79L475.99 354.79"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('HI-HJ') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('HI-HJ') ? 1 : 1}
          strokeWidth="0.5"
          d="M475.99 354.79L485.16 354.79"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('HJ-HK') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('HJ-HK') ? 1 : 1}
          strokeWidth="0.5"
          d="M485.16 354.79L498.98 354.79"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('HM-HN') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('HM-HN') ? 1 : 1}
          strokeWidth="0.5"
          d="M522.96 354.79L537.92 354.79"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('HN-HO') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('HN-HO') ? 1 : 1}
          strokeWidth="0.5"
          d="M537.92 354.79L549.85 354.79"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('HO-HP') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('HO-HP') ? 1 : 1}
          strokeWidth="0.5"
          d="M549.85 354.79L560.04 354.79"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('HP-Esc7') ? "RED" : "#000"}
          strokeOpacity={props.color.includes('HP-Esc7') ? 1 : 1}
          strokeWidth="0.5"
          d="M560.04 354.79L560.04 346.55"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('HK-HL') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('HK-HL') ? 1 : 1}
          strokeWidth="0.5"
          d="M498.98 354.79L513.64 354.79"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('HL-HM') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('HL-HM') ? 1 : 1}
          strokeWidth="0.5"
          d="M513.64 354.79L522.96 354.79"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('HC-HQ') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('HC-HQ') ? 1 : 1}
          strokeWidth="0.5"
          d="M389.32 354.79L389.32 326.57"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('HQ-HR') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('HQ-HR') ? 1 : 1}
          strokeWidth="0.5"
          d="M389.32 326.57L389.32 305.3"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('HR-HU') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('HR-HU') ? 1 : 1}
          strokeWidth="0.5"
          d="M389.32 305.3L389.32 281.94"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('HU-HV') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('HU-HV') ? 1 : 1}
          strokeWidth="0.5"
          d="M389.32 281.94L389.32 270.78"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('HV-HW') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('HV-HW') ? 1 : 1}
          strokeWidth="0.5"
          d="M389.32 270.78L389.32 259.59"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('HW-HX') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('HW-HX') ? 1 : 1}
          strokeWidth="0.5"
          d="M389.32 259.59L389.32 250.93"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('HX-HY') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('HX-HY') ? 1 : 1}
          strokeWidth="0.5"
          d="M389.32 250.93L389.32 239.59"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('HY-HZ') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('HY-HZ') ? 1 : 1}
          strokeWidth="0.5"
          d="M389.32 239.59L389.32 223.54"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('HZ-IA') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('HZ-IA') ? 1 : 1}
          strokeWidth="0.5"
          d="M389.32 223.54L389.32 215.14"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('IA-IB') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('IA-IB') ? 1 : 1}
          strokeWidth="0.5"
          d="M389.32 215.14L389.32 206.58"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('IB-IC') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('IB-IC') ? 1 : 1}
          strokeWidth="0.5"
          d="M389.32 206.58L389.32 196.85"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('IC-ID') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('IC-ID') ? 1 : 1}
          strokeWidth="0.5"
          d="M389.32 196.85L389.32 188.97"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('ID-IE') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('ID-IE') ? 1 : 1}
          strokeWidth="0.5"
          d="M389.32 188.97L389.32 161.88"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('IU-IV') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('IU-IV') ? 1 : 1}
          strokeWidth="0.5"
          d="M398.41 124.66L422.04 124.66"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('IT-IU') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('IT-IU') ? 1 : 1}
          strokeWidth="0.5"
          d="M422.04 124.66L445.36 124.66"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('IS-IT') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('IS-IT') ? 1 : 1}
          strokeWidth="0.5"
          d="M445.36 124.66L468.52 124.66"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('IR-IS') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('IR-IS') ? 1 : 1}
          strokeWidth="0.5"
          d="M468.52 124.66L474.91 124.66"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('IQ-IR') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('IQ-IR') ? 1 : 1}
          strokeWidth="0.5"
          d="M474.91 124.66L495.94 124.66"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('IP-IQ') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('IP-IQ') ? 1 : 1}
          strokeWidth="0.5"
          d="M495.94 124.66L530.3 124.66"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('IO-IP') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('IO-IP') ? 1 : 1}
          strokeWidth="0.5"
          d="M530.3 124.66L562.23 124.66"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('IF-IG') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('IF-IG') ? 1 : 1}
          strokeWidth="0.5"
          d="M398.41 161.88L405.51 161.88"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('IG-IH') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('IG-IH') ? 1 : 1}
          strokeWidth="0.5"
          d="M405.51 161.88L419.18 161.88"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('IH-II') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('IH-II') ? 1 : 1}
          strokeWidth="0.5"
          d="M419.18 161.88L442.07 161.88"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('II-IJ') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('II-IJ') ? 1 : 1}
          strokeWidth="0.5"
          d="M442.07 161.88L464.51 161.88"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('IJ-IK') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('IJ-IK') ? 1 : 1}
          strokeWidth="0.5"
          d="M464.51 161.88L481.99 161.88"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('IK-IL') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('IK-IL') ? 1 : 1}
          strokeWidth="0.5"
          d="M481.99 161.88L513.18 161.88"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('IL-IM') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('IL-IM') ? 1 : 1}
          strokeWidth="0.5"
          d="M513.18 161.88L536.89 161.88"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('IM-IN') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('IM-IN') ? 1 : 1}
          strokeWidth="0.5"
          d="M536.89 161.88L562.23 161.88"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('FD-FE') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('FD-FE') ? 1 : 1}
          strokeWidth="0.5"
          d="M265.69 432.97L265.69 440.62"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('FC-FD') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('FC-FD') ? 1 : 1}
          strokeWidth="0.5"
          d="M265.69 440.62L265.69 449.68"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('FB-FC') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('FB-FC') ? 1 : 1}
          strokeWidth="0.5"
          d="M265.69 449.68L265.64 457.78"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('FA-FB') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('FA-FB') ? 1 : 1}
          strokeWidth="0.5"
          d="M265.64 457.78L265.64 467.26"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('EZ-FA') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('EZ-FA') ? 1 : 1}
          strokeWidth="0.5"
          d="M265.64 467.26L265.64 477.07"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('EY-EZ') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('EY-EZ') ? 1 : 1}
          strokeWidth="0.5"
          d="M265.64 477.07L265.64 486.9"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('DR-DS') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('DR-DS') ? 1 : 1}
          strokeWidth="0.5"
          d="M236.56 432.97L236.56 437.7"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('DQ-DR') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('DQ-DR') ? 1 : 1}
          strokeWidth="0.5"
          d="M236.56 437.7L236.56 444.61"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('DP-DQ') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('DP-DQ') ? 1 : 1}
          strokeWidth="0.5"
          d="M236.56 444.61L236.56 453.21"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('DO-DP') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('DO-DP') ? 1 : 1}
          strokeWidth="0.5"
          d="M236.56 453.21L236.56 461.17"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('DN-DO') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('DN-DO') ? 1 : 1}
          strokeWidth="0.5"
          d="M236.56 461.17L236.56 471.67"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('DM-DN') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('DM-DN') ? 1 : 1}
          strokeWidth="0.5"
          d="M236.56 471.67L236.56 481.13"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('DS-DT') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('DS-DT') ? 1 : 1}
          strokeWidth="0.5"
          d="M236.56 432.97L236.56 413.2"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('DT-DU') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('DT-TU') ? 1 : 1}
          strokeWidth="0.5"
          d="M236.56 413.2L236.56 407.37"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('FE-FF') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('FE-FF') ? 1 : 1}
          strokeWidth="0.5"
          d="M265.69 432.97L265.69 419.6"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('FF-FG') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('FF-FG') ? 1 : 1}
          strokeWidth="0.5"
          d="M265.69 419.6L265.69 407.37"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('FG-FH') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('FG-FH') ? 1 : 1}
          strokeWidth="0.5"
          d="M265.69 407.37L265.69 392.13"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('FH-FI') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('FH-FI') ? 1 : 1}
          strokeWidth="0.5"
          d="M265.69 392.13L265.69 379.95"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('FI-FJ') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('FI-FJ') ? 1 : 1}
          strokeWidth="0.5"
          d="M265.69 379.95L265.69 371.03"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('FJ-FK') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('FJ-FK') ? 1 : 1}
          strokeWidth="0.5"
          d="M265.69 371.03L265.69 361.59"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('FK-FL') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('FK-FL') ? 1 : 1}
          strokeWidth="0.5"
          d="M265.69 361.59L265.69 354.44"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('DU-DV') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('DU-DV') ? 1 : 1}
          strokeWidth="0.5"
          d="M236.56 407.37L236.56 393.17"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('DV-DW') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('DV-DW') ? 1 : 1}
          strokeWidth="0.5"
          d="M236.56 393.17L236.56 382.86"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('DW-DX') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('DW-DX') ? 1 : 1}
          strokeWidth="0.5"
          d="M236.56 382.86L236.56 373"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('DX-DY') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('DX-DY') ? 1 : 1}
          strokeWidth="0.5"
          d="M236.56 373L236.56 363.79"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('DY-DZ') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('DY-DZ') ? 1 : 1}
          strokeWidth="0.5"
          d="M236.56 363.79L236.56 354.4"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('DZ-EA') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('DZ-EA') ? 1 : 1}
          strokeWidth="0.5"
          d="M236.56 354.4L236.56 344.77"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('EA-EB') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('EA-EB') ? 1 : 1}
          strokeWidth="0.5"
          d="M236.56 344.77L236.56 336.02"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('EB-EC') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('EB-EC') ? 1 : 1}
          strokeWidth="0.5"
          d="M236.56 336.02L236.56 325.4"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('EC-ED') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('EC-ED') ? 1 : 1}
          strokeWidth="0.5"
          d="M236.56 325.4L236.56 315.27"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('ED-EE') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('ED-EE') ? 1 : 1}
          strokeWidth="0.5"
          d="M236.56 315.27L236.56 305.16"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('EE-EF') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('EE-EF') ? 1 : 1}
          strokeWidth="0.5"
          d="M236.56 305.16L236.56 294.74"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('EF-EH') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('EF-EH') ? 1 : 1}
          strokeWidth="0.5"
          d="M236.56 294.74L236.56 285.24"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('EH-EI') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('EH-EI') ? 1 : 1}
          strokeWidth="0.5"
          d="M236.56 285.24L236.56 276.28"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('EK-EL') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('EK-EL') ? 1 : 1}
          strokeWidth="0.5"
          d="M236.56 255.7L236.56 245.47"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('EL-EM') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('EL-EM') ? 1 : 1}
          strokeWidth="0.5"
          d="M236.56 245.47L236.56 235.95"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('EM-EN') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('EM-EN') ? 1 : 1}
          strokeWidth="0.5"
          d="M236.56 235.95L236.56 231.15"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('EI-EJ') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('EI-EJ') ? 1 : 1}
          strokeWidth="0.5"
          d="M236.56 276.28L236.56 266.16"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('EJ-EK') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('EJ-EK') ? 1 : 1}
          strokeWidth="0.5"
          d="M236.56 266.16L236.56 255.7"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('FL-FM') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('FL-FM') ? 1 : 1}
          strokeWidth="0.5"
          d="M265.69 354.44L265.69 342.31"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('FM-FN') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('FM-FN') ? 1 : 1}
          strokeWidth="0.5"
          d="M265.69 342.31L265.69 332.09"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('FN-FO') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('FN-FO') ? 1 : 1}
          strokeWidth="0.5"
          d="M265.69 332.09L265.69 322.44"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('FO-FP') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('FO-FP') ? 1 : 1}
          strokeWidth="0.5"
          d="M265.69 322.44L265.69 312.09"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('FP-FQ') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('FP-FQ') ? 1 : 1}
          strokeWidth="0.5"
          d="M265.69 312.09L265.69 301.9"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('FQ-FR') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('FQ-FR') ? 1 : 1}
          strokeWidth="0.5"
          d="M265.69 301.9L265.69 292.7"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('FR-FS') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('FR-FS') ? 1 : 1}
          strokeWidth="0.5"
          d="M265.69 292.7L265.69 282.81"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('FS-FT') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('FS-FT') ? 1 : 1}
          strokeWidth="0.5"
          d="M265.69 282.81L265.69 273.01"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('FT-FU') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('FT-FU') ? 1 : 1}
          strokeWidth="0.5"
          d="M265.69 273.01L265.69 262.65"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('FU-FV') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('FU-FV') ? 1 : 1}
          strokeWidth="0.5"
          d="M265.69 262.65L265.69 253.18"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('FV-FW') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('FV-FW') ? 1 : 1}
          strokeWidth="0.5"
          d="M265.69 253.18L265.69 243.66"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('FW-FX') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('FW-FX') ? 1 : 1}
          strokeWidth="0.5"
          d="M265.69 243.66L265.69 231.15"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('EN-EO') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('EN-EO') ? 1 : 1}
          strokeWidth="0.5"
          d="M236.56 231.15L236.56 223.42"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('EO-EP') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('EO-EP') ? 1 : 1}
          strokeWidth="0.5"
          d="M236.56 223.42L236.56 211.57"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('EW-FY') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('EW-FY') ? 1 : 1}
          strokeWidth="0.5"
          d="M250.93 211.57L265.69 211.57"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('EW-Esc2') ? "RED" : "#000"}
          strokeOpacity={props.color.includes('EW-Esc2') ? 1 : 1}
          strokeWidth="0.5"
          d="M250.93 211.57L250.93 219.76"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('EP-EQ') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('EP-EQ') ? 1 : 1}
          strokeWidth="0.5"
          d="M236.56 211.57L236.56 206.99"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('ER-ES') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('ER-ES') ? 1 : 1}
          strokeWidth="0.5"
          d="M236.56 196.47L236.56 186.79"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('ES-ET') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('ES-ET') ? 1 : 1}
          strokeWidth="0.5"
          d="M236.56 186.79L236.56 176.81"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('ET-EU') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('ET-EU') ? 1 : 1}
          strokeWidth="0.5"
          d="M236.56 176.81L236.56 169.23"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('EU-EV') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('EU-EV') ? 1 : 1}
          strokeWidth="0.5"
          d="M236.56 169.23L236.56 156.75"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('FY-FZ') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('FY-FZ') ? 1 : 1}
          strokeWidth="0.5"
          d="M265.69 211.57L265.69 201.29"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('FZ-GA') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('FZ-GA') ? 1 : 1}
          strokeWidth="0.5"
          d="M265.69 201.29L265.69 192.8"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('GA-GB') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('GA-GB') ? 1 : 1}
          strokeWidth="0.5"
          d="M265.69 192.8L265.69 183.16"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('GB-GC') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('GB-GC') ? 1 : 1}
          strokeWidth="0.5"
          d="M265.69 183.16L265.69 172.05"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('GC-GD') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('GC-GD') ? 1 : 1}
          strokeWidth="0.5"
          d="M265.69 172.05L265.69 151.53"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('EQ-ER') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('EQ-ER') ? 1 : 1}
          strokeWidth="0.5"
          d="M236.56 206.99L236.56 196.47"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('HA-HB') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('HA-HB') ? 1 : 1}
          strokeWidth="0.5"
          d="M389.32 390.86L389.32 417.34"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('GV-Esc9') ? "RED" : "#000"}
          strokeOpacity={props.color.includes('GV-Esc9') ? 1 : 1}
          strokeWidth="0.5"
          d="M529.18 402.24L529.18 411.28"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('IF-Esc3') ? "RED" : "#000"}
          strokeOpacity={props.color.includes('IF-Esc3') ? 1 : 1}
          strokeWidth="0.5"
          d="M398.41 161.88L398.41 173.37"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('GE-Esc11') ? "RED" : "#000"}
          strokeOpacity={props.color.includes('GE-Esc11') ? 1 : 1}
          strokeWidth="0.5"
          d="M317.06 354.58L317.06 366.6"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('GT-GU') ? "#0f0" : "#000"}
          strokeOpacity={props.color.includes('GT-GU') ? 1 : 1}
          strokeWidth="0.5"
          d="M558.78 470.5L563.51 470.5"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('GU-Esc10') ? "RED" : "#000"}
          strokeOpacity={props.color.includes('GU-Esc10') ? 1 : 1}
          strokeWidth="0.5"
          d="M563.51 470.5L563.51 458.85"
        ></path>
    </Svg>
    </div>
  )
};

export default Caminhos;
