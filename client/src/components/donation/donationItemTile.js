import React from 'react';

// CSS
import "./donationItemTile.css";

const DonationItemTile = props => {
	return (
		<div className="donation-item-tile-container">
			{props.children}
		</div>
	)
};

export default DonationItemTile;
