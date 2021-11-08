import React from 'react';
import { HashRouter as Router, Route, Switch} from 'react-router-dom';

import OptionProvider from "./Context/options";

import Main from './Pages/Main';
import Zero from './Pages/ZeroFloor';
import First from './Pages/FirstFloor';
import QR from './Pages/QrCode';

export default props => {
  return (
    <OptionProvider>
        <Router>
            <div>
                <Switch>
                    <Route path="/qrcode" component={QR}/>
                    <Route path="/zerofloor/qrcode" component={QR}/>
                    <Route path="/zerofloor/:actual?" component={Zero}/>
                    <Route path="/firstfloor" component={First}/>
                    <Route path="/:actual?" component={Main}/>
                </Switch>
            </div>
        </Router>
    </OptionProvider>
  );
}

/*"SET HTTPS=true&&SSL_CRT_FILE=cert.pem&&SSL_KEY_FILE=key.pem&&react-scripts start"*/
