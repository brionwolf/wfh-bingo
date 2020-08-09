import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import NavMain from '../components/nav-main.js';
import Footer from '../components/footer.js';
import BingoCard from '../components/bingo-card.js';
import data from '../data/data.json';

export default function Index() {

  const shuffle = (array) => {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[currentIndex].isPressed = false;
      array[randomIndex] = temporaryValue;
    }

    return array.slice();
  }

  const [squares, setSquares] = useState(() => {
    return shuffle(data);
  });

  const handleResetBoard = () => {
    console.log("Unclick all bingo squares");
  }

  const handleNewBoard = () => {
    setSquares(squares => shuffle(squares));
  }

  const handleClick = (squareIndex) => {
    const index = parseInt(squareIndex);
    const bingoSquares = squares.slice(0);
    return !!bingoSquares[index].isPressed ? bingoSquares[index].isPressed = false : bingoSquares[index].isPressed = true;
  }

  return (
    <>
      <Head>
        <title>WFH Bingo</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <a href="#0" data-role="skip-link" className="sr-only">Skip to Bingo Card</a>
      <NavMain passResetBoard={handleResetBoard} passNewBoard={handleNewBoard} />
      <main id="main">
        <BingoCard data={squares} handleClick={handleClick} />
      </main>
      <Footer />
    </>
  );
}
