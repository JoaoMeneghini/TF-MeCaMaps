import React, { useState, useEffect, useRef } from 'react';
/*import QrReader from 'react-qr-scanner';*/
import QrReader from 'react-web-qr-reader';
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
        width: '100%',
    };

    const camStyle = {
        maxWidth: '800px',
        margin: '0 auto',
    }

    const textStyle = {
        fontSize: '30px',
        textAlign: 'center',
        marginTop: '100px',
        color: '#4A89F3',
    }

    const regex = /([^\/?]+)(?:\?.+)?$/;

    return(
        <React.Fragment>
            <div style = {camStyle}>
                <p style={textStyle}>Atualize sua posição atual</p>
                <QrReader
                    delay={100}
                    style={previewStyle}
                    onScan={(result) => {
                        if (result) {
                            console.log(result.data.match(regex)[1]);
                            setData(result.data.match(regex)[1]);
                        }
                        else setData("Not Found");
                    }}
                    onError={handleError}
                    facingMode='environment'
                />
            </div>
        </React.Fragment>
    )
}
