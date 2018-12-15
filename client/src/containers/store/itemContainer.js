import React, { Component } from 'react';
import Item from '../../components/store/item';


export default class ItemContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }

    componentDidMount() {
        this.setState({
            items: [{
                id: 1,
                name: "Rock The Park",
                handle: "London, ON",
                body: "../../../images/rtp.jpg",
                price: 2000,
                date: "July 14"
            }, {
                id: 2,
                name: "Rock The Park",
                handle: "London, ON",
                body: "../../../images/rtp.jpg",
                price: 2000,
                date: "July 14"
            }, {
                id: 3,
                name: "Rock The Park",
                handle: "London, ON",
                body: "../../../images/rtp.jpg",
                price: 2000,
                date: "July 14"
            }, {
                id: 4,
                name: "Rock The Park",
                handle: "London, ON",
                body: "../../../images/rtp.jpg",
                price: 2000,
                date: "July 14"
            }, {
                id: 5,
                name: "Rock The Park",
                handle: "London, ON",
                body: "../../../images/rtp.jpg",
                price: 2000,
                date: "July 14"
            }, {
                id: 6,
                name: "Rock The Park",
                handle: "London, ON",
                body: "../../../images/rtp.jpg",
                price: 2000,
                date: "July 14"
            }, {
                id: 7,
                name: "Rock The Park",
                handle: "London, ON",
                body: "../../../images/rtp.jpg",
                price: 2000,
                date: "July 14"
            },{
                id: 8,
                name: "Rock The Park",
                handle: "London, ON",
                body: "../../../images/rtp.jpg",
                price: 2000,
                date: "July 14"
            },{
                id: 9,
                name: "Rock The Park",
                handle: "London, ON",
                body: "../../../images/rtp.jpg",
                price: 2000,
                date: "July 14"
            }

            ]
        });
    }

    renderItems() {
        return this.state.items.map(item => {
            return <Item
                key={"item-" + item.id}
                name={item.name}
                handle={item.handle}
                body={item.body}
                price={item.price}
                date={item.date}
                buyItem={this.props.buyItem}
            />
        });
    }



    render() {
        return (
            <div>
                <div>
                    <h4>Your Available Balance: {this.props.balance}</h4>
                </div>
                <div className="store-item-list">
                    {this.renderItems()}
                </div>
            </div>
        )
    }
}
