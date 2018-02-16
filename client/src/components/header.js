// burger bar, logo, and "Add item for rent" 
// search bar that carries over to all pages except home.js
import React, { Component } from 'react';
import '../App.css';

class NavBar extends Component {
  render() {
    return(
      <nav>
          <div className="navWide">
            <div className="wideDiv">
              <a href="#">Home</a>
              <a href="#">Rent Stuff</a>
              <a href="#">List Stuff</a>
              <a href="#">My Profile</a>     
            </div>   
          </div>
          <div className="navNarrow">
            <i className="fa fa-bars fa-2x" onClick={this.burgerToggle}></i>
            <div className="narrowLinks">
              <a href="#" onClick={this.burgerToggle}>Home</a>
              <a href="#" onClick={this.burgerToggle}>Rent Stuff</a>
              <a href="#" onClick={this.burgerToggle}>List Stuff</a>
              <a href="#" onClick={this.burgerToggle}>My Profile</a>
            </div>
          </div>
        </nav>
    );
  }
}

  export default NavBar;