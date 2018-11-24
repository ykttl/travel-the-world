import React from "react";

const Flag = props => {
  let countryCode = props.countryCode;
  let url = `https://www.countryflags.io/${countryCode}/flat/64.png`;
  if (!countryCode) {
    url = "";
  }
  return (
    <div className="flag">{props.countryCode ? <img src={url} /> : <p />}</div>
  );
};

export default Flag;
