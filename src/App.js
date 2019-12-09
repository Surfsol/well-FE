import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Switch} from "react-router-dom"

import SignInSide from './components/SignInSide'
import Map from './components/Map'
import Dashboard from './components/Dashboard'



function App() {
  //selectedPump -> MonitorDetails, Dashboard -> Map
  const[selectedPump, setSelectedPump] = useState([])
  return (
    <div>
      <Switch>
        <Route exact path="/" component={SignInSide}/>
        <Route path="/dashboard" 
        selectedPump= {selectedPump}
        setSelectedPump={setSelectedPump}
        component={Dashboard}/>
        <Route path="/map" component={Map}/>
      </Switch>
    </div>
  );
}

export default App;
