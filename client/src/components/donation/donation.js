import React, {Component} from 'react';
import DonationItemContainer from '../../containers/donation/donationContainer';

// CSS
import "./donation.css";

export default class Donation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="donation-container">
        <h2>Donate and receive CareCoins!</h2>
        <p>Donate items and once verified you will receive CareCoin tokens. Below are items that we are currently accepting and the amount of tokens that you will receive. Thanks for helping the community!</p>
        <div className="donation-item-list">
          <DonationItemContainer donate={this.props.donate} />
        </div>
      </div>
    )
  }
}
