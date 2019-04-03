import React, { Component } from 'react';
import './weather_info.css';



class WEATHER_INFO extends Component {
    
  render() {

    
    
   
    console.log(this.props.data)
    return (
        
      <div class = "weather-box">
        <h1>WEATHER INFORMATION</h1> 
        <ul>
            <li>Today's weather: {this.props.data.currently.summary}</li>
            <li>Current Temperature: {this.props.data.currently.temperature}</li>
            <li>Humidity: {this.props.data.currently.humidity}</li>
            <li>Visibility: {this.props.data.currently.visibility}</li>
            <li>Wind speed: {this.props.data.currently.windSpeed} km/hours</li>
            <li>Ozone: {this.props.data.currently.ozone}</li> 
        </ul>
      </div>
    );
  }
}

export default WEATHER_INFO;

