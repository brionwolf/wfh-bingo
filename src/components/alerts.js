import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faCheck } from '@fortawesome/free-solid-svg-icons';
import { slugify } from '../utils/helpers';

const Alert = (props) => {
  const handleClick = (e) => {
    e.preventDefault();
    const value = e.currentTarget.parentNode.getAttribute('data-value');
    const alertIndex = parseInt(
      e.currentTarget.parentNode.getAttribute('data-index'),
    );
    const choice =
      e.currentTarget.textContent.toLowerCase() == 'close'
        ? 'close'
        : 'confirm';
    props.handleClick({
      alertIndex: alertIndex,
      choice: choice,
      value: value,
    });
  };
  const fromTop = props.index * 3.3;

  return (
    <div
      data-index={props.index}
      data-type={props.type}
      data-value={props.value}
      className="alert"
      style={{ top: fromTop + 'em' }}
    >
      <div className="alert-content">{props.message}</div>
      {props.confirm && (
        <button onClick={handleClick}>
          <FontAwesomeIcon icon={faCheck} />
          <span className="sr-only">Confirm {props.message}</span>
        </button>
      )}
      {props.close && (
        <button onClick={handleClick}>
          <FontAwesomeIcon icon={faTimes} />
          <span className="sr-only">Close</span>
        </button>
      )}
    </div>
  );
};

export default function AlertList(props) {
  const handleClick = (alert) => {
    props.handleClick(alert);
  };

  const alertsList =
    props.alertsList.length <= 0
      ? []
      : props.alertsList.slice(0, 7).map((alert, i) => {
          const value = alert.value ? alert.value : slugify(alert.message);

          return (
            <Alert
              key={i}
              index={i}
              type={alert.type}
              value={value}
              message={alert.message}
              close={alert.close}
              confirm={alert.confirm}
              handleClick={handleClick}
            />
          );
        });

  return <div className="alert-list">{alertsList}</div>;
}
