import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import NavMain from '../components/nav-main.js';
import Footer from '../components/footer.js';
import BingoCard from '../components/bingo-card.js';
import Alerts from '../components/alerts.js';
import data from '../data/data.json';
import { faFileSignature } from '@fortawesome/free-solid-svg-icons';

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

  const [squares, setSquares] = useState(data);
  const [alertsList, setAlertsList] = useState([]);
  const [winState, setWinState] = useState(false);

  // Shuffle squares on load.
  useEffect(() => {
    setSquares(squares => shuffle(squares));
    // setAlertsList(alertsList => alertsList.concat(alertsListTest));
  }, []);

  useEffect(() => {
    checkWinner(squares);
  }, [squares]);

  useEffect(() => {
    if (winState) {
      setAlertsList(alertsList => alertsList.concat([{ type: "success", message: "You win!" }]));
    }
  }, [winState]);

  const checkWinner = (squares) => {
    const winMatrix = [
      [0, 1, 2, 3, 4],
      [5, 6, 7, 8, 9],
      [10, 11, 12, 13, 14],
      [15, 16, 17, 18, 19],
      [20, 21, 22, 23, 24],
      [0, 5, 10, 15, 20],
      [1, 6, 11, 16, 21],
      [2, 7, 12, 17, 22],
      [3, 8, 13, 18, 23],
      [4, 9, 14, 19, 24],
      [0, 6, 12, 18, 24],
      [4, 8, 12, 16, 20]
    ];

    for (let i = 0; i < winMatrix.length; i++) {
      const [a, b, c, d, e] = winMatrix[i];
      if (squares[a].isPressed && squares[b].isPressed && squares[c].isPressed && squares[d].isPressed && squares[e].isPressed) {
        return setWinState(winState => winState = true);
      }
    }

    return null;
  }

  const handleNewBoard = () => {
    setSquares(squares => shuffle(squares));

    if (alertsList.length > 0) {
      setAlertsList(alertsList => alertsList = []);
    }
  }

  const handleResetBoard = () => {
    setSquares(squares => squares.map(square => {
      square.isPressed = false;
      return square;
    }));

    if (alertsList.length > 0) {
      setAlertsList(alertsList => alertsList = []);
    }
  }

  const handleClick = (squareIndex) => {
    setSquares(squares => squares.map((square, i) => {
      if (i == parseInt(squareIndex)) {
        !!square.isPressed ? square.isPressed = false : square.isPressed = true;
      }
      return square;
    }));
  }

  const handleAlertClick = (alert) => {
    for (let i = 0; i > alertsListTest.length; i++) {
      if (alertsListTest[i] === alert.alertIndex) {
        console.log('alert clicked:', alertsListTest[i]);
      }
    }
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
        <Alerts alertsList={alertsList} handleClick={handleAlertClick} />
        <BingoCard data={squares} handleClick={handleClick} />
      </main>
      <Footer />
    </>
  );
}
