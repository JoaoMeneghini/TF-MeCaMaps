import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  text-align: center;
  background-color: gray;
`;

export const Div = styled.div`
    width: 450px;
    height: 450px;
    margin: 20px auto;
    position: relative;
`;

export const Button = styled.button`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => theme[props.theme].default};
    color: black;
    height: 50px;
    width: 300px;
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

Button.defaultProps = {
    theme: "gray"
  };

export const CamButton = styled.button`
    position: absolute;
    border-radius: 5px;
    height: 50px;
    width: 50px;
    left: 12px;
    color: white;
    background-color: ${(props) => theme[props.theme].default};
    cursor: pointer;
    box-shadow: 0px 2px 2px lightgray;
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

export const SubTitle = styled.h2`
    display: flex;
    justify-content: center;
    color: #aaaaaa;
`
export const CamImg = styled.img`
    position: relative;
    height: 55%;
    width: 100%;
    margin: 10px 0;
`

export const StyledLink = styled(Link)`
    text-decoration: none;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;
