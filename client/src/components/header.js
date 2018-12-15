import React from 'react';

// CSS
import "./header.css";

const Header = props => {
  return (
    <div className="header-bar">
      <img src="../../public/images/carecoin_icon.png"/>{props.title}
    </div>
  )
}

export default Header;
