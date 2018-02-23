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
                <div className="row splashGreeting">
                    <img src={logo} alt="logo" id="splashLogo"/>
                </div>
                <div className="row splashEnd">
                    <h2>A place to rent things.</h2>
                </div>
                    <h3>Sign in or sign up to start renting!</h3>
                <div className = "row signIn">
                    <div className="row">
                        <form action='/auth/google' method='post'>
                        <input name='submit' type='submit'/>
                        </form>
                        <a className ="icon-border" href="/auth/google"><img className="icon" src={gIcon} alt="Sign in with Google"/>Log In with Google</a>
                        <a className ="icon-border" href="/auth/facebook"><img className="icon" src={fbIcon} alt="Sign in with Facebook"/>Log In with Facebook</a>
                    </div>
                    </div>
                    <div className="row">
                    <p> - OR - </p>
                    </div>
                    <div className="row">
                    <form action="/auth/login" method="post" id="form">
                        <input name="username" id="username" type="text" placeholder="Username" />
                        <input name="password" id="password" type="password" placeholder="Password"/>
                        <div className = "row">
                            <div className = "col-6 offset-3">
                                <input name="submit" type="submit" id="submit" />
                            </div>
                        </div>
                    </form>
                </div>
                
                
                <div className="row">
                    <a href="/newuser"><h3 id="createOne">Don't have an account? <p>Create one here.</p></h3></a>
                </div> 
            </div>
        );
    }
}

export default Splash;