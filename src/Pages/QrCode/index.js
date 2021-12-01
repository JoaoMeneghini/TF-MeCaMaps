//Libs
import React, { useState, useEffect } from 'react';
import QrReader from 'react-web-qr-reader';
import { useHistory } from "react-router-dom";

export default props => {

    const [data, setData] = useState('Not Found'); // capture data from QRCode
    //const [mode, setMode] = useState('user'); // it's possible to select which camera to use
    const history = useHistory(); // save url of the page before

    // if some error occur by reading the QRCode
    const handleError = (err) => {
        console.error(err)
    }

    // able user to change camera
    /*const cameraButton = () =>{
        if(mode === "environment"){
            setMode('user')
        } else {
            setMode('environment')
        }
      }*/

    // capture data from QRCode and concatenate with the past url
    useEffect(()=>{
        if(data==='Not Found') {
            return;
        }
        history.push(data);
    }, [data])

    //  used to capture only param of the url aftter scanning qrcode
    const regex = /([^\/?]+)(?:\?.+)?$/;

    // return html structure to show the website
    // if QRCode is valid, data will be set to the param scanned
    return(
        <React.Fragment>
            <div style = {{maxWidth: '800px', margin: '0 auto'}}>
                <p style={{fontSize: '30px',
                           textAlign: 'center',
                           marginTop: '100px',
                           color: '#4A89F3',}}>
                    Atualize sua posição atual</p>
                <QrReader
                    delay={100}
                    style={{width: '100%'}}
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
