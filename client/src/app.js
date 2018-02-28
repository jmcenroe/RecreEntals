// Search form (category dropdown, location form field, search button)
// Carousels (wheels, H20, snow, small goods, complete sets)
// Icons (takes user to goods page while applying search filter)
// Down arrow (maybe just part of "homepage" component?)

import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Profile from './pages/profilepage';
import Splash from './pages/splashpage';
import Wrapper from "./components/wrapper";
import Container from './components/container';
import Navbar from "./components/navbar";
import Search from './components/allproducts';
import Home from './components/home';
import './App.css';
import logo from './assets/img/recre-entals-black.gif';
import NewUserPage from './pages/newuserpage';
import NewProductPage from './pages/newproductpage';
import ProductSearch from './pages/productsearch';
import RentProduct from './pages/rentproduct';
import Message1 from './pages/message1';
import Message2 from './pages/message2';
import CalendarPage from './pages/calendartest'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container-fluid" >
          <Navbar/>
          <Wrapper>
            <Route exact path='/' component={Splash}/>
            <Route exact path='/products' component={Search}/>
            <Route exact path='/profile' component={Profile}/>
            <Route exact path='/home' component={Home}/>
            <Route exact path='/newuser' component={NewUserPage}/>
            <Route exact path='/newproduct' component={NewProductPage}/>
            <Route exact path='/productsearch' component={ProductSearch}/>
            <Route exact path='/rent' component={RentProduct}/>
            <Route exact path='/message' component={Message1}/>
            <Route exact path='/message2' component={Message2}/>
            <Route exact path='/calendar' component={CalendarPage}/>
          </Wrapper>
        </div>
      </Router>
    );
  }
}

export default App;
