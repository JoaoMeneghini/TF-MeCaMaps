import React, { useRef, useState, useEffect } from 'react';
import { useGesture } from "react-use-gesture";
import { Div, Title, MainMenu, Floor, Floor_options, Floor_option, StyledLink, Map, Floor_img, Distance, Buttons, Buttons_a, Buttons_cam, CamImg, CamButton, Dropdown} from './styles';
import { Link, useParams } from 'react-router-dom';

import  Grafo from '../../Components/Djikstra/grafo';
import Drops from '../../Components/Dropdown/Dropdown';

//import Floor0 from '../../Images/Inferior.png';
import Floor0 from '../../Images/first.jpeg';
import Floor1 from '../../Images/Superior.png'

import Andar from '../../Components/Floor/floor';

import cam from '../../Images/cam.png';

import { useHereC1, useWhereC1, useColor, useFloor } from "../../Context/options";
import  { correlations } from '../../Components/Paths/correlations';

export default props => {
    let b = new Grafo();
    const { toColor, setToColor } = useColor();
    const { hereC1, setHereC1 } = useHereC1();
    const { whereC1, setWhereC1 } = useWhereC1();
    const { floor, setFloor }= useFloor();
    const { actual } = useParams();

    const [ distance, setDistance ] = useState(0);

    useEffect(() => {
        if (actual) {
            setHereC1(actual);
            setFloor(correlations[actual][1]);
        }
    },[actual])

    useEffect(() => {
        if (hereC1 !== '' && whereC1 !== '') {
            let init = correlations[hereC1][0];
            let end = correlations[whereC1][0];
            let values = b.AchaMenorCaminho(init,end);
            setToColor(values[1]);
            console.log(values[0]);
            let d1 = values[0]*5.176;
            setDistance(d1);
        } else {
            setToColor([]);
            setDistance(0);
        };
        if (hereC1 !== '') {
            setFloor(correlations[hereC1][1]);
        }

    },[hereC1,whereC1])

    const changeFloor = () => {
        if (floor === 0) {
            setFloor(1);
        } else {
            setFloor(0);
        }
    };

    return (
        <Div>
            <div>
                <Title>MeCaMaps</Title>
            </div>
            <Floor_options>
                <Floor_option>
                    <StyledLink to="/" style={{ textDecoration: 'none' }}>Menu Principal</StyledLink>
                </Floor_option>
                <Floor_option onClick={changeFloor}>Trocar andar</Floor_option>
            </Floor_options>
            <Buttons>
                <Buttons_cam>
                    <StyledLink to="/route-generator/qrcode"><CamButton>
                        <CamImg src={cam}/>
                    </CamButton></StyledLink>
                </Buttons_cam>
                <Buttons_a>
                    <Drops placeholder='atual' place={hereC1} setPlace={setHereC1}></Drops>
                </Buttons_a>
                <Buttons_a>
                    <Drops placeholder='destino' place={whereC1} setPlace={setWhereC1}></Drops>
                </Buttons_a>

            </Buttons>
            {floor === 0 ? (<Andar place={Floor0} color={toColor} floor={floor}/>) : ((<Andar place={Floor1} color={toColor} option={floor}/>))}
            <Distance>Distância estimada: {distance.toFixed(1)}m</Distance>
        </Div>
    );
}
