import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faCheck } from '@fortawesome/free-solid-svg-icons'

const Alert = (props) => {

  const handleClick = (e) => {
    e.preventDefault();
    const alertIndex = parseInt(e.currentTarget.parentNode.getAttribute('data-index'));
    const choice = e.currentTarget.textContent.toLowerCase() == "close" ? "close" : "confirm";
    props.handleClick({ alertIndex: alertIndex, choice: choice });
  }

  const fromTop = (props.index * 3.3);

  return (
    <div data-index={props.index} className="alert" style={{ top: fromTop + "em" }} data-type={props.type}>
      <div className="alert-content">
        {props.message}
      </div>
      {props.confirm &&
        <button onClick={handleClick}>
          <FontAwesomeIcon icon={faCheck} />
          <span className="sr-only">Confirm {props.message}</span>
        </button>
      }
      {props.dismiss &&
        <button onClick={handleClick}>
          <FontAwesomeIcon icon={faTimes} />
          <span className="sr-only">Close</span>
        </button>
      }
    </div>
  );
}

export default function AlertList(props) {

  const handleClick = (alert) => {
    props.handleClick(alert);
  }

  const alertsList = props.alertsList.length <= 0 ? [] : props.alertsList.slice(0, 7).map((alert, i) => {
    return (
      <Alert key={i} index={i} type={alert.type} message={alert.message} dismiss={alert.dismiss} confirm={alert.confirm} handleClick={handleClick} />
    )
  });

  return (
    <div className="alert-list">
      {alertsList}
    </div>
  );
};
