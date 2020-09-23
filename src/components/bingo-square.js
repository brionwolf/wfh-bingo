import React, { useState } from 'react';

export default function BingoSquare(props) {

  const handleClick = (e) => {
    e.preventDefault();
    props.handleClick(e.currentTarget.dataset.index);
  }

  return (
    <a className="bingo-square" id={props.index} data-index={props.index} href="#" onClick={handleClick} role="button" aria-pressed={props.isPressed}>
      <div className="bingo-square-body">
        <div className="bingo-square-content">
          {props.text}
        </div>
      </div>
    </a>
  );
};
