// Libs
import React from 'react';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
// Styles
import "./styles.css";
// Components
import Routes_zero from '../../Components/Paths/caminhos_zero';
import Routes_first from '../../Components/Paths/caminhos_first';
import Pin from '../../Components/Paths/pin';
import Man_pin from '../../Components/Paths/man_pin';

// render maps, paths and pins according to floor and options selected
export default props => {
    return (
      <div className="App">
        <TransformWrapper initialScale={1}>
          {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
            <>
              <TransformComponent>
                <div className="img-container" id="target">
                    {(props.coordPin !== 0 && props.showPin !== 0) ? (<Pin floor={props.option} coordPin={props.coordPin}/>):(<></>)}
                    {(props.coordMan !== 0 && props.showMan !== 0) ? (<Man_pin floor={props.option} coordMan={props.coordMan}/>):(<></>)}
                    {props.floor === 0 ? (
                            <Routes_zero color={props.color}/>)
                        : (
                            <Routes_first color={props.color}/>
                    )}
                    <img
                        src={props.place}
                        alt="test"
                    />
                </div>
              </TransformComponent>
            </>
          )}
        </TransformWrapper>
      </div>
    );
  }
