import React, {Component} from 'react';
import DonationItem from '../../components/donation/donationItem';

export default class DonationItemContainer extends Component {
    state = {
        items: []
    }

    componentDidMount() {
        this.setState({items: [{
            id: 1,
            name: "Clothes",
            handle: "London, ON",
            body: "../../../images/rtp.jpg",
            price: 2000,
            date: "July 14"
        }, {
            id: 2,
            name: "Food",
            handle: "London, ON",
            body: "../../../images/rtp.jpg",
            price: 2000,
            date: "July 14"
        }, {
            id: 3,
            name: "Gift Card",
            handle: "London, ON",
            body: "../../../images/rtp.jpg",
            price: 2000,
            date: "July 14"
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
                handle={item.handle}
                body={item.body}
                price={item.price}
                date={item.date}
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
