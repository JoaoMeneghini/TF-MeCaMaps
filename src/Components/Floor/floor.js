import React, { useRef, useEffect } from 'react';
import ContextMenu from "simple-context-menu";

import "./styles.css";

import Routes_zero from '../../Components/Paths/caminhos_zero';
import Routes_first from '../../Components/Paths/caminhos_first';

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

export default props => {
    return (
      <div className="App">
        <TransformWrapper initialScale={1}>
          {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
            <>
              <TransformComponent>
                <div className="img-container" id="target">
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
