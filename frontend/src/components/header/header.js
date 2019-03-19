import React, { Component } from 'react';
import './header.scss';

class Header extends Component {
  onClick(info) {
  }

  getMenu() {
    return (
      <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
        <div class="navbar-start">
          <a class="navbar-item" href="https://bulma.io">
            <img src="lm.png" alt="lizardmagic" class="logo">
            </img>
          </a>
          <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
          <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item">
              Home</a>
            <a class="navbar-item">
              Contact </a>
          </div>
        </div>
        </div>
        </div>
        <div class="navbar-end">
        <div id="navbarBasicExample" class="navbar-menu"/>
          <div class="navbar-start">
            <a class="navbar-item" href="https://www.linkedin.com/in/elizabeth-king-11a978a2">
              Linkedin</a>
            <a class="navbar-item" href="https://github.com/MagickLizard">
              Github </a>
          </div>
        </div>
      </nav>
    );
  }

  render() {
    return (<div>
      <div style={{}}>{this.getMenu()}</div>
    </div>);
  }
}

export default Header;
