import React from 'react';
import DonationItemContainer from '../../containers/donation/donationContainer';

// CSS
import "./donation.css";

const Donation = props => {
  return (
    <div class="donation-container">
      <h2>Donate and receive CareCoins!</h2>
      <p>Donate items and once verified you will receive CareCoin tokens. Below are items that we are currently accepting and the amount of tokens that you will receive. Thanks for helping the community.</p>
      <div className="donation-item-list">
        <DonationItemContainer />
      </div>
    </div>
  )
}

export default Donation;
