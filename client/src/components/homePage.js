import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Button } from 'react-bootstrap';

// CSS
import "./homePage.css";

// url strings
const IMAGE_URL = "../../images/carecoin.png";

const HomePage = props => {
  return (
    <div class="home-container">
      <img src={IMAGE_URL} className="banner-image"/>
      <div class="home-title">
        <h1>Welcome to CareCoin - decentralized donation app!</h1>
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
              <Button bsStyle="primary" bsSize="large" block><h1>Redeem CareCoin tokens in our Store</h1></Button>
            </LinkContainer>
          </p>
          <br />
          <p>
            <LinkContainer to="/profile/">
              <Button bsStyle="info" bsSize="large" block><h1>View your CoinCare profile</h1></Button>
            </LinkContainer>
          </p>

      </div>
    </div>
  )
}

export default HomePage;
