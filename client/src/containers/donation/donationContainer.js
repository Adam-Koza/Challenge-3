import React, {Component} from 'react';
import DonationItem from '../../components/donation/donationItem';

export default class DonationItemContainer extends Component {
    state = {
        items: []
    }

    componentDidMount() {
        this.setState({items: [{
            id: 1,
            name: "Men's Clothes",
            body: "../../../images/clothes_men.jpg",
            price: 20,
        }, {
            id: 2,
            name: "Women's Clothes",
            body: "../../../images/clothes_women.jpg",
            price: 20,
        }, {
            id: 3,
            name: "Clothes - Accessories",
            handle: "London, ON",
            body: "../../../images/clothes_accessories.jpg",
            price: 10,
        }, {
            id: 4,
            name: "Stuff",
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
        }

        ]});
    }

    renderItems() {
        return this.state.items.map(item => {
            return <DonationItem
                key={"item-" + item.id}
                name={item.name}
                body={item.body}
                price={item.price}
            />
        });
    }



    render() {
        return (
            <div>
                {this.renderItems()}
            </div>
        )
    }
}
