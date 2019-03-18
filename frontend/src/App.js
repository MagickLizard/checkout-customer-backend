import React, { Component } from 'react';
import Header from './components/header/header.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App"> 
        {/* <Header/> */}
        <h1> lizard magik </h1>
        <img name="dragon" src="dragon.png" alt="dragon"/>
        <h2> A magical experience like no other. </h2>
      </div>
    );
  }
}

export default App;
