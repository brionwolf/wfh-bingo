import React, { useState } from 'react';

export default function BingoSquare(props) {
  const handleClick = (e) => {
    e.preventDefault();
    props.handleClick(e.currentTarget.dataset.index);
  };

  return (
    <button
      className="card-square"
      data-freespace={props.isFreespace}
      id={props.index}
      data-index={props.index}
      href="#"
      onClick={handleClick}
      aria-pressed={props.isPressed}
    >
      <span className="card-square-content">{props.text}</span>
    </button>
  );
}
