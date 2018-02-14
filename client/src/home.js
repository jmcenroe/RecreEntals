// Search form (category dropdown, location form field, search button)
// Carousels (wheels, H20, snow, small goods, complete sets)
// Icons (takes user to goods page while applying search filter)
// Down arrow (maybe just part of "homepage" component?)

import React, { Component } from 'react';
import Profile from './components/profile';
import Splash from './components/splash';
import AllProducts from './components/all-products';
import './App.css';


class App extends Component {
  render() {
    return (
      <div>
      <Splash />
      <h1>Welcome to <img src=""/></h1>
      <Profile />
      <AllProducts />
      </div> 
    );
  }
}

export default App;
