import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import logo from './logo.svg';
import './header.scss';

class Header extends Component {
  onClick(info) {
    // console.log('click ', info);
  }

  getMenu() {
    return (
   <section className="section">
    <div className="container">
    </div>
  </section>
    );
  }

  render() {
    return (<div>
      <div style={{}}>{this.getMenu()}</div>
    </div>);
  }
}

export default Header;
