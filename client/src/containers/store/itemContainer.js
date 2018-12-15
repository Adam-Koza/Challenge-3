import React, {Component} from 'react';
import Item from '../../components/store/item';


export default class ItemContainer extends Component {
    state = {
        items: []
    }

    componentDidMount() {
        this.setState({items: [{
            id: 1,
            name: "Adam Koza",
            handle: "@adamkoza",
            body: "Hello, this is my first tweet!",
            date: "Dec 4"
        }, {
            id: 2,
            name: "Adam Koza",
            handle: "@adamkoza",
            body: "Hello, this is my first tweet!",
            date: "Dec 4"
        }, {
            id: 3,
            name: "Adam Koza",
            handle: "@adamkoza",
            body: "Hello, this is my first tweet!",
            date: "Dec 4"
        }, {
            id: 4,
            name: "Adam Koza",
            handle: "@adamkoza",
            body: "Hello, this is my first tweet!",
            date: "Dec 4"
        }, {
            id: 5,
            name: "Adam Koza",
            handle: "@adamkoza",
            body: "Hello, this is my first tweet!",
            date: "Dec 4"
        } 
        
        ]});
    }

    renderItems() {
        return this.state.items.map(item => {
            return <Item
                key={"item-" + item.id}
                name={item.name}
                handle={item.handle}
                body={item.body}
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