import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from './components/homePage';
import Donation from './components/donation/donation';
import Profile from './components/profile/profile';
import Store from './components/store/store';
//import Fallback from './containers/Fallback';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/donation/" component={Donation} />
      <Route path="/store/" component={Store} />
      <Route path="/profile/" component={Profile} />
    </Switch>
  )
}

export default Routes;
