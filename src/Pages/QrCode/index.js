import React, { useState, useEffect, useRef } from 'react';
import QrReader from 'react-qr-scanner';
import { useHistory } from "react-router-dom";

export default props => {

    const [data, setData] = useState('Not Found');
    const [mode, setMode] = useState('user');
    const history = useHistory();

    const handleError = (err) => {
        console.error(err)
    }

    const cameraButton = () =>{
        if(mode === "environment"){
            setMode('user')
        } else {
            setMode('environment')
        }
      }

    useEffect(()=>{
        if(data==='Not Found') {
            return;
        }
        history.push(data);
    }, [data])

    const previewStyle = {
        height: 1000,
        width: 1000,
        display: 'flex',
        justifyContent: 'center'
    }

    const camStyle = {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '-50px'
    }

    const textStyle = {
        fontSize: '30px',
        textAlign: 'center',
        marginTop: '100px'

    }

    const regex = /([^\/?]+)(?:\?.+)?$/;

    return(
        <React.Fragment>
            <div style = {camStyle} >
                <QrReader
                    delay={100}
                    style={previewStyle}
                    onScan={(result) => {
                        if (result) {
                            console.log(result.text.match(regex)[1]);
                            setData(result.text.match(regex)[1]);
                        }
                        else setData("Not Found");
                    }}
                    onError={handleError}
                    facingMode={mode}
                />
            </div>
            <input type="button" value="Camera..." onClick={cameraButton} />
        </React.Fragment>
    )
}
