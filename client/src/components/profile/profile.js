import React from 'react';

// CSS
import "./profile.css";

export default class Profile extends Component {
  constructor(props) {
    super(props);
  }

  renderDonations() {
    return this.props.donations.map(donation => {
      return (
        <li>
          <span>{donation}</span>
        </li>
      )
    });
  }

  renderRedemptions() {
    return this.props.redemptions.map(redemption => {
      return (
        <li>
          <span>{redemption}</span>
        </li>
      )
    });
  }



  render() {
    return (
      <div className="profile-container">
        <h2>View your awesome profile!</h2>
        <p>Review your CareCoin token balance, past donation history, and redeemed items.</p>
        <hr />
        <br />
        <p>
          <hr />
          <h3>Total balance:</h3>
          <span>{props.balance} CareCoins</span>
          <hr />
          <h3>Donation history:</h3>
          <ul>
            {this.renderDonations()}
          </ul>
          <hr />
          <h3>Redeemed Items:</h3>
          <ul>
            {this.renderRedemptions()}
          </ul>
          <hr />
        </p>
      </div>
    )
  }
}
