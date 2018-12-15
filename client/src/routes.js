import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from './components/homePage';
import Donation from './components/donation/donation';
import Profile from './components/profile/profile';
import Store from './components/store/store';
//import Fallback from './containers/Fallback';

export default class Routes extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/donation/"
          render={(props) => <Donation {...props} donate={this.props.donate} />}
        />
        <Route path="/store/"
          render={(props) => <Store {...props} balance={this.props.balance} 
          buyItem={this.props.buyItem} />}
        />
        <Route path="/profile/"
          render={(props) => <Profile {...props} balance={this.props.balance} 
          donations={this.donations}
          redemptions={this.redemptions} />}
        />
      </Switch>
    )
  }
}

