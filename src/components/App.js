import React, { Component } from "react";
import Header from "./Header";
import Action from "./Action";
import Pictures from "./Pictures";
import ApiMap from "./ApiMap";
import Flag from "./Flag";
import WikiInfo from "./WikiInfo";
import CountryName from "./CountryName";
import countryListJSON from "../list_of_countries";
import keys from "../keys";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rouletteIsRunning: true,
      countryNameOnRoulette: "",
      countryName: "",
      countryCode: "",
      wikipediaText: "",
      stopButtonIsPressed: false,
      wikiError: false,
      flickrPhotos: [],
      showMap: false,
      lat: "",
      lon: ""
    };
  }
  componentDidMount = () => {
    this.countryRoulette();
  };
  // randomly display a country name like a roulette
  countryRoulette = () => {
    let randomCountryName = "";
    const roulette = () => {
      setTimeout(() => {
        randomCountryName = "";
        if (this.state.rouletteIsRunning === false) {
          return;
        }
        randomCountryName =
          countryListJSON[Math.floor(Math.random() * 234)].name;
        this.setState({ countryNameOnRoulette: randomCountryName });
        roulette();
      }, 80);
    };
    roulette();
  };
  stopRoulette = () => {
    if (this.state.rouletteIsRunning === false) {
      this.startRouletteAgain();
      return;
    }
    this.setState({
      rouletteIsRunning: false,
      countryNameOnRoulette: "",
      stopButtonIsPressed: false
    });
    this.setDataAndCallAPIs();
  };
  startRouletteAgain = () => {
    this.setState({
      // init state
      rouletteIsRunning: true,
      countryName: "",
      wikipediaText: "",
      countryCode: "",
      wikiError: false,
      flickrPhotos: [],
      showMap: false,
      lat: "",
      lon: ""
    });
    this.countryRoulette();
  };
  setDataAndCallAPIs = () => {
    // find data matching to roulette from country list
    const countryData = countryListJSON.find(
      listItem => listItem.name === this.state.countryNameOnRoulette
    );
    this.setState(
      {
        countryName: countryData.name,
        countryCode: countryData.code
      },
      () => {
        this.getCountryInfo();
        this.getGeocode();
        this.getPictures();
      }
    );
  };
  // wikipedia API
  getCountryInfo = async () => {
    const countryName = this.state.countryName;
    // request the first two sentences of wiki page about the country
    const response = await fetch(
      `https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&format=json&search="${countryName}"&limit=2`
    );
    const JSON = await response.json();
    if (JSON[2][0] === "" && JSON[2][1] === "") {
      this.setState({
        wikiError: true,
        wikipediaText: ""
      });
    }
    this.setState({
      wikipediaText: JSON[2]
    });
  };
  // flickr API
  getPictures = async () => {
    const countryName = this.state.countryName;
    const response = await fetch(
      `https://api.flickr.com/services/rest?api_key=${
        keys.flickrAPI
      }&method=flickr.photos.search&format=json&text=${countryName}&extras=url_h&per_page=20&nojsoncallback=1&content_type=1&sort=interestingness-desc`
    );
    const JSON = await response.json();
    const filteredJSON = JSON.photos.photo.filter(photo => photo.url_h); // remove photo without img URL
    const photoArray = [];
    filteredJSON.forEach(photo => photoArray.push(photo.url_h));
    this.setState({ flickrPhotos: photoArray });
  };
  // nominatim API to get longitude and latitude for map
  getGeocode = async () => {
    const countryName = this.state.countryName;
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search/${countryName}?format=json`
    );
    const JSON = await response.json();
    this.setState({ showMap: true, lat: JSON[0].lat, lon: JSON[0].lon });
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
            countryNameOnRoulette={this.state.countryNameOnRoulette}
            stopRoulette={this.stopRoulette}
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
          <Pictures flickrPhotos={this.state.flickrPhotos} />
        </div>
      </div>
    );
  }
}
