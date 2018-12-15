import React, {Component} from 'react';
import DonationItem from '../../components/donation/donationItem';

export default class DonationItemContainer extends Component {
    state = {
        items: []
    }

    componentDidMount() {
        this.setState({items: [{
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
