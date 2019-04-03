import React, { Component } from 'react';
import './Home.css';
import Map from "./Map";

const STATE_API = "https://gist.githubusercontent.com/jpriebe/d62a45e29f24e843c974/raw/b1d3066d245e742018bce56e41788ac7afa60e29/us_state_capitals.json";

class Home extends Component {
  render() {
    return (
      <div>
        <Map/>
      </div>
    );
  }
}

export default Home;
