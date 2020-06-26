import React from 'react';

export default (props) => {
  return (
    <div className="bingo-square">
      <div className="bingo-square-body">
        <div className="bingo-square-content">
          <p>{props.text}</p>
        </div>
      </div>
    </div>
  );
};
