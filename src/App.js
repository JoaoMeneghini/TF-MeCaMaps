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
        <Router basename={public.env.PUBLIC_URL}>
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

