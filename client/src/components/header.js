import React from 'react';

import "./header.css";

const Header = props => {
  return (
    <div className="header-bar">
      {props.title}
      <br/>{props.aprop}
    </div>
  )
}

export default Header;
