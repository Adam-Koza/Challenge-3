import React, { Component } from 'react';
import ProfileItem from './profileItem';

// CSS
import "./profile.css";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = { donations: this.props.donations, redemptions: this.props.redemptions };
  }

  renderDonations() {
    return this.state.donations.map(donation => {
      return <ProfileItem
        key={donation.id}
        name={donation.name}
      />
    });
  }

  renderRedemptions() {
    return this.state.redemptions.map(redemption => {
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
        <hr />
        <br />
        <p>
          <hr />
          <h3>Total balance:</h3>
          <span>{this.props.balance} CareCoins</span>
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
