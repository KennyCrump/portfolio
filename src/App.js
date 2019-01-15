import React, { Component } from "react";
import { Link } from "react-router-dom";
import Home from './Components/Home/Home'
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
      <div
        className="body"
        onClick={() => this.setState({ menuToggle: false })}
      >
        <nav
          onClick={e => e.stopPropagation()}
          className={this.state.menuToggle ? "nav nav-slide" : "nav"}
        >
          <div className='nav-items-container'>
            <p onClick={() => this.setState({menuToggle: false})}
              className='close-menu-button'>X</p>
            <p className="large-nav-links">HOME</p>
            <p className="large-nav-links">SKILLS</p>
            <p className="large-nav-links">PORTFOLIO</p>
            <p className="large-nav-links">ABOUT</p>
            <p className="large-nav-links">CONTACT</p>
          </div>
        </nav>
        {<button className='menu-button' onClick={this.showMenu}>Menu</button> }
        <Home />
      </div>
    );
  }
}

export default App;
