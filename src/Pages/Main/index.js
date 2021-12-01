//Libs
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
//Styles
import { CamImg, Div, CamButton, StyledLink, SubTitle, Title, TitleBox, Button } from './styles';
//Icons
import cam from '../../Images/cam.png';
import arrow from '../../Images/arrow_GMaps.png';
import pin from '../../Images/Pin_GMaps.png';
//Components
import Drops from '../../Components/Dropdown/Dropdown';
import  { qr_correlations } from '../../Components/Floor/qrcode_correlations';
//Global Variable
import { useHereC1, useWhereC1 } from "../../Context/options";


export default props => {

    const { actual } = useParams(); //access param from url
    const { hereC1, setHereC1 } = useHereC1(); //current position
    const { whereC1, setWhereC1 } = useWhereC1(); //place to go

    //Everytime url is updated, current position is also updated
    useEffect(() => {
        if (actual) {
            setHereC1(qr_correlations[actual])
        }
    },[actual])

    //return html structure to show the website
    //when an option is selected, current position or place to go is updated
    // button "Gerar Rota" only be enabled if both current position and place to go are selected
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
