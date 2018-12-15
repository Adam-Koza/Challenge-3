import React from 'react';

// CSS
import "./header.css";

// url strings
const ICON_URL = "../../images/carecoin_icon.png";

const Header = props => {
  return (
    <div className="header-bar">
      <img className="header-img" src={ICON_URL}/>
       &nbsp;{props.title}
    </div>
  )
}

export default Header;
