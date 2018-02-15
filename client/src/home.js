// Search form (category dropdown, location form field, search button)
// Carousels (wheels, H20, snow, small goods, complete sets)
// Icons (takes user to goods page while applying search filter)
// Down arrow (maybe just part of "homepage" component?)

import React, { Component } from 'react';
import Profile from './components/profile';
import Splash from './components/splash';
import AllProducts from './components/all-products';
import './App.css';
import logo from './assets/img/recre-entals-black.gif';


class App extends Component {
  render() {
    return (
      <div>
      <Splash />
      <h1>Welcome to <p><img className="logo" src={logo}/></p></h1>
      <h3>A place to rent (and rent out) the small stuff (and the big stuff).</h3>
      <Profile />
      <AllProducts />
      </div> 
    );
  }
}

export default App;
