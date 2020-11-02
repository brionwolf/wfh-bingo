import React from 'react';
import BingoSquare from '../components/bingo-square.js';

export default function BingoCard(props) {

  const handleClick = (squareID) => {
    props.handleClick(squareID);
  }

  let bingoSquares = props.data.slice(0, 25).map((item, i) => {
    if (i === 12 && props.freeSpace) {
      // Make the center square a free space
      return <BingoSquare key={item.pk} index={i} id={item.pk} handleClick={handleClick} text="Free Space" isPressed={item.isPressed} />;
    } else {
      return <BingoSquare key={item.pk} index={i} id={item.pk} handleClick={handleClick} text={item.text} isPressed={item.isPressed} />;
    }
  });

  return (
    <div className="bingo-card-gutter">
      <div className="bingo-card" aria-label="Bingo Card">
        {bingoSquares}
      </div>
    </div>
  );
};
