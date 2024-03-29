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
import NavHeader from './components/navHeader';
import Footer from './components/footer';
import Routes from './routes';

import "./App.css";

let donateKey = 0;
let redeemKey = 0;


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { balance: 0, web3: null, accounts: null, contract: null, items: [], donations: [], redemptions: [] };
    this.buyItem = this.buyItem.bind(this);
    this.donate = this.donate.bind(this);
  }

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

  buyItem = async (e, price, redeem) => {
    e.preventDefault();
    const { accounts, contract } = this.state;

    // Spend tokens.
    await contract.transfer(accounts[1], price, { from: accounts[0] });

    // Get the balance from the contract to prove it worked.
    const response = await contract.balanceOf(accounts[0]);

    // Update state with the result.
    this.setState({ balance: response.toNumber() });

    // Add redeemed item to transaction history.
    var joined = this.state.redemptions.concat({id: redeemKey, name: redeem});
    this.setState({ redemptions: joined });
    redeemKey++;

  };

  donate = async (e, reward, donation) => {
    e.preventDefault();
    const { accounts, contract } = this.state;

    // Spend tokens.
    await contract.mint(reward, { from: accounts[0] });

    // Get the balance from the contract to prove it worked.
    const response = await contract.balanceOf(accounts[0]);

    // Update state with the result.
    this.setState({ balance: response.toNumber() });

    // Add donated item to transaction history.
    var joined = this.state.donations.concat({id: donateKey, name: donation});
    this.setState({ donations: joined });
    donateKey++
  };

  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <Router>
        <div>
          <NavHeader />
          <Header title="CareCoin" />
          <div className="main-container">
            <NavHeader />
            <Routes
              balance={this.state.balance}
              buyItem={this.buyItem}
              donate={this.donate}
              donations={this.state.donations}
              redemptions={this.state.redemptions}
            />


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
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
