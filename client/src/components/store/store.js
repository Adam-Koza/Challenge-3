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
      <div className="store-container">
        <h2>Redeem CareCoins in our Store!</h2>
        <p>After donating and accumulating enough CareCoins, you can spend the tokens on the awesome things listed below!</p>
        <hr />
        <div className="store-item-list">
          <ItemContainer balance={this.props.balance} />
        </div>
      </div>
    )
  }
}
