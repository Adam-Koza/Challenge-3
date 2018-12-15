import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// CSS
import "./navHeader.css";

const NavHeader = props => {
  return (
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
  )
}

export default NavHeader;
