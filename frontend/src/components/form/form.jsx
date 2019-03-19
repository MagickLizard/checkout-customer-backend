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
        
  render() {
    return (
      // this.getMenu());
    <form onSubmit={this.handleSubmit}> 
      <input htmlFor="username" id="username" class="input is-primary" type="text" placeholder="Username"></input>
      <input htmlFor="email" id="email" class="input is-info" type="text" placeholder="email"></input>
      <button type="submit" class="button is-large is-link submit-center">Submit</button> 
     </form> 
    )
  }
        }   
        export default Form
