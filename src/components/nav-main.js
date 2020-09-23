import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTh, faTimesCircle } from '@fortawesome/free-solid-svg-icons'

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

  return (
    <header className="main-nav-gutter">
      <div className="main-nav">
        <div className="left-side-nav">
          <h1 className="brand"><a href="/"><span title="Work From Home" aria-label="Work From Home (WFH)">WFH</span> Bingo</a></h1>
        </div>
        <div className="right-side-nav">
          <a className="reset" href="#" onClick={resetBoard}>
            <FontAwesomeIcon icon={faTimesCircle} />
            <span>&nbsp; Reset</span>
          </a>
          <a className="button" href="#" onClick={newBoard}>
            <FontAwesomeIcon icon={faTh} />
            <span>&nbsp; New Card</span>
          </a>
        </div>
      </div>
    </header>
  );
};
