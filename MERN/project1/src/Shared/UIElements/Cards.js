import React from "react";
import './Card.css'

const Cards = (props) => {
  return (
    <div className={`Card ${props.className}`} style={props.style}>
      {props.children}
    </div>
  );
};

export default Cards;
