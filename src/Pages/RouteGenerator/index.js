import React, { useRef, useState, useEffect } from 'react';
import { useGesture } from "react-use-gesture";
import { Div, Title, TitleBox, MainMenu, Floor, Floor_options, Floor_option, StyledLink, Map, Floor_img, Distance, Buttons, Buttons_a, Buttons_cam, CamImg, CamButton, Dropdown} from './styles';
import { Link, useParams } from 'react-router-dom';

import  Grafo from '../../Components/Djikstra/grafo';
import Drops from '../../Components/Dropdown/Dropdown';

//import Floor0 from '../../Images/Inferior.png';
import Floor0 from '../../Images/terreo.png';
import Floor1 from '../../Images/superior.png'

import Andar from '../../Components/Floor/floor';

import cam from '../../Images/cam.png';
import arrow from '../../Images/arrow_GMaps.png';
import pin from '../../Images/Pin_GMaps.png';

import { useHereC1, useWhereC1, useColor, useFloor, useCoordMan, useCoordPin } from "../../Context/options";
import  { correlations } from '../../Components/Paths/correlations';
import  { coords } from '../../Components/Paths/coords';
import  { qr_correlations } from '../../Components/Floor/qrcode_correlations';

export default props => {
    let b = new Grafo();
    const { toColor, setToColor } = useColor();
    const { hereC1, setHereC1 } = useHereC1();
    const { coordMan, setCoordMan } = useCoordMan();
    const { coordPin, setCoordPin } = useCoordPin();
    const { whereC1, setWhereC1 } = useWhereC1();
    const { floor, setFloor } = useFloor(0);
    const { actual } = useParams();

    const [ distance, setDistance ] = useState(0);
    const [ showMan, setShowMan ] = useState(1);
    const [ showPin, setShowPin ] = useState(1);

    useEffect(() => {
        if (actual) {
            setHereC1(qr_correlations[actual]);
            setCoordMan(coords[actual]);
        }
    },[actual])

    useEffect(() => {
        if (hereC1 !== '' && whereC1 !== '') {
            let init = correlations[hereC1][0];
            let end = correlations[whereC1][0];
            let values = b.AchaMenorCaminho(init,end);
            setToColor(values[1]);
            let d1 = values[0]*5.176;
            setDistance(d1);
        } else {
            setToColor([]);
            setDistance(0);
            setCoordMan(0);
            setCoordPin(0);
        };
        if (hereC1 !== '') {
            setFloor(correlations[hereC1][1]);
            setCoordMan(coords[correlations[hereC1][0]]);
        };
        if (whereC1 !== '') {
            setCoordPin(coords[correlations[whereC1][0]]);
        };

    },[hereC1,whereC1])

    useEffect(() => {
        if (hereC1 !== '' && correlations[hereC1][1] === floor) {
            setShowMan(1);
        } else {
            setShowMan(0);
        };
        if (whereC1 !== '' && correlations[whereC1][1] === floor) {
            setShowPin(1);
        } else {
            setShowPin(0);
        }

    },[hereC1,whereC1,floor]);

    const changeFloor = () => {
        if (floor === 0) {
            setFloor(1);
        } else {
            setFloor(0);
        };
    };

    return (
        <Div>
            <TitleBox>
                <img src={arrow} style={{width : '30px', height : '30px'}}/>
                <Title>MeCaMaps</Title>
                <img src={pin} style={{width : '20px', height : '30px'}}/>
            </TitleBox>
            <Floor_options>
                <Floor_option>
                    <StyledLink to="/" >Menu Principal</StyledLink>
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
            <Map>
            {console.log(props.floor)}
            {floor === 0 ? (<Andar showMan={showMan} showPin={showPin} coordMan={coordMan}
                                    coordPin={coordPin} place={Floor0} color={toColor} floor={floor}/>)
                            : (<Andar showMan={showMan} showPin={showPin} coordMan={coordMan} coordPin={coordPin} place={Floor1}
                                    color={toColor} option={floor}/>)}
            </Map>
            <Distance>Distância estimada: {distance.toFixed(1)}m</Distance>
        </Div>
    );
}
