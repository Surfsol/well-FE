import React from 'react';
import logo from './logo.svg';
import './App.css';

import Landing from './components/Landing'
import SignInSide from './components/SignInSide'
import Map from './components/Map'

console.log(process.env.TOKEN)


function App() {
  return (
    <div>
      <SignInSide/>
      <Map mapboxApiAccessToken={process.env.REACT_APP_TOKEN}/>
    </div>
  );
}

export default App;
