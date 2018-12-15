import React, {Component} from 'react';
// CSS
import "./itemForm.css";
import ItemTile from "./itemTile";
class ItemForm extends Component {
    constructor (props) {
        super(props);
        this.state = {
            handle: "@gregthegreek",
            name: "Gregory Markou",
            date: Date.now(),
            body: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.resetBody = this.resetBody.bind(this);
        this.submitTweet = this.props.submitTweet;
    }
    handleSubmit(event) {
        console.log('A tweet submitted: ' + this.state.body) ;
        event.preventDefault();
        this.props.submitTweet(this.state, this.resetBody)
    }
    resetBody() {
        this.setState({body: ""});
    }
    handleChange(event) {
        this.setState({body: event.target.value});
    }
    render () {
        return (
            <ItemTile>
                <form>
                    <div className="form-group">
                        <input type="hidden" name="handle" value={this.state.handle}/>
                        <input type="hidden" name="name" value={this.state.name} />
                        <textarea name="body" id="tweet-body" cols="30" rows="5"
                                  placeholder="Insert tweet here ..."
                                  value={this.state.body} onChange={this.handleChange}/>
                        <input type="submit" className="btn-sm" value="Submit" onClick={this.handleSubmit} />
                    </div>
                </form>
            </ItemTile>
        )
    }
}
export default ItemForm;