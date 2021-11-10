import React, { useRef, useState, useEffect } from 'react';
import { useGesture } from "react-use-gesture";
import { Div, Title, MainMenu, Floor, Map, Floor_img, Button, CamImg, CamButton, Dropdown} from './styles';
import { Link, useParams } from 'react-router-dom';

import  Grafo from '../../Components/Djikstra/grafo';
import Drops from '../../Components/Dropdown/Dropdown';

//import Floor0 from '../../Images/Inferior.png';
import Floor0 from '../../Components/Paths/Planta_Terreo.jpg';
import Floor1 from '../../Images/Superior.png'

import Routes_zero from '../../Components/Paths/caminhos_zero';
import Routes_first from '../../Components/Paths/caminhos_first';

import cam from '../../Images/cam.png';

import { useHereC1, useWhereC1, useColor } from "../../Context/options";
import  { correlations } from '../../Components/Paths/correlations';

export default props => {
    let b = new Grafo();
    const { toColor, setToColor } = useColor();
    const { hereC1, setHereC1 } = useHereC1();
    const { whereC1, setWhereC1 } = useWhereC1();
    const { actual } = useParams();

    const [ floor, setFloor ] = useState(0);
    const [ distance, setDistance ] = useState(0);

    useEffect(() => {
        if (actual) {
            setHereC1(actual);
        }
    },[])

    useEffect(() => {
        if (hereC1 !== '' && whereC1 !== '') {
            let init = correlations[hereC1];
            let end = correlations[whereC1];
            let values = b.AchaMenorCaminho(init,end);
            setToColor(values[1]);
            console.log(values[0]);
            let d1 = values[0];
            setDistance(d1);
        } else {
            setToColor([]);
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
            <MainMenu>
                <Link to="/">Menu Principal</Link>
            </MainMenu>
            <Floor onClick={changeFloor}>Trocar andar</Floor>
            <Dropdown>
                <div>
                    <Drops place={hereC1} setPlace={setHereC1}></Drops>
                </div>
                <div>
                    <Drops place={whereC1} setPlace={setWhereC1}></Drops>
                </div>
            </Dropdown>
            <div>
                <Link to="/zerofloor/qrcode"><CamButton>
                    <CamImg src={cam}/>
                </CamButton></Link>
            </div>
            {floor === 0 ?
            (
                <Map>
                    <Routes_zero color={toColor}/>
                    <Floor_img src={Floor0} />
                </Map>
            ):(
                <Map>
                    <Routes_first color={toColor}/>
                    <Floor_img src={Floor1} />
                </Map>
            )}
            <p>Distância até o destino: {distance}</p>
        </Div>
    );
}

function ImageCropper({ src }) {
    let [crop, setCrop] = useState({ x: 0, y: 0, scale: 1 });
    let imageRef = useRef();
    useGesture(
      {
        onDrag: ({ offset: [dx, dy] }) => {
          setCrop((crop) => ({ ...crop, x: dx, y: dy }));
        },
        onPinch: ({ offset: [d] }) => {
          setCrop((crop) => ({ ...crop, scale: 1 + d / 50 }));
        },
      },
      {
        domTarget: imageRef,
        eventOptions: { passive: false },
      }
    );

    return (
      <>
        <div className="overflow-hidden ring-4 ring-blue-500 aspect-w-3 aspect-h-4">
          <div>
            <img
              src={src}
              ref={imageRef}
              style={{
                left: crop.x,
                top: crop.y,
                transform: `scale(${crop.scale})`,
                touchAction: "none",
              }}
              className="relative w-auto h-full max-w-none max-h-none"
            />
          </div>
        </div>
        <div className="mt-2">
          <p>Crop X: {crop.x}</p>
          <p>Crop Y: {crop.y}</p>
          <p>Crop Scale: {crop.scale}</p>
        </div>
      </>
    );
  }
