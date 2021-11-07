import React, { useState, useEffect, useRef } from 'react';
import QrReader from 'react-qr-scanner';
import { useHistory } from "react-router-dom";

export default props => {

    const [data, setData] = useState('Not Found');
    const history = useHistory();
    const qrReader = useRef(null);

    const handleError = (err) => {
        console.error(err)
    }

    const openImageDialog = () => {
        qrReader.current.openImageDialog()
    }

    useEffect(()=>{
        if(data==='Not Found') {
            return;
        }
        history.push(data);
    }, [data])

    const previewStyle = {
        height: 700,
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
                    ref={qrReader}
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
                    legacyMode
                />
            </div>
            <input type="button" value="Submit QR Code" onClick={openImageDialog} />
            <p style = {textStyle}>
                {data}
            </p>
        </React.Fragment>
    )
}
