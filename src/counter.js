import React from "react";

const Counter = ({ counter, inc, dec, rnd, div }) => {
  return (
    <div className="jumbotron">
      <h2 id="counter">{counter}</h2>
      <button onClick={inc} id="inc" className="btn btn-primary btn-lg">
        INC
      </button>
      <button onClick={dec} id="dec" className="btn btn-primary btn-lg">
        DEC
      </button>
      <button onClick={rnd} id="rnd" className="btn btn-primary btn-lg">
        RAND
      </button>
      <button onClick={div} id="div" className="btn btn-primary btn-lg">
        DIV
      </button>
    </div>
  );
}

export default Counter;
