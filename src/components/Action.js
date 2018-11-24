import React from "react";

const Action = props => (
  <div className="action_container">
    <button
      className="button"
      onClick={() => {
        props.getCountryName();
        props.changeButtonText();
      }}
    >
      {!props.stopButtonIsPressed ? <p>Stop!</p> : <p>Try Again? :D</p>}
    </button>
    <h2> {props.countryRoulette} </h2>
    {!props.stopButtonIsPressed ? <img src="img/chikyuugi.png" /> : <p />}
  </div>
);

export default Action;
