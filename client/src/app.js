// Search form (category dropdown, location form field, search button)
// Carousels (wheels, H20, snow, small goods, complete sets)
// Icons (takes user to goods page while applying search filter)
// Down arrow (maybe just part of "homepage" component?)

import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Profile from './components/profile';
import Splash from './pages/splashpage';
import Wrapper from "./components/wrapper";
import Container from './components/container';
import Navbar from "./components/navbar";
import Search from './components/allproducts';
import './app.css';
import logo from './assets/img/recre-entals-black.gif';


class App extends Component {
  render() {
    return (
      <Router>
        <Container>
          <Navbar/>
          <Wrapper>
            <Route exact path='/' component={Splash}/>
            <Route exact path='/products' component={Search}/>
            <Route exact path='/profile' component={Profile}/>
          </Wrapper>
        </Container>
      </Router>
    );
  }
}

export default App;
