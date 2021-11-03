import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

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
                    <Route path="/TF-MeCaMaps/qrcode" exact component={QR}/>
                    <Route path="/TF-MeCaMaps/zerofloor/qrcode" exact component={QR}/>
                    <Route path="/TF-MeCaMaps/zerofloor/:actual?" exact component={Zero}/>
                    <Route path="/TF-MeCaMaps/firstfloor" exact component={First}/>
                    <Route path="/TF-MeCaMaps/:actual?" exact component={Main}/>
                    <Route path="/:actual?" exact component={Main}/>
                </Switch>
            </div>
        </Router>
    </OptionProvider>
  );
}

