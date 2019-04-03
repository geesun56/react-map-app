import React, { Component } from 'react';
import {BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Home from "./components/Home"
import Info from "./components/Info"
import Error_page from "./components/Error_page"
import Navigation from "./components/Navigation"


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
        <Navigation/>

        <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/Home" component={Home} />
            <Route path="/Info" component={Info}/>
            <Route component = {Error_page}/>
        </Switch>

        </div>
      </BrowserRouter>

    );
  }
}

export default App;
