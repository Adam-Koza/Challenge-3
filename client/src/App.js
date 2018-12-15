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


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { balance: 0, web3: null, accounts: null, contract: null, items: [] };
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

  buyItem = async (e, price) => {
    e.preventDefault();
    const { accounts, contract } = this.state;

    // Spend tokens.
    await contract.transfer(accounts[1], price, { from: accounts[0] });

    // Get the balance from the contract to prove it worked.
    const response = await contract.balanceOf(accounts[0]);

    // Update state with the result.
    this.setState({ balance: response.toNumber() });
  };

  donate = async (e, reward) => {
    e.preventDefault();
    const { accounts, contract } = this.state;

    // Spend tokens.
    await contract.mint(reward, { from: accounts[0] });

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
          <NavHeader />
          <Header title="CareCoin" />
          <div className="main-container">
            <Routes balance={this.state.balance} buyItem={this.buyItem} donate={this.donate} />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
