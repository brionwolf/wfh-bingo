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
          handleClick={handleClick}
          id={item.pk}
          index={i}
          isFreespace={props.freeSpace}
          isPressed={item.isPressed}
          isWin={item.isWin}
          key={item.pk}
          text="Free Space"
        />
      );
    } else {
      return (
        <BingoSquare
          handleClick={handleClick}
          id={item.pk}
          index={i}
          isPressed={item.isPressed}
          isWin={item.isWin}
          key={item.pk}
          text={item.text}
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
