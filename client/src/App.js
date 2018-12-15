import React, { Component } from "react";
import TokenContract from "./contracts/Token.json";
//import SimpleStorageContract from "./contracts/SimpleStorage.json";
import getWeb3 from "./utils/getWeb3";
import truffleContract from "truffle-contract";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ItemContainer from './containers/store/itemContainer';

// components
import Header from './components/header';
import TitleTile from './components/titleTile';

import "./App.css";

// temp router stuf
const Index = () => <h2>Home</h2>;
const Donation = () => <h2>Donate and receive CareCoins!</h2>;
const Store = () => <div><h2>Redeem CareCoins in our Store!</h2><div><ItemContainer /></div></div>;
const Profile = () => <h2>View your awesome profile!</h2>;

class App extends Component {
  state = { balance: 0, web3: null, accounts: null, contract: null, items: [] };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const Contract = truffleContract(TokenContract);
      Contract.setProvider(web3.currentProvider);
      const instance = await Contract.deployed();

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts, contract: instance }, this.runExample);
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`
      );
      console.log(error);
    }
  };

  runExample = async () => {
    const { accounts, contract } = this.state;

    // Get balance of user account.
    // await contract.balanceOf(accounts[0]);//, { from: accounts[0] });

    // Get the balance from the contract to prove it worked.
    const response = await contract.balanceOf(accounts[0]);

    // Update state with the result.
    this.setState({ balance: response.toNumber() });
  };

  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <Router>
        <div>
          <h1>Good to Go!</h1>
          <p>Your Truffle Box is installed and ready.</p>
          <h2>Smart Contract Example</h2>
          <p>
            If your contracts compiled and migrated successfully, below will show
            a Balance of 10000 (by default).
        </p>
          <p>
            Try changing the value stored on <strong>line 40</strong> of App.js.
        </p>
          <div>Your balance is: {this.state.balance}</div>

          {/* Actual App start */}
          <Header title="CareCoin" />
          <div className="main-container">
            <br />
            router stuff:
         <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/donation/">Donation</Link>
                </li>
                <li>
                  <Link to="/store/">Store</Link>
                </li>
                <li>
                  <Link to="/profile/">Profile</Link>
                </li>
              </ul>
            </nav>

            <Route path="/" exact component={Index} />
            <Route path="/donation/" component={Donation} />
            <Route path="/store/" component={Store} />
            <Route path="/profile/" component={Profile} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
