import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTh, faTimesCircle } from '@fortawesome/free-solid-svg-icons'

const newCard = <FontAwesomeIcon icon={faTh} />



export default (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="main-nav-gutter">
      <div className="main-nav">
        <div className="left-side-nav">
          <h1 className="brand"><span title="Work From Home" aria-label="Work From Home (WFH)">WFH</span> Bingo</h1>
        </div>
        <div className="right-side-nav">
          <a className="reset" href="#">
            <FontAwesomeIcon icon={faTimesCircle} />
            <span>&nbsp; Reset</span>
          </a>
          <a className="button" href="#">
            <FontAwesomeIcon icon={faTh} />
            <span>&nbsp; New Card</span>
          </a>
        </div>
      </div>
    </div>

  );
};
