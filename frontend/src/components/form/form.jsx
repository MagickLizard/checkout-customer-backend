import React, { Component } from 'react';
import './form.scss';
import Input from '../shared/input.jsx';
import Button from "../shared/button.jsx";

class Form extends Component {

  constructor(props) {
    super(props);
    this.state = {
      newUser: {
        fullName: ""
      },
    };
    this.handleFullName = this.handleFullName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleFullName(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          name: value
        }
      }),
      () => console.log('this.state.newUser', this.state.newUser)
    );
  }

  handleSubmit(event) {
    event.preventDefault();
    const userData = this.state.newUser;
    // const proxyUrl = 'https://cors-anywhere.herokuapp.com/',
     let url = 'http://localhost:8080/api/customer';
    console.log('userData>>>', userData)

    fetch( url, {
      method: "POST",
      headers: {
        "Cache-Control": "no-cache",
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }, "body": [
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
    ],
    }).then(response => {
      response.json().then(data => {
        console.log("Successful" + data);
      });
    });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Input
          inputtype={"text"}
          title={"Full Name"}
          name={"name"}
          value={this.state.newUser.name}
          placeholder={"Enter your name"}
          handlechange={this.handleInput}
        />{" "}
        <Button
          action={this.handleFormSubmit}
          type={"primary"}
          title={"Submit"}
        />{" "}
      </form>
    )
  }
}
export default Form;
