import React from 'react';

// CSS
import "./donationItem.css"
import DonationItemTile from "./donationItemTile";

const DonationItem = props => {
	return (
		<DonationItemTile>
			<div>
				<div className="donation-item-container">
					<h4 className="name">{props.name}</h4>
				</div>
				<div className="donation-item-body">
					<img src={props.body}/>
				</div>
				<div className="donation-item-bottom">
					<b>CareCoins: {props.price}</b>
					<button type="button" className="btn btn-success">Donate</button>
				</div>

			</div>
		</DonationItemTile>
	)
};

export default DonationItem;
