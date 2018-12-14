import React from 'react';

import "./header.css";

const Header = props => {
  return (
    {/* Standard button */}
    <Button>Default</Button>

    {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
    <Button bsStyle="primary">Primary</Button>
    <div className="header-bar">
      {props.title}
      <br/>{props.aprop}
    </div>
  )
}

export default Header;
