import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  text-align: center;
  margin-top: 0;
  background-color: gray;
`;

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin: 20px auto;
`;

export const Floor_options = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    width: 95%;
    height: 50px;
    margin-left: 10px;
`;

export const Floor_option= styled.div`
    width: 130px;
    text-decoration: none;
    cursor: pointer;
    margin-right: 0px;
    text-align: center;
    border: 1px solid lightgrey;
    border-radius: 5px;
    background-color: #aaaaaa;
    padding: 5px;
    color: black;
`;

const theme = {
    gray: {
      default: "#bbbbbb",
      hover: "#aaaaaa"
    },
    pink: {
      default: "#e91e63",
      hover: "#ad1457"
    }
  };

export const StyledLink = styled(Link)`
    text-decoration: inherit;
    color: inherit;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: inherit;
    }
`;

export const Button = styled.button`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => theme[props.theme].default};
    color: white;
    height: 40px;
    width: 100px;
    padding: 5px 15px;
    border-radius: 5px;
    outline: 0;
    margin: 20px auto;
    cursor: pointer;
    box-shadow: 0px 2px 2px lightgray;
    transition: ease background-color 250ms;
    &:hover {
        background-color: ${(props) => theme[props.theme].hover};
    }
    &:disabled {
        cursor: default;
        opacity: 0.7;
    }
`;

Button.defaultProps = {
    theme: "gray"
  };

export const Buttons = styled.div`
    display: flex;
    width: 100%;
    height: 65px;
`;

export const Buttons_a = styled.div`
    width: 45%;
    height: 50px;
    padding: 10px 10px 10px 10px;
`;

export const Buttons_cam = styled.div`
    width: 10%;
    height: 50px;
    padding: 10px 10px 10px 10px;
`;

export const CamButton = styled.button`
    display: flex;
    border-radius: 5px;
    height: 33px;
    width: 33px;
    background-color: ${(props) => theme[props.theme].default};
    cursor: pointer;
    justify-content: center;
    align-items: center;
    transition: ease background-color 250ms;
    &:hover {
        background-color: ${(props) => theme[props.theme].hover};
    }
`
CamButton.defaultProps = {
    theme: "gray"
  };

export const Title = styled.h1`
    display: flex;
    justify-content: center;
`
export const CamImg = styled.img`
    height: 23px;
    width: 23px;

`
export const MainMenu = styled.button`
    position: absolute;
    left: 0px;
`;

export const Distance = styled.p`
    width: 100%;
    text-align: center;
`;

export const Floor = styled.button`
    position: absolute;
    right: 0px;
`;

export const Map = styled.div`
    max-width: 800px;
    display: flex;
    margin: 0 auto;
    padding: 20px 10px 10px 10px;
`;

export const Floor_img = styled.img`
    width: 100%
`;
