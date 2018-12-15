import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// CSS
import "./navHeader.css";

const NavHeader = props => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">CareCoin</a>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/donation/" className="nav-link">Donation</Link>
          </li>
          <li className="nav-item">
            <Link to="/store/" className="nav-link">Store</Link>
          </li>
          <li className="nav-item">
            <Link to="/profile/" className="nav-link">Profile</Link>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" >Search</button>
        </form>
      </div>
    </nav>
  )
}

export default NavHeader;
