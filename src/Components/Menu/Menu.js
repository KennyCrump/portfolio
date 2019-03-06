import React, { Component } from 'react';


class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = { menuToggle: false }
    }
    showMenu = e => {
        this.setState({ menuToggle: true });
        e.stopPropagation();
      };
      hideMenu = () => {
        this.setState({menuToggle: false})
      }
      scrollIntoView = (ref) => {
        this.refs[ref].scrollIntoView()
      }
    render() { 
      const {menuToggle} = this.state
        return ( 
  <div onClick={this.hideMenu}>
        <nav
          onClick={e => e.stopPropagation()}
          className={menuToggle ? "nav nav-slide" : "nav"}
        >
          <div className='nav-items-container'>
            <p onClick={this.hideMenu}
              className='close-menu-button'>X</p>
            <a href="#home"><p onClick={this.hideMenu} className="large-nav-links">HOME</p></a>
            <a href="#portfolio"><p onClick={this.hideMenu} className="large-nav-links">PORTFOLIO</p></a>
            <a href="#skills"><p onClick={this.hideMenu} className="large-nav-links">SKILLS</p></a>
            <a href="#about"><p onClick={this.hideMenu} className="large-nav-links">ABOUT</p></a>
            <a href="#contact"><p onClick={this.hideMenu} className="large-nav-links">CONTACT</p></a>
          </div>
        </nav>
        <button className='menu-button' onClick={this.showMenu}>Menu</button>
        {this.props.children}
        </div> );
    }
}
 
export default Menu;