import React, { Component } from "react";
import SimpleStorageContract from "./contracts/SimpleStorage.json";
import getWeb3 from "./utils/getWeb3";
import truffleContract from "truffle-contract";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// components
import Header from './components/header';
import TitleTile from './components/titleTile';

import "./App.css";

// temp router stuf
const Index = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Users = () => <h2>Users</h2>;

class App extends Component {
  state = { storageValue: 0, web3: null, accounts: null, contract: null };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const Contract = truffleContract(SimpleStorageContract);
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

    // Stores a given value, 5 by default.
    await contract.set(5, { from: accounts[0] });

    // Get the value from the contract to prove it worked.
    const response = await contract.get();

    // Update state with the result.
    this.setState({ storageValue: response.toNumber() });
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
         a stored value of 5 (by default).
       </p>
       <p>
         Try changing the value stored on <strong>line 40</strong> of App.js.
       </p>
       <div>The stored value is: {this.state.storageValue}</div>

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
               <Link to="/about/">About</Link>
             </li>
             <li>
               <Link to="/users/">Users</Link>
             </li>
           </ul>
         </nav>

         <Route path="/" exact component={Index} />
         <Route path="/about/" component={About} />
         <Route path="/users/" component={Users} />
       </div>
     </div>
 </Router>

    );
  }
}

export default App;
