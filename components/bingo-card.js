import React from 'react';
import BingoSquare from '../components/bingo-square.js';

export default (props) => {

  let squareContent = props.data;

  for (let i = squareContent.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i)
    const temp = squareContent[i]
    squareContent[i] = squareContent[j]
    squareContent[j] = temp
  }

  let bingoSquares = squareContent.slice(0, 25).map((item, i) => {
    if (i === 12) {
      // Make the center square a free space
      return <BingoSquare key={item.pk} text="Free Space" />;
    } else {
      return <BingoSquare key={item.pk} text={item.text} />;
    }
  });

  return (
    <div className="bingo-card-gutter">
      <div className="bingo-card">
        {bingoSquares}
      </div>
    </div>
  );
};
