// PDP (product detail page) for a detailed view at a listing 
// photo of item for rent, title, description, cost, seller rating 

import React, { Component } from 'react';
// import '../App.css';
import logo from '../assets/img/recre-entals-black.gif';
import NavBar from './header.js';
import Row from './BSstuff.js';
import Container from './BSstuff.js';

class DetailPage extends Component {
    render() {
        return(
            <div className = "container">
                <div className="row">
                    <div className = "col col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <img className="product" src="http://via.placeholder.com/200x200" alt=""/>
                    </div>
                    <div className = "col col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div className="row">
                            <img className="mini-avatar" src="http://via.placeholder.com/25x25" alt="Renter Avatar"/>
                        </div>
                        <div className="row">
                            <h1>My Item for Rent</h1>
                            <p>This is the description of my item for rent. It is a wonderful item and I would love to take your money so that you may use this wonderful item.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="row">
                        
                    </div>
                    <div className="row">

                    </div>
                </div>
            </div>
        );
    }
}
