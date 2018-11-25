import React from "react";

const Action = props => (
  <div className="action_container">
    <button
      className="button"
      onClick={() => {
        props.stopRoulette();
        props.changeButtonText();
      }}
    >
      {!props.stopButtonIsPressed ? <p>Stop!</p> : <p>Try Again? :D</p>}
    </button>
    <h2> {props.countryNameOnRoulette} </h2>
    {!props.stopButtonIsPressed ? <img src="img/chikyuugi.png" /> : <p />}
  </div>
);

export default Action;
