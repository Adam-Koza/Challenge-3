import React from 'react';

// CSS
import "./item.css"
import ItemTile from "./itemTile";

const Item = props => {
	return (
		<ItemTile>
			<div>
				<div className="item-container">
					<h4 className="name">{props.name}</h4>
					<h4 className="handle">{props.handle} - {props.date}</h4>
				</div>
				<div className="item-body">
					<img src={props.body}/>
				</div>
				<div className="item-bottom">
				<b>CareCoins: {props.price}</b>
				<button type="button" className="btn btn-success" onClick={(e) => props.buyItem(e, props.price, props.name)}>Redeem</button>
				</div>

			</div>
		</ItemTile>
	)
};

export default Item;
