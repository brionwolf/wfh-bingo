import React, { useState, useEffect } from 'react';
import './styles/main.css';
import Header from './components/header.js';
import Footer from './components/footer.js';
import BingoCard from './components/bingo-card.js';
import Alerts from './components/alerts.js';
import data from '../data/data.json';
import { shuffle, randomSpace } from './utils/helpers';

const root = document.getElementById('root');

const App = () => {
  const [squares, setSquares] = useState(data);
  const [alertsList, setAlertsList] = useState([]);
  const [win, setWin] = useState(false);
  const [menu, setMenu] = useState(false);
  const [freeSpace, setFreeSpace] = useState(true);
  const [freeSpaceLoc, setFreeSpaceLoc] = useState(12);

  // Shuffle squares on load.
  useEffect(() => {
    setSquares((squares) => shuffle(squares));
  }, []);

  // Check for a winner
  useEffect(() => {
    checkWinner(squares);
  }, [squares]);

  useEffect(() => {
    if (win) {
      setAlertsList((alertsList) =>
        alertsList.concat({
          type: 'success',
          message: 'You win! Play again?',
          confirm: true,
          close: true,
        }),
      );
    }
  }, [win]);

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
      [4, 8, 12, 16, 20],
    ];

    for (let i = 0; i < winMatrix.length; i++) {
      const [a, b, c, d, e] = winMatrix[i];
      if (
        squares[a].isPressed &&
        squares[b].isPressed &&
        squares[c].isPressed &&
        squares[d].isPressed &&
        squares[e].isPressed
      ) {
        return setWin((win) => (win = true));
      }
    }

    return null;
  };

  const handleNewBoard = () => {
    setSquares((squares) => shuffle(squares));

    if (win) {
      setWin((win) => (win = false));
    }

    if (alertsList.length > 0) {
      setAlertsList((alertsList) => (alertsList = []));
    }
  };

  const handleResetBoard = () => {
    setSquares((squares) =>
      squares.map((square) => {
        square.isPressed = false;
        return square;
      }),
    );

    if (win) {
      setWin((win) => (win = false));
    }

    if (alertsList.length > 0) {
      setAlertsList((alertsList) => (alertsList = []));
    }
  };

  const handleClick = (squareIndex) => {
    setSquares((squares) =>
      squares.map((square, i) => {
        if (i == parseInt(squareIndex)) {
          !!square.isPressed
            ? (square.isPressed = false)
            : (square.isPressed = true);
        }
        return square;
      }),
    );
  };

  const handleYouWonAlert = (alert) => {
    alert.choice == 'close'
      ? setAlertsList((alertsList) => (alertsList = []))
      : handleNewBoard();
  };

  const handleAlertClick = (alert) => {
    if (alert.value == 'you-win-play-again') {
      handleYouWonAlert(alert);
    }
  };

  const handleMenuToggle = () => {
    menu == true
      ? setMenu((menu) => (menu = false))
      : setMenu((menu) => (menu = true));
  };

  const handleFreeSpaceToggle = () => {
    if (freeSpace) {
      setFreeSpace((freeSpace) => (freeSpace = false));
      setFreeSpaceLoc((freeSpaceLoc) => (freeSpaceLoc = 12));
    } else {
      setFreeSpace((freeSpace) => (freeSpace = true));
    }
  };

  const handleFreeSpaceLocToggle = () => {
    freeSpaceLoc == 12
      ? setFreeSpaceLoc((freeSpaceLoc) => (freeSpaceLoc = randomSpace(25)))
      : setFreeSpaceLoc((freeSpaceLoc) => (freeSpaceLoc = 12));
  };

  return (
    <>
      <a href="#0" data-role="skip-link" className="sr-only">
        Skip to Bingo Card
      </a>
      <Header
        freeSpace={freeSpace}
        freeSpaceLoc={freeSpaceLoc}
        menu={menu}
        passResetBoard={handleResetBoard}
        passNewBoard={handleNewBoard}
        passMenuToggle={handleMenuToggle}
        passFreeSpaceToggle={handleFreeSpaceToggle}
        passFreeSpaceLocToggle={handleFreeSpaceLocToggle}
      />
      <main id="main">
        <Alerts alertsList={alertsList} handleClick={handleAlertClick} />
        <BingoCard
          data={squares}
          freeSpace={freeSpace}
          freeSpaceLoc={freeSpaceLoc}
          handleClick={handleClick}
        />
      </main>
      <Footer />
    </>
  );
};

export default App;
