import React from 'react';
import ItemContainer from '../../containers/store/itemContainer';

// CSS
import "./store.css";

const Store = props => {
  return (
    <div class="store-container">
      <h2>Redeem CareCoins in our Store!</h2>
      <ItemContainer />
    </div>
  )
}

export default Store;
