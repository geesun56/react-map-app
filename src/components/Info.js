import React, { Component } from 'react';
import STATE_INFO from './state_info'
import WEATHER_INFO from './weather_info'
import './Info.css';
import capital_data from './us_state_capitals.json';

const STATE_API = "https://gist.githubusercontent.com/jpriebe/d62a45e29f24e843c974/raw/b1d3066d245e742018bce56e41788ac7afa60e29/us_state_capitals.json";
const state_number = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"];
const was_dc = {name: "Washington D.C", capital: "Washington D.C", lat:38.9072, long:-77.0369}
const WEATHER = "https://api.darksky.net/forecast/"
const MY_KEY = "304f1a4812f6db90ba84fe071f4d73e1"
const proxy = "https://cors-anywhere.herokuapp.com/"


class Info extends Component {


state = {}

componentWillMount(){
  this._getData()
}

 _getData = async() =>{
  const capital_Data = await this._callApi(STATE_API)  // will wait until the callApi function is finished
  const capitalArray = Object.keys(capital_Data).map(i => capital_Data[i])
  const idx = this.stateQueryNum(this.props.history.location.query_state_name)
  const WEATHER_API = WEATHER + MY_KEY+"/"+capitalArray[idx].lat+',' + capitalArray[idx].long
  const weather_Data = await this._callApi(proxy+WEATHER_API)
  
  if(idx ==50){
    this.setState({ Capitals : was_dc})
  }else{
        this.setState({
          Capitals : capitalArray[idx]
        })
      }

  this.setState({Weather_data: weather_Data})    
}

_callApi = (API) => {
  return fetch(API)
  .then(response => response.json())
  .then(json => json)
  .catch(err => console.log(err))
}

stateQueryNum = (name) => {
  var i = 0
  var state_num = 50;
  state_number.map(element => {
  if(name == element){
    state_num = i;
  }else{
        i++}
});
/* number 50 is for Washington DC*/
  return state_num;
};

__renderPages= () => {
  const my_state = this.props.history.location.query_state_name
  console.log(this.state.Capitals)
  console.log(this.state.Weather_data)
  return(
    <div>
      <STATE_INFO data = {this.state.Capitals}/>
      <WEATHER_INFO data = {this.state.Weather_data}/>
      
    </div>
  );
}


  render() {
    
    return (
      <div className="_content">
      {this.state.Capitals && this.state.Weather_data ? this.__renderPages() : ''}
      </div>
    );
    
  }
}

export default Info;

//const query_state = this.props.history.location.query_state;
