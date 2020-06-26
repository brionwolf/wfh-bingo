import React, { useState } from "react";

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
          <a className="reset" href="#">Reset</a>
          <a className="button" href="#">New Board</a>
        </div>
      </div>
    </div>

  );
};
