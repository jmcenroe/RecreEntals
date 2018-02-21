//splash screen + log in 
// LOGO 
// log-in + sign-up buttons 
// log in modal (form, FB/G+ authentication)

import React, { Component } from 'react';
import logo from '../../assets/img/recre-entals-black.gif';
import './splash.css';
import fbIcon from '../../assets/img/facebook.png';
import gIcon from '../../assets/img/google.png';

class Splash extends Component {

    state = {
        errorMessage: 'No Error'
    }

    componentDidMount() {
        console.log(window.sessionStorage);
    }

    

    render() {
        return(
            <div className="container-fluid d-flex" id="splash">
                <div className = "row text-center splashGreeting">
                    <h1>Welcome to</h1>
                </div>
                <div className="row splashGreeting">
                    <img src={logo} alt="logo" id="splashLogo"/>
                </div>
                <div className="row splashEnd">
                    <h2>A place to rent things.</h2>
                </div>
                <div>
                    <h3>Sign in to your account to start renting!</h3>
                </div>

                <div className = "row signIn">
                    <form action="/auth/login" method="post">
                        <input name="username" id="username" type="text" placeholder="Username" />
                        <input name="password" id="password" type="password" placeholder="Password"/>
                        <div className = "row">
                            <div className = "col-6 offset-3">
                                <input type="submit" />
                            </div>
                        </div>
                    </form>
                </div> 
                <div className="row">
                    <a href="/auth/google"><img class="icon" src={gIcon} alt="Sign in with Google"/></a>
                    <a href="/auth/facebook"><img class="icon" src={fbIcon} alt="Sign in with Facebook"/></a>
                </div>
                <div className="row">
                    <a href="/newuser"><h3 id="createOne">Don't have an account? <p>Create one here.</p></h3></a>
                </div> 
            </div>
        );
    }
}

export default Splash;