import React, { useEffect } from 'react';
import { CamImg, Div, CamButton, StyledLink, SubTitle, Title, TitleBox, Button } from './styles';
import cam from '../../Images/cam.png';
import arrow from '../../Images/arrow_GMaps.png';
import pin from '../../Images/Pin_GMaps.png';
import { Link, useParams } from 'react-router-dom';

//import DropdownSearchSelection from '../../Components/Dropdown/Dropdown';
import Drops from '../../Components/Dropdown/Dropdown';

import { useHereC1, useWhereC1 } from "../../Context/options";

import  { qr_correlations } from '../../Components/Floor/qrcode_correlations';

export default props => {

    const { actual } = useParams();

    const { hereC1, setHereC1 } = useHereC1();
    const { whereC1, setWhereC1 } = useWhereC1();

    useEffect(() => {
        if (actual) {
            setHereC1(qr_correlations[actual])
        }
    },[actual])

    return (
        <Div>
            <TitleBox>
                <img src={arrow} style={{width : '30px', height : '30px'}}/>
                <Title>MeCaMaps</Title>
                <img src={pin} style={{width : '20px', height : '30px'}}/>
            </TitleBox>
            <div>
                <SubTitle>Localize-se na Mecatrônica!</SubTitle>
            </div>
            <div>
                <StyledLink to="/route-generator"><Button>Visualizar Mapa</Button></StyledLink>
            </div>
            <div>
                <StyledLink to="qrcode"><CamButton>
                    <CamImg src={cam}/>
                </CamButton></StyledLink>
                <Button><Drops placeholder='atual' place={hereC1} setPlace={setHereC1}></Drops></Button>
            </div>
            <div>
                <Button><Drops placeholder='destino' place={whereC1} setPlace={setWhereC1}></Drops></Button>
            </div>
            <div>
                <StyledLink to={((hereC1.length > 1) && (whereC1.length > 1)) ? '/route-generator' : false}>
                    <Button disabled={(hereC1.length < 1) || (whereC1.length < 1)}>Gerar Rota</Button>
                </StyledLink>
            </div>
        </Div>
    );
}
