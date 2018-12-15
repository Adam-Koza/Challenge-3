import React, {Component} from 'react';
import DonationItem from '../../components/donation/donationItem';

export default class DonationItemContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }

    componentDidMount() {
        this.setState({items: [{
            id: 1,
            name: "Men's Clothes",
            body: "../../../images/clothes_men.png",
            price: 20,
        }, {
            id: 2,
            name: "Women's Clothes",
            body: "../../../images/clothes_women.png",
            price: 20,
        }, {
            id: 3,
            name: "Kid's Clothes",
            body: "../../../images/clothes_kid.png",
            price: 10,
        }, {
            id: 4,
            name: "Assorted Clothes",
            body: "../../../images/clothes_accessories.png",
            price: 10,
        }, {
            id: 5,
            name: "Food items",
            body: "../../../images/food3.png",
            price: 20,
        }, {
            id: 6,
            name: "Gift Cards",
            body: "../../../images/giftcard.png",
            price: 20,
        }, {
            id: 7,
            name: "Money (CAD)",
            body: "../../../images/money.png",
            price: 50,
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
                donate={this.props.donate}
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
