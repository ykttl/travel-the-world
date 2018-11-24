import React, { Component } from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";

export default class ApiMap extends Component {
  // constructor(props) {
  //   super(props);
  //   console.log(props);
  // }
  render() {
    const position = [this.props.lat, this.props.lon];
    console.log(position);
    const zoom = "3";
    return (
      <div>
        <p />
        {this.props.showMap && (
          <Map center={position} zoom={zoom}>
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </Map>
        )}
      </div>
    );
  }
}
