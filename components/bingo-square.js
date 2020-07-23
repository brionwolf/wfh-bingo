import React, { useState } from 'react';

export default function BingoSquare(props) {

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setIsClicked(isClicked => !!isClicked ? isClicked = false : isClicked = true);
  }

  return (
    <a className="bingo-square" href="#" onClick={handleClick} role="button" aria-pressed={isClicked}>
      <div className="bingo-square-body">
        <div className="bingo-square-content">
          <p>{props.text}</p>
        </div>
      </div>
    </a>
  );
};
