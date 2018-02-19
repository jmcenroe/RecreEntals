// user profile page to edit / public profile 
import React, { Component } from 'react';
// import '../App.css';
import logo from '../../assets/img/recre-entals-black.gif';
import './profile.css';
import Auth from '../../modules/Auth';


class Profile extends Component {

  componentDidMount() {
    console.log(Auth.isUserAuthenticated());
  }

  render() {
    return (
      <div className="profile container">
        <div className="row justify-content-center">
          {/* <div className="col"> */}
              <img className="profile-img" src="http://via.placeholder.com/200x200" alt=""/>
          {/* </div> */}
        </div>
        <div className="row justify-content-center text-center" id="profileInfo">
          <div className="col">
            <h1>My Name</h1>
            <p className="Bio">Bio goes here</p>
            <p>Member since: </p>
            <p><button className="contact-button">Contact</button></p>
          </div>
        </div>
        
      </div>

    );
  }
}

export default Profile;
