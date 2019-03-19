import React, { Component } from 'react';
import Header from './components/header/header.jsx';
import Form from './components/form/form.jsx';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <section class="section">
          <div class="container">
            <div class="tile is-parent is-vertical">
              <article class="tile is-child">
                <p class="title">LizardMagik</p>
                <img class="dragon" src="dragon.png" alt="dragon" />
                <p class="subtitle"> A place full of magic!</p>
              </article>
            </div>
          </div>
          <Form />
        </section>
      </div>
    );
  }
}
export default App;
