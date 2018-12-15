import React from 'react';
import DonationItemContainer from '../../containers/donation/donationContainer';

// CSS
import "./donation.css";

const Donation = props => {
  return (
    <div class="donation-container">
      <h2>Donate and receive CareCoins!</h2>
      <DonationItemContainer />
    </div>
  )
}

export default Donation;
