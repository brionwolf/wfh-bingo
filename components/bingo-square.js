import React from 'react';

export default function BingoSquare(props) {
  let handleClick = (e) => {
    e.preventDefault();
    let self = e.currentTarget;
    let isPressed = self.getAttribute('aria-pressed');
    isPressed === "true" ? self.setAttribute('aria-pressed', 'false') : self.setAttribute('aria-pressed', 'true');
  }

  return (
    <a className="bingo-square" href="#" onClick={handleClick} role="button" aria-pressed="false">
      <div className="bingo-square-body">
        <div className="bingo-square-content">
          <p>{props.text}</p>
        </div>
      </div>
    </a>
  );
};
