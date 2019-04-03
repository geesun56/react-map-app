import React, { Component } from 'react';
//import USAMap from "../react-usa-map/src/index";
import USAMap from "react-usa-map";
import './Map.css';
import {Redirect, withRouter} from "react-router-dom";




class Map extends Component {
  /* mandatory */
  mapHandler = (event) => {
    this.props.history.push({
      pathname: '/Info',
      query_state_name: event.target.dataset.name,
      
    })
  };
 
  



  /* optional customization of filling per state and calling custom callbacks per state */
  statesCustomConfig = () => {
    return {
      
    }
  };

  render() {
    return (
      <div className="App">
        <USAMap customize={this.statesCustomConfig()} onClick={this.mapHandler} />
      </div>
    );
  }
}

 
export default withRouter(Map);

