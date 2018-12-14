import React from 'react';

// CSS
import "./titleTile.css";

const TitleTile = props => {
  return (
    <div className="title-container">
      <div>
        <h1>{props.subtitle}</h1>
      </div>

      <div>
        <h3>{props.tagline}</h3>
      </div>
    </div>
  )
}

export default TitleTile;
