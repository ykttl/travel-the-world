import React from "react";

const WikiInfo = props => (
  <div className="wikiText">
    {props.wikiError ? (
      <p>There is no wikipedia info. please try again. </p>
    ) : (
      <p>{props.wikipediaText}</p>
    )}
  </div>
);

export default WikiInfo;
