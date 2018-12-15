import React from 'react';
import DonationItemContainer from '../../containers/donation/donationContainer';

// CSS
import "./donation.css";

const Donation = props => {
  return (
    <div className="donation-container">
      <h2>Donate and receive CareCoins!</h2>
      <div className="donation-item-container">
        <DonationItemContainer />
      </div>
    </div>
  )
}

export default Donation;
