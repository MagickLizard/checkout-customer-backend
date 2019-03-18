import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import logo from './logo.svg';
import Menu, { SubMenu, Item as MenuItem } from 'rc-menu';
import 'rc-menu/assets/index.css';
import './header.scss'
class Header extends Component {
  onClick(info) {
    // console.log('click ', info);
  }

  getMenu() {
    return (
      <Menu
        onClick={this.onClick}
        mode="horizontal"
      >
        <SubMenu key="2" title="About">
          <MenuItem key="2-1">item2-1</MenuItem>
          </SubMenu>
      
        <MenuItem key="3">Products</MenuItem>
      </Menu>
    );
  }

  render() {
    return (<div>
      <div style={{}}>{this.getMenu()}</div>
    </div>);
  }
}

export default Header;