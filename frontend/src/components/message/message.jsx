import React, { Component } from 'react';

class Message extends Component {
  render() {
    return (
      <div class="container section">
        <div class="tile is-ancestor">
          <div class="tile is-child">
            
            <article class="">
              <p class="title">MagickLizard</p>
              <p class="subtitle">A place full of magic!</p>
       
              <img src="dragon.png"></img>
      
            </article>
          </div>
          <div class="tile is-child">
          <article class="message">
              <div class="message-header">
                <p>About me</p>
              </div>
              <div class="message-body">
              <p class="subtitle">I love javascript, es6 and working together as a team.</p>
              <p class="">I have unquestionable desire to make things better than the day before. </p>
              <p class=""> I enjoy breaking projects into microservices so code is better for the next developer.</p>
  </div>
            </article>
            <article class="message">
              <div class="message-header">
                <p>Core Languages & Frameworks</p>
              </div>
              <div class="message-body">
              <p class="subtitle">Javascript, es6/7, Java, C++</p>
              <p class="subtitle">Node.js, express.js, Angular JS, </p>
              <p class="subtitle"> I am learning React (this website is in React).</p>
  </div>
            </article>
          </div>
        </div>
      </div>
    );
  }
}
export default Message;
