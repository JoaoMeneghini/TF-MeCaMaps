import React from 'react';
import { Svg_pin } from './styles';

const Pin = (props) => {

    let x_pin;
    let y_pin;
    let x_pin_corresp;
    let y_pin_corresp;

    if (!props.floor) {
        x_pin = props.coordPin[0];
        y_pin = props.coordPin[1];
        x_pin_corresp = 56.75*((x_pin-6.9184)/2.3842)-510.25;
        y_pin_corresp = 47.8*((y_pin-30.0497)/2.0063)-258.55;
    } else {
        x_pin = props.coordPin[0];
        y_pin = props.coordPin[1];
        x_pin_corresp = 33.25*((x_pin-3.6645)/1.3726)-580.3;
        y_pin_corresp = 22.73*((y_pin-20.3457)/0.9399)-535.5;
    }

    return (
        <Svg_pin
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            viewBox={y_pin_corresp.toString() + " " + x_pin_corresp.toString() + " 800 600"}
        >
            <g transform="translate(-814.596 -274.386)">
            <g
                fillOpacity="1"
                transform="matrix(1.18559 0 0 1.18559 -151.177 -57.398)"
            >
                <path
                fill="#ff4646"
                stroke="#d73534"
                strokeDasharray="none"
                strokeMiterlimit="4"
                strokeOpacity="1"
                strokeWidth="1"
                d="M817.112 282.971c-1.258 1.343-2.046 3.299-2.015 5.139.064 3.845 1.797 5.3 4.568 10.592.999 2.328 2.04 4.792 3.031 8.873.138.602.272 1.16.335 1.21.062.048.196-.513.334-1.115.99-4.081 2.033-6.543 3.031-8.871 2.771-5.292 4.504-6.748 4.568-10.592.031-1.84-.759-3.798-2.017-5.14-1.437-1.535-3.605-2.67-5.916-2.717-2.312-.048-4.481 1.087-5.919 2.621z"
                display="inline"
                opacity="1"
                ></path>
                <circle
                cx="823.031"
                cy="288.253"
                r="3.035"
                fill="#590000"
                strokeWidth="0"
                display="inline"
                opacity="1"
                ></circle>
            </g>
            </g>
        </Svg_pin>
    )
};

export default Pin;
