import React, { Component } from "react";
import Header from "./Header";
import Action from "./Action";
import Pictures from "./Pictures";
import ApiMap from "./ApiMap";
import Flag from "./Flag";
import WikiInfo from "./WikiInfo";
import CountryName from "./CountryName";
import List from "../list_of_countries";
import keys from "../keys";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rouletteIsRunning: true,
      countryRoulette: "",
      countryName: "",
      countryCode: "",
      wikipediaText: "",
      stopButtonIsPressed: false,
      wikiError: false,
      imgURL: "",
      showMap: false,
      lat: "",
      lon: ""
    };
  }
  countryRoulette = () => {
    let result = [];
    const callingCountries = () => {
      setTimeout(() => {
        result = [];
        if (this.state.rouletteIsRunning === false) {
          return;
        }
        result += List[Math.floor(Math.random() * 234)].name;
        this.setState({ countryRoulette: result });

        callingCountries();
      }, 80);
    };
    callingCountries();
  };
  componentDidMount() {
    this.countryRoulette();
  }
  getCountryName = () => {
    if (this.state.rouletteIsRunning === false) {
      this.setState({
        rouletteIsRunning: true,
        countryName: "",
        wikipediaText: "",
        countryCode: "",
        wikiError: false,
        imgURL: [],
        showMap: false,
        lat: "",
        lon: ""
      });
      this.countryRoulette();
      return;
    }
    this.setState(() => ({
      rouletteIsRunning: false,
      countryRoulette: "",
      stopButtonIsPressed: false
    }));

    const countryData = List.find(
      elem => elem.name === this.state.countryRoulette
    );
    const countryName = countryData.name;
    const countryCode = countryData.code;
    this.setState(
      {
        countryName: countryName,
        countryCode: countryCode
      },
      () => {
        this.getCountryInfo();
        this.getGeocode();
        this.getPictures();
      }
    );
  };
  getCountryInfo = async () => {
    const countryName = this.state.countryName;
    const response = await fetch(
      `https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&format=json&search="${countryName}"&limit=2`
    );
    const json = await response.json();
    if (json[2][0] === "") {
      this.setState({
        wikiError: true,
        wikipediaText: ""
      });
    }
    this.setState({
      wikipediaText: json[2]
    });
  };
  getPictures = async () => {
    const countryName = this.state.countryName;
    const response1 = await fetch(
      `https://api.flickr.com/services/rest?api_key=${
        keys.flickerAPI
      }&method=flickr.photos.search&format=json&text=${countryName}&extras=url_h&per_page=20&nojsoncallback=1&content_type=1&sort=interestingness-desc`
    );
    const json1 = await response1.json();
    const photoArray = json1.photos.photo.filter(x => x.url_h);
    const array = [];
    photoArray.forEach(x => array.push(x.url_h));
    this.setState({ imgURL: array });
  };
  getGeocode = async () => {
    const countryName = this.state.countryName;
    console.log(countryName);
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search/${countryName}?format=json`
    );
    const json = await response.json();
    console.log(json);
    const lat = json[0].lat;
    const lon = json[0].lon;
    console.log(lat);

    this.setState({ showMap: true, lat: lat, lon: lon });
  };
  changeButtonText = () => {
    this.setState(prevState => ({
      stopButtonIsPressed: !prevState.stopButtonIsPressed
    }));
  };
  render() {
    return (
      <div>
        <div className="wrapper">
          <Header />
          <Action
            countryRoulette={this.state.countryRoulette}
            getCountryName={this.getCountryName}
            stopButtonIsPressed={this.state.stopButtonIsPressed}
            changeButtonText={this.changeButtonText}
          />
          <CountryName countryName={this.state.countryName} />
          {this.state.stopButtonIsPressed && (
            <div className="box_container">
              <div className="box_left">
                <Flag countryCode={this.state.countryCode} />
                <WikiInfo
                  wikipediaText={this.state.wikipediaText}
                  wikiError={this.state.wikiError}
                />
              </div>
              <div className="box_right">
                <ApiMap
                  showMap={this.state.showMap}
                  lat={this.state.lat}
                  lon={this.state.lon}
                />
              </div>
            </div>
          )}
          <Pictures imgURL={this.state.imgURL} />
        </div>
      </div>
    );
  }
}
