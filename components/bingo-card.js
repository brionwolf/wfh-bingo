import React from 'react';
import BingoSquare from '../components/bingo-square.js';

export default function BingoCard(props) {

  let bingoSquares = props.data.slice(0, 25).map((item, i) => {
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
