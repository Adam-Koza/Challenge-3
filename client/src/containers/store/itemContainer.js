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
                name: "School of Rock",
                handle: "Toronto, ON",
                body: "../../../images/sor.jpg",
                price: 1000,
                date: "Dec 22"
            }, {
                id: 3,
                name: "Silverstein",
                handle: "Toronto, ON",
                body: "../../../images/sil.jpeg",
                price: 1500,
                date: "Dec 15"
            }, {
                id: 4,
                name: "Krimer",
                handle: "Toronto, ON",
                body: "../../../images/kri.jpeg",
                price: 1700,
                date: "Dec 15"
            }, {
                id: 5,
                name: "Med. French Fries",
                handle: "Canada",
                body: "../../../images/fri.jpeg",
                price: 100,
                date: "Coupon"
            }, {
                id: 6,
                name: "Blue Jays",
                handle: "Toronto, ON",
                body: "../../../images/blu.jpeg",
                price: 600,
                date: "2019"
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
