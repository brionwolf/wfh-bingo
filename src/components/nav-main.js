import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTh, faTimesCircle, faToggleOff, faToggleOn } from '@fortawesome/free-solid-svg-icons'

const newCard = <FontAwesomeIcon icon={faTh} />

export default function NavMain(props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const resetBoard = (e) => {
    e.preventDefault();
    props.passResetBoard();
  }

  const newBoard = (e) => {
    e.preventDefault();
    props.passNewBoard();
  }

  const menuToggle = (e) => {
    e.preventDefault();
    props.passMenuToggle();
  }

  const freeSpaceToggle = (e) => {
    e.preventDefault;
    props.passFreeSpaceToggle();
  }

  return (
    <header className="main-nav-gutter">
      <div className="main-nav">
        <div className="left-side-nav">
          <h1 className="brand"><a href="/"><span title="Work From Home" aria-label="Work From Home (WFH)">WFH</span> Bingo</a></h1>
        </div>
        <nav className="right-side-nav">
          <button className="menu-button" aria-label="toggle menu" aria-pressed={props.menu} onClick={menuToggle}>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
          <div className="nav-list" aria-hidden={!props.menu}>
            <a className="nav-item" href="#" onClick={freeSpaceToggle} aria-pressed={props.freeSpace}>
              {props.freeSpace == true ? <FontAwesomeIcon icon={faToggleOn} /> : <FontAwesomeIcon icon={faToggleOff} />}
              <span>&nbsp; Free Space</span>
            </a>
            <a className="nav-item" href="#" onClick={resetBoard}>
              <FontAwesomeIcon icon={faTimesCircle} />
              <span>&nbsp; Reset</span>
            </a>
            <a className="nav-item" href="#" onClick={newBoard}>
              <FontAwesomeIcon icon={faTh} />
              <span>&nbsp; New Card</span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};
