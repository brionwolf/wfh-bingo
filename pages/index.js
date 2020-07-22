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

  return (
    <div>
      <Head>
        <title>WFH Bingo</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <NavMain passResetBoard={handleResetBoard} passNewBoard={handleNewBoard} />
      <BingoCard data={squares} />
      <Footer />
    </div>
  );
}
