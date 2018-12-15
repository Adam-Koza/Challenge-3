import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Button } from 'react-bootstrap';

// CSS
import "./homePage.css";

// url strings
const IMAGE_URL = "../../images/carecoin_dark.png";

const HomePage = props => {
  return (
    <div class="home-container">
      <div class="home-title">
        <h1>Welcome To</h1>
        <img src={IMAGE_URL} className="banner-image"/>
        <h2>A Decentralized Donation App!</h2>
      </div>
      <br />
      <div class="home-items col-5">
          <br />
          <p>
            <LinkContainer to="/donation/">
              <Button bsStyle="success" bsSize="large" block><h3>Donate and receive CareCoin tokens</h3></Button>
            </LinkContainer>
          </p>
          <br />
          <p>
            <LinkContainer to="/store/">
              <Button bsStyle="primary" bsSize="large" block><h3>Redeem CareCoin tokens in our Store</h3></Button>
            </LinkContainer>
          </p>
          <br />
          <p>
            <LinkContainer to="/profile/">
              <Button bsStyle="info" bsSize="large" block><h3>View your CareCoin profile</h3></Button>
            </LinkContainer>
          </p>

      </div>
    </div>
  )
}

export default HomePage;
