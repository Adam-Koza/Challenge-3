import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Button } from 'react-bootstrap';

// CSS
import "./homePage.css";

const HomePage = props => {
  return (
    <div class="home-container">
      <div class="home-title">
        <img src="../../public/images/carecoin.png"/>
        <h1>Welcome to <b>CareCoin</b> - a decentralized donation app!</h1>
      </div>
      <br />
      <div class="home-items col-7">
          <br />
          <p>
            <LinkContainer to="/donation/">
              <Button bsStyle="success" bsSize="large" block><h1>Donate and receive CareCoin tokens</h1></Button>
            </LinkContainer>
          </p>
          <br />
          <p>
            <LinkContainer to="/store/">
              <Button bsStyle="primary" bsSize="large" block><h1>Redeem CareCoin tokens at the Store</h1></Button>
            </LinkContainer>
          </p>
          <br />
          <p>
            <LinkContainer to="/profile/">
              <Button bsStyle="secondary" bsSize="large" block><h1>View your CareCoin profile</h1></Button>
            </LinkContainer>
          </p>

      </div>
    </div>
  )
}

export default HomePage;
