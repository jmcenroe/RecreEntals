//splash screen + log in 
// LOGO 
// log-in + sign-up buttons 
// log in modal (form, FB/G+ authentication)

import React, { Component } from 'react';
// import '../App.css';
import logo from '../../assets/img/recre-entals-black.gif';
import './splash.css';

class Splash extends Component {;

    componentDidMount() {
        console.log(window.sessionStorage);
    }

    

    render() {
        return(
            <div className="container-fluid" id="splash">
                <h2>Sign in</h2>
                <div className = "row">
                    <div className = "col-2 col-sm-12">
                        <div className="logo">
                        Welcome to RecreEntals.
                        </div>
                    </div>
                </div>
                <div className ="row">
                    <button>Sign Up</button>
                    <button>Log In</button>
                </div>
                <div className ="row">
                    <a href="/auth/google">Or Sign In with Google</a>
                </div>
            </div>
        );
    }
}

export default Splash;