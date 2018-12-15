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
					<h4 className="handle">{props.handle} - {props.date}</h4>
				</div>
				<div className="item-body">
					<img src={props.body}/>
				</div>
				<div className="item-bottom">
				<b>CareCoins: {props.price}</b>
				<button type="button" className="btn btn-success">Redeem</button>
				</div>

			</div>
		</DonationItemTile>
	)
};

export default DonationItem;
