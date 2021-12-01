// Libs
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// Styles
import { Div, Title, TitleBox, Floor_options, Floor_option, StyledLink, Map, Distance, Buttons, Buttons_a, Buttons_cam, CamImg, CamButton} from './styles';
// Components
import Grafo from '../../Components/Djikstra/grafo';
import Drops from '../../Components/Dropdown/Dropdown';
import Andar from '../../Components/Floor/floor';
import { correlations } from '../../Components/Paths/correlations';
import { coords } from '../../Components/Paths/coords';
import { qr_correlations } from '../../Components/Floor/qrcode_correlations';
// Images
import Floor0 from '../../Images/terreo.png';
import Floor1 from '../../Images/superior.png'
import cam from '../../Images/cam.png';
import arrow from '../../Images/arrow_GMaps.png';
import pin from '../../Images/Pin_GMaps.png';
import label from '../../Images/legenda.png';
// Global Variables
import { useHereC1, useWhereC1, useColor, useFloor, useCoordMan, useCoordPin } from "../../Context/options";


export default props => {
    let grafo = new Grafo(); // class which contains the graph of the nodes
    const { toColor, setToColor } = useColor(); // vector containing which lines to color
    const { hereC1, setHereC1 } = useHereC1(); // current position
    const { whereC1, setWhereC1 } = useWhereC1(); // place to go
    const { coordMan, setCoordMan } = useCoordMan(); // coordinates do pin of current position
    const { coordPin, setCoordPin } = useCoordPin(); // coordinates do pin of place to go
    const { floor, setFloor } = useFloor(0); // which floor is being showed
    const { actual } = useParams(); //access param from url

    const [ distance, setDistance ] = useState(0); // distance from the current postion to place to go
    const [ showMan, setShowMan ] = useState(1); // show or not show pin of current position
    const [ showPin, setShowPin ] = useState(1); // show or not show pin of place to go

    const scale = 5.176; // scale of the map

    // Everytime url is updated, current position and coordiantes of pin are also updated
    useEffect(() => {
        if (actual) {
            setHereC1(qr_correlations[actual]);
            setCoordMan(coords[actual]);
        }
    },[actual])

    // Everytime current position is updated, floor and coordinates pin are updated
    // Everytime place to go is updated, coordinates pin is updated
    // When both are selected, the path is calculated and return which lines to color and distance
    useEffect(() => {
        if (hereC1 !== '' && whereC1 !== '') {
            let init = correlations[hereC1][0];
            let end = correlations[whereC1][0];
            let values = grafo.AchaMenorCaminho(init,end);
            let d1 = values[0]*scale;
            setToColor(values[1]);
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

    // Everytime current position, place to go or floor are updated, show pin is set to show or not to show
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

    // Everytime  the button 'Trocar Andar' is clicked, floor is updated
    const changeFloor = () => {
        if (floor === 0) {
            setFloor(1);
        } else {
            setFloor(0);
        };
    };

    // return html structure to show the website
    // Map is conditional show, as well as, pins
    return (
        <Div>
            <TitleBox>
                <img src={arrow} style={{width : '30px', height : '30px'}}/>
                <Title>MeCaMaps</Title>
                <img src={pin} style={{width : '20px', height : '30px'}}/>
            </TitleBox>
            <Floor_options>
                <Floor_option>
                    <StyledLink to="/">Menu Principal</StyledLink>
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
                <img src={label} style={{position: 'relative'}}/>
                {floor === 0 ? (<Andar showMan={showMan} showPin={showPin} coordMan={coordMan}
                                        coordPin={coordPin} place={Floor0} color={toColor} floor={floor}/>)
                                : (<Andar showMan={showMan} showPin={showPin} coordMan={coordMan} coordPin={coordPin} place={Floor1}
                                        color={toColor} option={floor}/>)}
            </Map>
            <Distance>Distância estimada: {distance.toFixed(1)}m</Distance>
        </Div>
    );
}
