//splash screen + log in 
// LOGO 
// log-in + sign-up buttons 
// log in modal (form, FB/G+ authentication)

import React, { Component } from 'react';
import logo from '../../assets/img/recre-entals-black.gif';
import background from '../../assets/img/daytime.jpg';
import './splash.css';

class Splash extends Component {

    state = {
        errorMessage: 'No Error'
    }

    componentDidMount() {
        console.log(window.sessionStorage);
    }

    

    render() {
        return(
            <div className="container-fluid" id="splash">
                <h2>Sign in</h2>
                <div className = "row">
                    <div className = "col-2 col-sm-12">
<<<<<<< HEAD
                        <div className="logo">
                        Welcome to RecreEntals.
                        <span style={{
                            color: 'red',
                            'paddingLeft': '20px'
                        }}>{this.state.errorMessage}</span>
                        </div>
=======
>>>>>>> dj-mods
                    </div>
                </div>
                <div className ="row">
                    <form action="/auth/login" method="post">
                        <input name="username" id="username" type="text" placeholder="Your username" />
                        <input name="password" id="password" type="password" placeholder="Your password"/>
                        <input type="submit" />
                    </form>
                </div>
                <div className ="row">
                    <a href="/auth/google">Or Sign In with Google</a>
                </div>
                <div className ="row">
                    <a href="/auth/facebook">Or Sign In with Facebook</a>
                </div>
            </div>
        );
    }
}

export default Splash;