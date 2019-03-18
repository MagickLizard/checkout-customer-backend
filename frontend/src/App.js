import React, { Component } from 'react';
import Header from './components/header/header.js';
import './App.css';
import "bulma/sass/utilities/_all.sass"
import "bulma/sass/grid/columns.sass"

class App extends Component {
  render() {
    return (

      <div className="App"> 

        <Header>
          <p>
            Welcome to lizard magic
          </p>
        </Header>
        <h1> lizard magik </h1>
        <h2> A magical experience like no other. </h2>
      </div>
    );
  }
}

export default App;
