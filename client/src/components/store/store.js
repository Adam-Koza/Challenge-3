import React, { Component } from 'react';
import ItemContainer from '../../containers/store/itemContainer';

// CSS
import "./store.css";

export default class Store extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="store-container">
        <h2>Redeem CareCoins in our Store!</h2>
        <ItemContainer balance={this.props.balance} buyItem={this.props.buyItem} />
      </div>
    )
  }
}
