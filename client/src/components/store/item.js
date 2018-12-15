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
					{props.body}
				</div>
			</div>
		</ItemTile>
	)
};

export default Item;