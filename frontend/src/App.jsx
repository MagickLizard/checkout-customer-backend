import React, { Component } from 'react';
import Header from './components/header/header.jsx';
import Form from './components/form/form.jsx';
import Message from './components/message/message.jsx';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <section class="section">
          <div class="container">
          
            {/* <div class="tile is-parent is-vertical"> */}
              {/* <article> */}
              <Message>           
                {/* <p class="title">LizardMagik</p> */}
                </Message>
                {/* <img class="dragon" src="dragon.png" alt="dragon" />
                <p class="subtitle"> A place full of magic!</p>
              </article> */}
            {/* </div> */}

          </div>

        </section>
        <Form />
      </div>

    );
  }
}
export default App;
