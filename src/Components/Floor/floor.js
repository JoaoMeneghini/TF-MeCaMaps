import React, { useRef, useEffect } from 'react';
import Hotkeys from "react-hot-keys";
import ContextMenu from "simple-context-menu";

import "./styles.css";

import Routes_zero from '../../Components/Paths/caminhos_zero';
import Routes_first from '../../Components/Paths/caminhos_first';

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const ContextMenuDataSource = [
    {
      title: "Zoom In",
      key: "zoomIn"
    },
    {
      title: "Zoom Out",
      key: "zoomOut"
    },
    {
      title: "Reset Zoom",
      key: "resetZoom"
    }
  ];

  const keys = {
    ZOOM_IN: "=, +, shift+=",
    ZOOM_OUT: "-",
    RESET: "0"
  };

export default props => {
    const contextMenu = new ContextMenu();
    const transformRef = useRef(null);

    const callBack = (key) => {
      if (key === "resetZoom") {
        transformRef.current?.resetTransform();
      } else if (key === "zoomOut") {
        transformRef.current?.zoomOut();
      } else {
        transformRef.current?.zoomIn();
      }
    };

    const options = {
      delay: 500 //delay submenu
    };

    useEffect(() => {
      contextMenu.register("#target", callBack, ContextMenuDataSource, options);
    });
    return (
      <div className="App">
        <TransformWrapper initialScale={1} ref={transformRef}>
          {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
            <>
              <div className="tools">
                <Hotkeys keyName={keys.ZOOM_IN} onKeyDown={() => zoomIn()}>
                  <button onClick={() => zoomIn()}>Zoom In</button>
                </Hotkeys>
                <Hotkeys keyName={keys.ZOOM_OUT} onKeyDown={() => zoomOut()}>
                  <button onClick={() => zoomOut()}>Zoom Out</button>
                </Hotkeys>
                <Hotkeys keyName={keys.RESET} onKeyDown={() => resetTransform()}>
                  <button onClick={() => resetTransform()}>Reset Zoom</button>
                </Hotkeys>
              </div>

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
