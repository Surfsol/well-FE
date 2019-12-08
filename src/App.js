import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Switch} from "react-router-dom"

import SignInSide from './components/SignInSide'
import Map from './components/Map'



function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={SignInSide}/>
        <Route path="/map" component={Map}/>
      </Switch>
    </div>
  );
}

export default App;
