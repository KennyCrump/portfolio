import React, { Component } from "react";

import Menu from './Components/Menu/Menu'
import Parallax from './Components/Parallax/Parallax'

import "./App.css";

class App extends Component {
  state = {
    menuToggle: false
  };
  showMenu = e => {
    this.setState({ menuToggle: true });
    e.stopPropagation();
  };
  
  
  render() {
    
    console.log("menu toggle: ", this.state.menuToggle);
    return (
  <div >
      <Menu showMenu={this.showMenu} hideMenu={this.hideMenu} menuToggle={this.state.menuToggle}>
      <Parallax />

      </Menu>
  </div>      
    );
  }
}

export default App;
