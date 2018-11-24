import React from "react";

const CountryName = props => (
  <div className="countryName_container">
    {props.countryName !== "" && <h1>{props.countryName}</h1>}
  </div>
);

export default CountryName;
