import React, { Component } from 'react';
import ProfileItem from './profileItem';

// CSS
import "./profile.css";

export default class Profile extends Component {
  constructor(props) {
    super(props);
  }

  renderDonations() {
    return this.props.donations.map(donation => {
      return <ProfileItem
        key={donation.id}
        name={donation.name}
      />
    });
  }

  renderRedemptions() {
    return this.props.redemptions.map(redemption => {
      return <ProfileItem
        key={redemption.id}
        name={redemption.name}
      />
    });
  }



  render() {
    return (
      <div className="profile-container">
        <h2>View your awesome profile!</h2>
        <p>Review your CareCoin token balance, past donation history, and redeemed items.</p>
        <img className="profile-logo" src="../../../images/carecoin_icon.png" />
        <hr />
        <p>
          <div className="profile-balance"><h3>{this.props.balance} CareCoins</h3></div>
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
