import React, { Component } from 'react';
import './form.scss';


class Form extends Component {

  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('event>>>', event.target);
    const data = new FormData(event.target);
    const url = 'http://localhost:8080/api/customer';
    var formData = new FormData();
    console.log('formData>>>', formData)
    
    fetch(url, {
      "method": "POST",
      // "headers": {
        // "Cache-Control": "no-cache",
      //     // "accept": "application/json; charset=utf-8",
      //     // "Content-Type": "application/json",
      //     "Access-Control-Allow-Origin": null
      // }
      "body":[
        {
            "customer": "default",
            "items": [
                "classic",
                "classic",
                "premium"
            ],
            "total": "9999.99"
        },
        {
            "customer": "SECOND",
            "items": [
                "classic",
                "classic",
                "premium"
            ],
            "total": "9999.99"
        }
    ]
  })
  }
                    // this.getMenu());
  render() {
    return (
    <div class="container">
      <article class="message">
  <div class="message-header">
    <p>Backend Example </p>
  </div>
  <div class="message-body">
    <p class="subtitle">This is to show sending a post to the backend I have written and getting a response.</p>
    <form onSubmit={this.handleSubmit}> 
    <div class="column-is-half">
      <input htmlFor="username" id="username" class="input is-primary" type="text" placeholder="Username"></input>
      <input htmlFor="email" id="email" class="input is-info" type="text" placeholder="email"></input>
      <button type="submit" class="button is-large is-link submit-center">Submit</button> 
      </div>
     </form> 
     </div>
</article>
</div>
    )
  }
        }   
        export default Form
