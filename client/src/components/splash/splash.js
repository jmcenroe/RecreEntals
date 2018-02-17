//splash screen + log in 
// LOGO 
// log-in + sign-up buttons 
// log in modal (form, FB/G+ authentication)

import React, { Component } from 'react';
import './splash.css';

class Splash extends Component {

    

    render() {
        return(
            <div className="container-fluid" id="splash">
                <h2>Sign in</h2>
                <div className = "row">
                <form action="/api/login" method="post">
                    <input name="username" id="username" type="text" placeholder="Your username" />
                    <input name="password" id="password" type="password" placeholder="Your password"/>
                    <input type="submit" />
                </form>
                </div>
                <div className = "row">
                <a href="/auth/google">Sign In with Google</a>
                </div>
            </div>
        );
    }
}

export default Splash;