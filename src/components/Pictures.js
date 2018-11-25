import React, { Component } from "react";
import Masonry from "react-masonry-component";

export default class Pictures extends Component {
  render() {
    const options = {
      transitionDuration: 200
    };
    return (
      <div className="pictures">
        <Masonry options={options}>
          {this.props.flickrPhotos &&
            this.props.flickrPhotos.map(x => <img src={x} className="item" />)}
        </Masonry>
      </div>
    );
  }
}
