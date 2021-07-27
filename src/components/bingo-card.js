import React from 'react';
import BingoSquare from './bingo-card-square.js';
import { randomSpace } from '../utils/helpers';

export default function BingoCard(props) {
  const handleClick = (squareID) => {
    props.handleClick(squareID);
  };

  let bingoSquares = props.data.slice(0, 25).map((item, i) => {
    if (i === props.freeSpaceLoc && props.freeSpace) {
      // Make the center square a free space
      return (
        <BingoSquare
          key={item.pk}
          index={i}
          id={item.pk}
          handleClick={handleClick}
          isFreespace={props.freeSpace}
          text="Free Space"
          isPressed={item.isPressed}
        />
      );
    } else {
      return (
        <BingoSquare
          key={item.pk}
          index={i}
          id={item.pk}
          handleClick={handleClick}
          text={item.text}
          isPressed={item.isPressed}
        />
      );
    }
  });

  return (
    <bingo-card aria-label="Bingo Card">
      <div className="cards-list">{bingoSquares}</div>
    </bingo-card>
  );
}
