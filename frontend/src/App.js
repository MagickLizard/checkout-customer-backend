import React, { Component } from 'react';
import Header from './components/header/header.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <section class="section">
          <div class="container">
            <h1 class="title">
              LizardMagik
      </h1>
            <p>
              Where everything is <strong>magical!</strong>
            </p>
            <img class="dragon" src="dragon.png" alt="dragon" />
            <h2> Coming soon...(*suspense builds*) </h2>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
