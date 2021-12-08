// Libs
import React from 'react';
// Styles
import { Svg } from './styles';

// render svg of paths, according to the vector returned by dijkstra algorithm
// viewbox was modified to fit path with map image
const Caminhos = (props) => {

    const color_path = '#4A89F3';
    const color_stair = '#DD4B3E'
    const color_test = '#0f0'
    const stroke = '1.5';

    const visible = 0;

    const mw = 0.6;
    const mh = 1;
    const w=800;
    const h=600;

    const x=w*(1-mw)/2-68.5;
    const y=h*(1-mh)/2+86.5;
    const w1=w*mw;
    const h1=h*mh;

  return (
    <div>
      <Svg
        viewBox={x.toString() + " " + y.toString() + " " + w1.toString() + " " + h1.toString()}
      >
        <path
          fill="none"
          stroke={props.color.includes('EX-Esc1') ? color_stair : color_test}
          strokeOpacity={props.color.includes('EX-Esc1') ? 1 : visible}
          strokeWidth={stroke}
          d="M250.92 417.68L250.92 407.37"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('DU-EX') ? color_path : color_test}
          strokeOpacity={props.color.includes('DU-EX') ? 1 : visible}
          strokeWidth={stroke}
          d="M250.92 407.37L236.56 407.37"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('EX-FG') ? color_path : color_test}
          strokeOpacity={props.color.includes('EX-FG') ? 1 : visible}
          strokeWidth={stroke}
          d="M250.92 407.37L265.69 407.37"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('DS-FE') ? color_path : color_test}
          strokeOpacity={props.color.includes('DS-FE') ? 1 : visible}
          strokeWidth={stroke}
          d="M236.56 432.97L265.69 432.97"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('DZ-FL') ? color_path : color_test}
          strokeOpacity={props.color.includes('DZ-FL') ? 1 : visible}
          strokeWidth={stroke}
          d="M265.69 354.44L236.56 354.4"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('EN-FX') ? color_path : color_test}
          strokeOpacity={props.color.includes('EN-FX') ? 1 : visible}
          strokeWidth={stroke}
          d="M236.56 231.15L265.69 231.15"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('EP-EW') ? color_path : color_test}
          strokeOpacity={props.color.includes('EP-EW') ? 1 : visible}
          strokeWidth={stroke}
          d="M236.56 211.57L250.93 211.57"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('FX-FY') ? color_path : color_test}
          strokeOpacity={props.color.includes('FX-FY') ? 1 : visible}
          strokeWidth={stroke}
          d="M265.69 231.15L265.69 211.57"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('FL-GE') ? color_path : color_test}
          strokeOpacity={props.color.includes('FL-GE') ? 1 : visible}
          strokeWidth={stroke}
          d="M265.69 354.44L317.06 354.58"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('GE-HC') ? color_path : color_test}
          strokeOpacity={props.color.includes('GE-HC') ? 1 : visible}
          strokeWidth={stroke}
          d="M317.06 354.58L389.32 354.79"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('HB-HC') ? color_path : color_test}
          strokeOpacity={props.color.includes('HB-HC') ? 1 : visible}
          strokeWidth={stroke}
          d="M389.32 354.79L389.32 390.86"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('HB-Esc8') ? color_stair : color_test}
          strokeOpacity={props.color.includes('HB-Esc8') ? 1 : visible}
          strokeWidth={stroke}
          d="M389.32 390.86L397.44 390.86"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('GZ-HA') ? color_path : color_test}
          strokeOpacity={props.color.includes('GZ-HA') ? 1 : visible}
          strokeWidth={stroke}
          d="M389.32 417.34L398.33 417.34"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('GF-GG') ? color_path : color_test}
          strokeOpacity={props.color.includes('GF-GG') ? 1 : visible}
          strokeWidth={stroke}
          d="M398.33 450.87L387.3 450.87"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('GS-GT') ? color_path : color_test}
          strokeOpacity={props.color.includes('GS-GT') ? 1 : visible}
          strokeWidth={stroke}
          d="M558.78 450.56L558.78 470.5"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('GW-GX') ? color_path : color_test}
          strokeOpacity={props.color.includes('GW-GX') ? 1 : visible}
          strokeWidth={stroke}
          d="M463.8 387.35L529.18 387.49"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('GV-GW') ? color_path : color_test}
          strokeOpacity={props.color.includes('GV-GW') ? 1 : visible}
          strokeWidth={stroke}
          d="M529.18 387.49L529.18 402.24"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('HR-HS') ? color_path : color_test}
          strokeOpacity={props.color.includes('HR-HS') ? 1 : visible}
          strokeWidth={stroke}
          d="M389.32 305.3L407.87 305.3"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('HS-Esc6') ? color_stair : color_test}
          strokeOpacity={props.color.includes('HS-Esc6') ? 1 : visible}
          strokeWidth={stroke}
          d="M407.87 305.3L407.87 292.84"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('HS-HT') ? color_path : color_test}
          strokeOpacity={props.color.includes('HS-HT') ? 1 : visible}
          strokeWidth={stroke}
          d="M407.87 305.3L477.9 305.3"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('IE-IF') ? color_path : color_test}
          strokeOpacity={props.color.includes('IE-IF') ? 1 : visible}
          strokeWidth={stroke}
          d="M389.32 161.88L398.41 161.88"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('IF-IV') ? color_path : color_test}
          strokeOpacity={props.color.includes('IF-IV') ? 1 : visible}
          strokeWidth={stroke}
          d="M398.41 161.88L398.41 124.66"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('IN-Esc5') ? color_stair : color_test}
          strokeOpacity={props.color.includes('IN-Esc5') ? 1 : visible}
          strokeWidth={stroke}
          d="M562.23 161.88L562.23 174.71"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('IN-IO') ? color_path : color_test}
          strokeOpacity={props.color.includes('IN-IO') ? 1 : visible}
          strokeWidth={stroke}
          d="M562.23 161.88L562.23 124.66"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('IR-Esc4') ? color_stair : color_test}
          strokeOpacity={props.color.includes('IR-Esc4') ? 1 : visible}
          strokeWidth={stroke}
          d="M474.91 124.66L474.91 113.36"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('GG-GH') ? color_path : color_test}
          strokeOpacity={props.color.includes('GG-GH') ? 1 : visible}
          strokeWidth={stroke}
          d="M398.33 450.87L404.25 450.87"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('GH-GI') ? color_path : color_test}
          strokeOpacity={props.color.includes('GH-GI') ? 1 : visible}
          strokeWidth={stroke}
          d="M404.25 450.87L412.37 450.87"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('GI-GJ') ? color_path : color_test}
          strokeOpacity={props.color.includes('GI-GJ') ? 1 : visible}
          strokeWidth={stroke}
          d="M412.37 450.87L420.39 450.87"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('GJ-GK') ? color_path : color_test}
          strokeOpacity={props.color.includes('GJ-GK') ? 1 : visible}
          strokeWidth={stroke}
          d="M420.39 450.87L428.54 450.81"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('GK-GL') ? color_path : color_test}
          strokeOpacity={props.color.includes('GK-GL') ? 1 : visible}
          strokeWidth={stroke}
          d="M428.54 450.81L438.21 450.75"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('GL-GM') ? color_path : color_test}
          strokeOpacity={props.color.includes('GL-GM') ? 1 : visible}
          strokeWidth={stroke}
          d="M438.21 450.75L447.03 450.69"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('GM-GN') ? color_path : color_test}
          strokeOpacity={props.color.includes('GM-GN') ? 1 : visible}
          strokeWidth={stroke}
          d="M447.03 450.69L456.24 450.63"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('GN-GO') ? color_path : color_test}
          strokeOpacity={props.color.includes('GN-GO') ? 1 : visible}
          strokeWidth={stroke}
          d="M456.24 450.63L465.37 450.56"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('GO-GP') ? color_path : color_test}
          strokeOpacity={props.color.includes('GO-GP') ? 1 : visible}
          strokeWidth={stroke}
          d="M465.37 450.56L491.02 450.56"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('GP-GQ') ? color_path : color_test}
          strokeOpacity={props.color.includes('GP-GQ') ? 1 : visible}
          strokeWidth={stroke}
          d="M491.02 450.56L512.39 450.56"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('GQ-GR') ? color_path : color_test}
          strokeOpacity={props.color.includes('GQ-GR') ? 1 : visible}
          strokeWidth={stroke}
          d="M512.39 450.56L536.83 450.56"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('GR-GS') ? color_path : color_test}
          strokeOpacity={props.color.includes('GR-GS') ? 1 : visible}
          strokeWidth={stroke}
          d="M536.83 450.56L558.78 450.56"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('GY-GZ') ? color_path : color_test}
          strokeOpacity={props.color.includes('GY-GZ') ? 1 : visible}
          strokeWidth={stroke}
          d="M398.33 417.34L398.33 428.83"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('GG-GY') ? color_path : color_test}
          strokeOpacity={props.color.includes('GG-GY') ? 1 : visible}
          strokeWidth={stroke}
          d="M398.33 428.83L398.33 450.87"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('HC-HD') ? color_path : color_test}
          strokeOpacity={props.color.includes('HC-HD') ? 1 : visible}
          strokeWidth={stroke}
          d="M389.32 354.79L397.19 354.79"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('HD-HE') ? color_path : color_test}
          strokeOpacity={props.color.includes('HD-HE') ? 1 : visible}
          strokeWidth={stroke}
          d="M397.19 354.79L415.76 354.79"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('qlq coisa') ? color_path : color_test}
          strokeOpacity={props.color.includes('HE-HF') ? 1 : visible}
          strokeWidth={stroke}
          d="M415.76 354.79L428.75 354.79"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('HF-HG') ? color_path : color_test}
          strokeOpacity={props.color.includes('HF-HG') ? 1 : visible}
          strokeWidth={stroke}
          d="M428.75 354.79L445.25 354.79"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('HG-HH') ? color_path : color_test}
          strokeOpacity={props.color.includes('HG-HH') ? 1 : visible}
          strokeWidth={stroke}
          d="M445.25 354.79L462.57 354.79"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('HH-HI') ? color_path : color_test}
          strokeOpacity={props.color.includes('HH-HI') ? 1 : visible}
          strokeWidth={stroke}
          d="M462.57 354.79L475.99 354.79"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('HI-HJ') ? color_path : color_test}
          strokeOpacity={props.color.includes('HI-HJ') ? 1 : visible}
          strokeWidth={stroke}
          d="M475.99 354.79L485.16 354.79"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('HJ-HK') ? color_path : color_test}
          strokeOpacity={props.color.includes('HJ-HK') ? 1 : visible}
          strokeWidth={stroke}
          d="M485.16 354.79L498.98 354.79"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('HM-HN') ? color_path : color_test}
          strokeOpacity={props.color.includes('HM-HN') ? 1 : visible}
          strokeWidth={stroke}
          d="M522.96 354.79L537.92 354.79"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('HN-HO') ? color_path : color_test}
          strokeOpacity={props.color.includes('HN-HO') ? 1 : visible}
          strokeWidth={stroke}
          d="M537.92 354.79L549.85 354.79"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('HO-HP') ? color_path : color_test}
          strokeOpacity={props.color.includes('HO-HP') ? 1 : visible}
          strokeWidth={stroke}
          d="M549.85 354.79L560.04 354.79"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('HP-Esc7') ? color_stair : color_test}
          strokeOpacity={props.color.includes('HP-Esc7') ? 1 : visible}
          strokeWidth={stroke}
          d="M560.04 354.79L560.04 346.55"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('HK-HL') ? color_path : color_test}
          strokeOpacity={props.color.includes('HK-HL') ? 1 : visible}
          strokeWidth={stroke}
          d="M498.98 354.79L513.64 354.79"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('HL-HM') ? color_path : color_test}
          strokeOpacity={props.color.includes('HL-HM') ? 1 : visible}
          strokeWidth={stroke}
          d="M513.64 354.79L522.96 354.79"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('HC-HQ') ? color_path : color_test}
          strokeOpacity={props.color.includes('HC-HQ') ? 1 : visible}
          strokeWidth={stroke}
          d="M389.32 354.79L389.32 326.57"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('HQ-HR') ? color_path : color_test}
          strokeOpacity={props.color.includes('HQ-HR') ? 1 : visible}
          strokeWidth={stroke}
          d="M389.32 326.57L389.32 305.3"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('HR-HU') ? color_path : color_test}
          strokeOpacity={props.color.includes('HR-HU') ? 1 : visible}
          strokeWidth={stroke}
          d="M389.32 305.3L389.32 281.94"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('HU-HV') ? color_path : color_test}
          strokeOpacity={props.color.includes('HU-HV') ? 1 : visible}
          strokeWidth={stroke}
          d="M389.32 281.94L389.32 270.78"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('HV-HW') ? color_path : color_test}
          strokeOpacity={props.color.includes('HV-HW') ? 1 : visible}
          strokeWidth={stroke}
          d="M389.32 270.78L389.32 259.59"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('HW-HX') ? color_path : color_test}
          strokeOpacity={props.color.includes('HW-HX') ? 1 : visible}
          strokeWidth={stroke}
          d="M389.32 259.59L389.32 250.93"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('HX-HY') ? color_path : color_test}
          strokeOpacity={props.color.includes('HX-HY') ? 1 : visible}
          strokeWidth={stroke}
          d="M389.32 250.93L389.32 239.59"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('HY-HZ') ? color_path : color_test}
          strokeOpacity={props.color.includes('HY-HZ') ? 1 : visible}
          strokeWidth={stroke}
          d="M389.32 239.59L389.32 223.54"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('HZ-IA') ? color_path : color_test}
          strokeOpacity={props.color.includes('HZ-IA') ? 1 : visible}
          strokeWidth={stroke}
          d="M389.32 223.54L389.32 215.14"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('IA-IB') ? color_path : color_test}
          strokeOpacity={props.color.includes('IA-IB') ? 1 : visible}
          strokeWidth={stroke}
          d="M389.32 215.14L389.32 206.58"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('IB-IC') ? color_path : color_test}
          strokeOpacity={props.color.includes('IB-IC') ? 1 : visible}
          strokeWidth={stroke}
          d="M389.32 206.58L389.32 196.85"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('IC-ID') ? color_path : color_test}
          strokeOpacity={props.color.includes('IC-ID') ? 1 : visible}
          strokeWidth={stroke}
          d="M389.32 196.85L389.32 188.97"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('ID-IE') ? color_path : color_test}
          strokeOpacity={props.color.includes('ID-IE') ? 1 : visible}
          strokeWidth={stroke}
          d="M389.32 188.97L389.32 161.88"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('IU-IV') ? color_path : color_test}
          strokeOpacity={props.color.includes('IU-IV') ? 1 : visible}
          strokeWidth={stroke}
          d="M398.41 124.66L422.04 124.66"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('IT-IU') ? color_path : color_test}
          strokeOpacity={props.color.includes('IT-IU') ? 1 : visible}
          strokeWidth={stroke}
          d="M422.04 124.66L445.36 124.66"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('IS-IT') ? color_path : color_test}
          strokeOpacity={props.color.includes('IS-IT') ? 1 : visible}
          strokeWidth={stroke}
          d="M445.36 124.66L468.52 124.66"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('IR-IS') ? color_path : color_test}
          strokeOpacity={props.color.includes('IR-IS') ? 1 : visible}
          strokeWidth={stroke}
          d="M468.52 124.66L474.91 124.66"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('IQ-IR') ? color_path : color_test}
          strokeOpacity={props.color.includes('IQ-IR') ? 1 : visible}
          strokeWidth={stroke}
          d="M474.91 124.66L495.94 124.66"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('IP-IQ') ? color_path : color_test}
          strokeOpacity={props.color.includes('IP-IQ') ? 1 : visible}
          strokeWidth={stroke}
          d="M495.94 124.66L530.3 124.66"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('IO-IP') ? color_path : color_test}
          strokeOpacity={props.color.includes('IO-IP') ? 1 : visible}
          strokeWidth={stroke}
          d="M530.3 124.66L562.23 124.66"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('IF-IG') ? color_path : color_test}
          strokeOpacity={props.color.includes('IF-IG') ? 1 : visible}
          strokeWidth={stroke}
          d="M398.41 161.88L405.51 161.88"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('IG-IH') ? color_path : color_test}
          strokeOpacity={props.color.includes('IG-IH') ? 1 : visible}
          strokeWidth={stroke}
          d="M405.51 161.88L419.18 161.88"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('IH-II') ? color_path : color_test}
          strokeOpacity={props.color.includes('IH-II') ? 1 : visible}
          strokeWidth={stroke}
          d="M419.18 161.88L442.07 161.88"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('II-IJ') ? color_path : color_test}
          strokeOpacity={props.color.includes('II-IJ') ? 1 : visible}
          strokeWidth={stroke}
          d="M442.07 161.88L464.51 161.88"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('IJ-IK') ? color_path : color_test}
          strokeOpacity={props.color.includes('IJ-IK') ? 1 : visible}
          strokeWidth={stroke}
          d="M464.51 161.88L481.99 161.88"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('IK-IL') ? color_path : color_test}
          strokeOpacity={props.color.includes('IK-IL') ? 1 : visible}
          strokeWidth={stroke}
          d="M481.99 161.88L513.18 161.88"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('IL-IM') ? color_path : color_test}
          strokeOpacity={props.color.includes('IL-IM') ? 1 : visible}
          strokeWidth={stroke}
          d="M513.18 161.88L536.89 161.88"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('IM-IN') ? color_path : color_test}
          strokeOpacity={props.color.includes('IM-IN') ? 1 : visible}
          strokeWidth={stroke}
          d="M536.89 161.88L562.23 161.88"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('FD-FE') ? color_path : color_test}
          strokeOpacity={props.color.includes('FD-FE') ? 1 : visible}
          strokeWidth={stroke}
          d="M265.69 432.97L265.69 440.62"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('FC-FD') ? color_path : color_test}
          strokeOpacity={props.color.includes('FC-FD') ? 1 : visible}
          strokeWidth={stroke}
          d="M265.69 440.62L265.69 449.68"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('FB-FC') ? color_path : color_test}
          strokeOpacity={props.color.includes('FB-FC') ? 1 : visible}
          strokeWidth={stroke}
          d="M265.69 449.68L265.64 457.78"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('FA-FB') ? color_path : color_test}
          strokeOpacity={props.color.includes('FA-FB') ? 1 : visible}
          strokeWidth={stroke}
          d="M265.64 457.78L265.64 467.26"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('EZ-FA') ? color_path : color_test}
          strokeOpacity={props.color.includes('EZ-FA') ? 1 : visible}
          strokeWidth={stroke}
          d="M265.64 467.26L265.64 477.07"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('EY-EZ') ? color_path : color_test}
          strokeOpacity={props.color.includes('EY-EZ') ? 1 : visible}
          strokeWidth={stroke}
          d="M265.64 477.07L265.64 486.9"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('DR-DS') ? color_path : color_test}
          strokeOpacity={props.color.includes('DR-DS') ? 1 : visible}
          strokeWidth={stroke}
          d="M236.56 432.97L236.56 437.7"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('DQ-DR') ? color_path : color_test}
          strokeOpacity={props.color.includes('DQ-DR') ? 1 : visible}
          strokeWidth={stroke}
          d="M236.56 437.7L236.56 444.61"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('DP-DQ') ? color_path : color_test}
          strokeOpacity={props.color.includes('DP-DQ') ? 1 : visible}
          strokeWidth={stroke}
          d="M236.56 444.61L236.56 453.21"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('DO-DP') ? color_path : color_test}
          strokeOpacity={props.color.includes('DO-DP') ? 1 : visible}
          strokeWidth={stroke}
          d="M236.56 453.21L236.56 461.17"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('DN-DO') ? color_path : color_test}
          strokeOpacity={props.color.includes('DN-DO') ? 1 : visible}
          strokeWidth={stroke}
          d="M236.56 461.17L236.56 471.67"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('DM-DN') ? color_path : color_test}
          strokeOpacity={props.color.includes('DM-DN') ? 1 : visible}
          strokeWidth={stroke}
          d="M236.56 471.67L236.56 481.13"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('DS-DT') ? color_path : color_test}
          strokeOpacity={props.color.includes('DS-DT') ? 1 : visible}
          strokeWidth={stroke}
          d="M236.56 432.97L236.56 413.2"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('DT-DU') ? color_path : color_test}
          strokeOpacity={props.color.includes('DT-DU') ? 1 : visible}
          strokeWidth={stroke}
          d="M236.56 413.2L236.56 407.37"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('FE-FF') ? color_path : color_test}
          strokeOpacity={props.color.includes('FE-FF') ? 1 : visible}
          strokeWidth={stroke}
          d="M265.69 432.97L265.69 419.6"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('FF-FG') ? color_path : color_test}
          strokeOpacity={props.color.includes('FF-FG') ? 1 : visible}
          strokeWidth={stroke}
          d="M265.69 419.6L265.69 407.37"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('FG-FH') ? color_path : color_test}
          strokeOpacity={props.color.includes('FG-FH') ? 1 : visible}
          strokeWidth={stroke}
          d="M265.69 407.37L265.69 392.13"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('FH-FI') ? color_path : color_test}
          strokeOpacity={props.color.includes('FH-FI') ? 1 : visible}
          strokeWidth={stroke}
          d="M265.69 392.13L265.69 379.95"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('FI-FJ') ? color_path : color_test}
          strokeOpacity={props.color.includes('FI-FJ') ? 1 : visible}
          strokeWidth={stroke}
          d="M265.69 379.95L265.69 371.03"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('FJ-FK') ? color_path : color_test}
          strokeOpacity={props.color.includes('FJ-FK') ? 1 : visible}
          strokeWidth={stroke}
          d="M265.69 371.03L265.69 361.59"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('FK-FL') ? color_path : color_test}
          strokeOpacity={props.color.includes('FK-FL') ? 1 : visible}
          strokeWidth={stroke}
          d="M265.69 361.59L265.69 354.44"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('DU-DV') ? color_path : color_test}
          strokeOpacity={props.color.includes('DU-DV') ? 1 : visible}
          strokeWidth={stroke}
          d="M236.56 407.37L236.56 393.17"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('DV-DW') ? color_path : color_test}
          strokeOpacity={props.color.includes('DV-DW') ? 1 : visible}
          strokeWidth={stroke}
          d="M236.56 393.17L236.56 382.86"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('DW-DX') ? color_path : color_test}
          strokeOpacity={props.color.includes('DW-DX') ? 1 : visible}
          strokeWidth={stroke}
          d="M236.56 382.86L236.56 373"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('DX-DY') ? color_path : color_test}
          strokeOpacity={props.color.includes('DX-DY') ? 1 : visible}
          strokeWidth={stroke}
          d="M236.56 373L236.56 363.79"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('DY-DZ') ? color_path : color_test}
          strokeOpacity={props.color.includes('DY-DZ') ? 1 : visible}
          strokeWidth={stroke}
          d="M236.56 363.79L236.56 354.4"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('DZ-EA') ? color_path : color_test}
          strokeOpacity={props.color.includes('DZ-EA') ? 1 : visible}
          strokeWidth={stroke}
          d="M236.56 354.4L236.56 344.77"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('EA-EB') ? color_path : color_test}
          strokeOpacity={props.color.includes('EA-EB') ? 1 : visible}
          strokeWidth={stroke}
          d="M236.56 344.77L236.56 336.02"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('EB-EC') ? color_path : color_test}
          strokeOpacity={props.color.includes('EB-EC') ? 1 : visible}
          strokeWidth={stroke}
          d="M236.56 336.02L236.56 325.4"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('EC-ED') ? color_path : color_test}
          strokeOpacity={props.color.includes('EC-ED') ? 1 : visible}
          strokeWidth={stroke}
          d="M236.56 325.4L236.56 315.27"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('ED-EE') ? color_path : color_test}
          strokeOpacity={props.color.includes('ED-EE') ? 1 : visible}
          strokeWidth={stroke}
          d="M236.56 315.27L236.56 305.16"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('EE-EF') ? color_path : color_test}
          strokeOpacity={props.color.includes('EE-EF') ? 1 : visible}
          strokeWidth={stroke}
          d="M236.56 305.16L236.56 294.74"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('EF-EH') ? color_path : color_test}
          strokeOpacity={props.color.includes('EF-EH') ? 1 : visible}
          strokeWidth={stroke}
          d="M236.56 294.74L236.56 285.24"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('EH-EI') ? color_path : color_test}
          strokeOpacity={props.color.includes('EH-EI') ? 1 : visible}
          strokeWidth={stroke}
          d="M236.56 285.24L236.56 276.28"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('EK-EL') ? color_path : color_test}
          strokeOpacity={props.color.includes('EK-EL') ? 1 : visible}
          strokeWidth={stroke}
          d="M236.56 255.7L236.56 245.47"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('EL-EM') ? color_path : color_test}
          strokeOpacity={props.color.includes('EL-EM') ? 1 : visible}
          strokeWidth={stroke}
          d="M236.56 245.47L236.56 235.95"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('EM-EN') ? color_path : color_test}
          strokeOpacity={props.color.includes('EM-EN') ? 1 : visible}
          strokeWidth={stroke}
          d="M236.56 235.95L236.56 231.15"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('EI-EJ') ? color_path : color_test}
          strokeOpacity={props.color.includes('EI-EJ') ? 1 : visible}
          strokeWidth={stroke}
          d="M236.56 276.28L236.56 266.16"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('EJ-EK') ? color_path : color_test}
          strokeOpacity={props.color.includes('EJ-EK') ? 1 : visible}
          strokeWidth={stroke}
          d="M236.56 266.16L236.56 255.7"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('FL-FM') ? color_path : color_test}
          strokeOpacity={props.color.includes('FL-FM') ? 1 : visible}
          strokeWidth={stroke}
          d="M265.69 354.44L265.69 342.31"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('FM-FN') ? color_path : color_test}
          strokeOpacity={props.color.includes('FM-FN') ? 1 : visible}
          strokeWidth={stroke}
          d="M265.69 342.31L265.69 332.09"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('FN-FO') ? color_path : color_test}
          strokeOpacity={props.color.includes('FN-FO') ? 1 : visible}
          strokeWidth={stroke}
          d="M265.69 332.09L265.69 322.44"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('FO-FP') ? color_path : color_test}
          strokeOpacity={props.color.includes('FO-FP') ? 1 : visible}
          strokeWidth={stroke}
          d="M265.69 322.44L265.69 312.09"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('FP-FQ') ? color_path : color_test}
          strokeOpacity={props.color.includes('FP-FQ') ? 1 : visible}
          strokeWidth={stroke}
          d="M265.69 312.09L265.69 301.9"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('FQ-FR') ? color_path : color_test}
          strokeOpacity={props.color.includes('FQ-FR') ? 1 : visible}
          strokeWidth={stroke}
          d="M265.69 301.9L265.69 292.7"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('FR-FS') ? color_path : color_test}
          strokeOpacity={props.color.includes('FR-FS') ? 1 : visible}
          strokeWidth={stroke}
          d="M265.69 292.7L265.69 282.81"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('FS-FT') ? color_path : color_test}
          strokeOpacity={props.color.includes('FS-FT') ? 1 : visible}
          strokeWidth={stroke}
          d="M265.69 282.81L265.69 273.01"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('FT-FU') ? color_path : color_test}
          strokeOpacity={props.color.includes('FT-FU') ? 1 : visible}
          strokeWidth={stroke}
          d="M265.69 273.01L265.69 262.65"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('FU-FV') ? color_path : color_test}
          strokeOpacity={props.color.includes('FU-FV') ? 1 : visible}
          strokeWidth={stroke}
          d="M265.69 262.65L265.69 253.18"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('FV-FW') ? color_path : color_test}
          strokeOpacity={props.color.includes('FV-FW') ? 1 : visible}
          strokeWidth={stroke}
          d="M265.69 253.18L265.69 243.66"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('FW-FX') ? color_path : color_test}
          strokeOpacity={props.color.includes('FW-FX') ? 1 : visible}
          strokeWidth={stroke}
          d="M265.69 243.66L265.69 231.15"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('EN-EO') ? color_path : color_test}
          strokeOpacity={props.color.includes('EN-EO') ? 1 : visible}
          strokeWidth={stroke}
          d="M236.56 231.15L236.56 223.42"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('EO-EP') ? color_path : color_test}
          strokeOpacity={props.color.includes('EO-EP') ? 1 : visible}
          strokeWidth={stroke}
          d="M236.56 223.42L236.56 211.57"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('EW-FY') ? color_path : color_test}
          strokeOpacity={props.color.includes('EW-FY') ? 1 : visible}
          strokeWidth={stroke}
          d="M250.93 211.57L265.69 211.57"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('EW-Esc2') ? color_stair : color_test}
          strokeOpacity={props.color.includes('EW-Esc2') ? 1 : visible}
          strokeWidth={stroke}
          d="M250.93 211.57L250.93 219.76"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('EP-EQ') ? color_path : color_test}
          strokeOpacity={props.color.includes('EP-EQ') ? 1 : visible}
          strokeWidth={stroke}
          d="M236.56 211.57L236.56 206.99"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('ER-ES') ? color_path : color_test}
          strokeOpacity={props.color.includes('ER-ES') ? 1 : visible}
          strokeWidth={stroke}
          d="M236.56 196.47L236.56 186.79"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('ES-ET') ? color_path : color_test}
          strokeOpacity={props.color.includes('ES-ET') ? 1 : visible}
          strokeWidth={stroke}
          d="M236.56 186.79L236.56 176.81"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('ET-EU') ? color_path : color_test}
          strokeOpacity={props.color.includes('ET-EU') ? 1 : visible}
          strokeWidth={stroke}
          d="M236.56 176.81L236.56 169.23"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('EU-EV') ? color_path : color_test}
          strokeOpacity={props.color.includes('EU-EV') ? 1 : visible}
          strokeWidth={stroke}
          d="M236.56 169.23L236.56 156.75"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('FY-FZ') ? color_path : color_test}
          strokeOpacity={props.color.includes('FY-FZ') ? 1 : visible}
          strokeWidth={stroke}
          d="M265.69 211.57L265.69 201.29"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('FZ-GA') ? color_path : color_test}
          strokeOpacity={props.color.includes('FZ-GA') ? 1 : visible}
          strokeWidth={stroke}
          d="M265.69 201.29L265.69 192.8"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('GA-GB') ? color_path : color_test}
          strokeOpacity={props.color.includes('GA-GB') ? 1 : visible}
          strokeWidth={stroke}
          d="M265.69 192.8L265.69 183.16"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('GB-GC') ? color_path : color_test}
          strokeOpacity={props.color.includes('GB-GC') ? 1 : visible}
          strokeWidth={stroke}
          d="M265.69 183.16L265.69 172.05"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('GC-GD') ? color_path : color_test}
          strokeOpacity={props.color.includes('GC-GD') ? 1 : visible}
          strokeWidth={stroke}
          d="M265.69 172.05L265.69 151.53"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('EQ-ER') ? color_path : color_test}
          strokeOpacity={props.color.includes('EQ-ER') ? 1 : visible}
          strokeWidth={stroke}
          d="M236.56 206.99L236.56 196.47"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('HA-HB') ? color_path : color_test}
          strokeOpacity={props.color.includes('HA-HB') ? 1 : visible}
          strokeWidth={stroke}
          d="M389.32 390.86L389.32 417.34"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('GV-Esc9') ? color_stair : color_test}
          strokeOpacity={props.color.includes('GV-Esc9') ? 1 : visible}
          strokeWidth={stroke}
          d="M529.18 402.24L529.18 411.28"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('IF-Esc3') ? color_stair : color_test}
          strokeOpacity={props.color.includes('IF-Esc3') ? 1 : visible}
          strokeWidth={stroke}
          d="M398.41 161.88L398.41 173.37"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('GE-Esc11') ? color_stair : color_test}
          strokeOpacity={props.color.includes('GE-Esc11') ? 1 : visible}
          strokeWidth={stroke}
          d="M317.06 354.58L317.06 366.6"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('GT-GU') ? color_path : color_test}
          strokeOpacity={props.color.includes('GT-GU') ? 1 : visible}
          strokeWidth={stroke}
          d="M558.78 470.5L563.51 470.5"
        ></path>
        <path
          fill="none"
          stroke={props.color.includes('GU-Esc10') ? color_stair : color_test}
          strokeOpacity={props.color.includes('GU-Esc10') ? 1 : visible}
          strokeWidth={stroke}
          d="M563.51 470.5L563.51 458.85"
        ></path>
    </Svg>
    </div>
  )
};

export default Caminhos;
