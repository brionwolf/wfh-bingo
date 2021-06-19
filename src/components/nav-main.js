import React, { useRef } from 'react';
import useOutsideClick from '../utils/use-outside-click';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTh,
  faTimesCircle,
  faToggleOff,
  faToggleOn,
} from '@fortawesome/free-solid-svg-icons';

const newCard = <FontAwesomeIcon icon={faTh} />;

export default function NavMain(props) {
  const mainNavRef = useRef();

  const resetBoard = (e) => {
    e.preventDefault();
    props.passResetBoard();
  };

  const newBoard = (e) => {
    e.preventDefault();
    props.passNewBoard();
  };

  const menuToggle = (e) => {
    e.preventDefault();
    props.passMenuToggle();
  };

  const freeSpaceToggle = (e) => {
    e.preventDefault;
    props.passFreeSpaceToggle();
  };

  const freeSpaceLocToggle = (e) => {
    e.preventDefault;
    props.passFreeSpaceLocToggle();
  };

  useOutsideClick(mainNavRef, () => {
    if (props.menu) {
      props.passMenuToggle();
    }
  });

  return (
    <header className="main-nav-gutter">
      <div className="main-nav">
        <div className="left-side-nav">
          <h1 className="brand">
            <a href="/">
              <span title="Work From Home" aria-label="Work From Home (WFH)">
                WFH
              </span>{' '}
              Bingo
            </a>
          </h1>
        </div>
        <nav className="right-side-nav">
          <button
            className="menu-button"
            aria-label={props.menu ? 'Menu Open' : 'Menu'}
            aria-pressed={props.menu}
            onClick={menuToggle}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
          <div className="nav-list" ref={mainNavRef} aria-hidden={!props.menu}>
            <button
              className="nav-item"
              href="#"
              onClick={freeSpaceToggle}
              aria-pressed={props.freeSpace}
            >
              {props.freeSpace == true ? (
                <FontAwesomeIcon icon={faToggleOn} />
              ) : (
                <FontAwesomeIcon icon={faToggleOff} />
              )}
              <span aria-hidden="true">&nbsp; Free Space</span>
              <span className="sr-only">Toggle free space on bingo Card</span>
            </button>
            {props.freeSpace && (
              <button
                className="nav-item"
                href="#"
                onClick={freeSpaceLocToggle}
                aria-pressed={props.freeSpaceLoc == 12 ? false : true}
              >
                {props.freeSpaceLoc != 12 ? (
                  <FontAwesomeIcon icon={faToggleOn} />
                ) : (
                  <FontAwesomeIcon icon={faToggleOff} />
                )}
                <span aria-hidden="true">&nbsp; Random Free Space</span>
                <span className="sr-only">Randomly place the Free Space</span>
              </button>
            )}
            <button className="nav-item" href="#" onClick={resetBoard}>
              <FontAwesomeIcon icon={faTimesCircle} />
              <span aria-hidden="true">&nbsp; Reset</span>
              <span className="sr-only">Reset bingo Card squares</span>
            </button>
            <button className="nav-item" href="#" onClick={newBoard}>
              <FontAwesomeIcon icon={faTh} />
              <span aria-hidden="true">&nbsp; New Card</span>
              <span className="sr-only">Generate a new bingo card</span>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
