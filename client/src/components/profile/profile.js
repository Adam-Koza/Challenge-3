import React from 'react';

// CSS
import "./profile.css";

const Profile = props => {
  return (
    <div className="profile-container">
      <h2>View your awesome profile!</h2>
      <p>Review your CareCoin token balance, past donation history, and redeemed items.</p>
      <hr />
      <br />
      <p>
        <hr />
        <h3>Total balance:</h3>
        <span>420 CareCoins</span>
        <hr />
        <h3>Donation history:</h3>
        <ul>
          <li>
            <span>Men's Clothes</span>
          </li>
          <li>
            <span>Canned Food</span>
          </li>
          <li>
            <span>Kid's Clothes</span>
          </li>
        </ul>
        <hr />
          <h3>Redeemed Items:</h3>
          <ul>
            <li>
              <span>Some awesome concert</span>
            </li>
          </ul>
          <hr />
      </p>

    </div>
  )
}

export default Profile;
