import React from 'react';

export default (props) => {
  return (
    <div className={`col-2 my-0 mx-0 py-0 px-0 ${props.className}`}>
      <style jsx>{`
        .card {
          position: relative;
          border-radius: 0;
          width: 100%;
        }

        .card:after {
          content: "";
          display: block;
          padding-bottom: 100%;
        }

        .card-body {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        .card-content {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 80%;
        }
      `}</style>

      <div className="card text-center">
        <div className="card-body">
          <div className="card-content">
            <div className="card-text font-weight-bold">{props.title}</div>
            <p className="card-text">{props.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
