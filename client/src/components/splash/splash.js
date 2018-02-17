//splash screen + log in 
// LOGO 
// log-in + sign-up buttons 
// log in modal (form, FB/G+ authentication)

import React, { Component } from 'react';
<<<<<<< HEAD:client/src/components/splash.js
import '../App.css';
import logo from '../assets/img/recre-entals-black.gif';
=======
import './splash.css';
>>>>>>> f0e05b649d12378e666f87200bd95603e0f9f1f5:client/src/components/splash/splash.js

class Splash extends Component {
    render() {
        return(
            <div className="container-fluid" id="splash">
                <div className = "row">
                    <div className = "col-2 col-sm-12">
                        <div className="logo">
                            <img alt="RecreEntals" className="logo" src={logo} />
                        </div>
                    </div>
                </div>
                <div className ="row">
                    <button>Sign Up</button>
                    <button>Log In</button>
                </div>
                <div className ="row">
                    <a href="#">Continue as guest</a>
                </div>
            </div>
        );
    }
}

export default Splash;