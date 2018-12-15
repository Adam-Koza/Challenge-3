import React, { Component } from "react";
import TokenContract from "./contracts/Token.json";
//import SimpleStorageContract from "./contracts/SimpleStorage.json";
import getWeb3 from "./utils/getWeb3";
import truffleContract from "truffle-contract";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button } from 'react-bootstrap';

// components
import Header from './components/header';
import TitleTile from './components/titleTile';
import HomePage from './components/homePage';
import Donation from './components/donation/donation';
import Profile from './components/profile/profile';
import Store from './components/store/store';
import NavHeader from './components/navHeader';

import "./App.css";

class App extends Component {
  state = { balance: 0, web3: null, accounts: null, contract: null };

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
         <Header title="CareCoin" />
         <div className="main-container">
          <Button bsStyle="primary">A test bootstrap button</Button>
           <br />
           Nav header:
           <NavHeader />

           <Route path="/" exact component={HomePage} />
           <Route path="/donation/" component={Donation} />
           <Route path="/store/" component={Store} />
           <Route path="/profile/" component={Profile} />

            {/*<h1>Good to Go!</h1>
            <p>Your Truffle Box is installed and ready.</p>
            <h2>Smart Contract Example</h2>
            <p>
            If your contracts compiled and migrated successfully, below will show
            a Balance of 10000 (by default).
            </p>
            <p>
            Try changing the value stored on <strong>line 40</strong> of App.js.
            </p>
            <div>Your balance is: {this.state.balance}</div>*/}
         </div>
        </div>
      </Router>
    );
  }
}

export default App;
