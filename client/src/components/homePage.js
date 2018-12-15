import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Button } from 'react-bootstrap';

// CSS
import "./homePage.css";

const HomePage = props => {
  return (
    <div class="home-container">
      <div class="home-title">
        <h1>Welcome to CareCoin - decentralized donation app!</h1>
      </div>
      <br />
      <div class="home-items">
          <br />
          <p>
            <h3>Donate and receive CareCoin tokens:</h3>
            <LinkContainer to="/donation/">
              <Button bsStyle="success" bsSize="large">Donation</Button>
            </LinkContainer>
          </p>
          <br />
          <p>
            <h3>Redeem CareCoin tokens:</h3>
            <LinkContainer to="/store/">
              <Button bsStyle="primary" bsSize="large">Store</Button>
            </LinkContainer>
          </p>
          <br />
          <p>
            <h3>View your profile:</h3>
            <LinkContainer to="/profile/">
              <Button bsStyle="info" bsSize="large">Profile</Button>
            </LinkContainer>
          </p>

      </div>
    </div>
  )
}

export default HomePage;
