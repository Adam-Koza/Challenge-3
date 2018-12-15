import React from 'react';

import "./header.css";

const Header = props => {
  return (
    <div className="header-bar">
      <img className="header-img" src="../../images/carecoin_icon.png"/>
       &nbsp;{props.title}
    </div>
  )
}

export default Header;
