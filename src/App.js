import React from 'react';
import { HashRouter as Router, Route, Switch} from 'react-router-dom';

import OptionProvider from "./Context/options";

import Main from './Pages/Main';
import Route_generator from './Pages/RouteGenerator';
import QR from './Pages/QrCode';

export default props => {
  return (
    <OptionProvider>
        <Router>
            <div>
                <Switch>
                    <Route path="/qrcode" component={QR}/>
                    <Route path="/route-generator/qrcode" component={QR}/>
                    <Route path="/route-generator/:actual?" component={Route_generator}/>
                    <Route path="/:actual?" component={Main}/>
                </Switch>
            </div>
        </Router>
    </OptionProvider>
  );
}

/*"SET HTTPS=true&&SSL_CRT_FILE=cert.pem&&SSL_KEY_FILE=key.pem&&react-scripts start"*/
