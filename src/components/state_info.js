import React, { Component } from 'react';
import './state_info.css';


class STATE_INFO extends Component {
  render() {
    return (
      <div class = "state-box">
        <h1>STATE INFORMATION</h1>  
          <ul>
            <li>State: {this.props.data.name}</li>
            <li>City: {this.props.data.capital}</li>
            <li>Latitude: {this.props.data.lat}</li>
            <li>Longitude: {this.props.data.long}</li>
          </ul>
       
      </div>
    );
  }
}

export default STATE_INFO;

