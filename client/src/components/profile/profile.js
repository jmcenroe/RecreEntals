// user profile page to edit / public profile 
import React, { Component } from 'react';
<<<<<<< HEAD:client/src/components/profile.js
import '../App.css';
import logo from '../assets/img/recre-entals-black.gif';
=======
import './profile.css';
>>>>>>> f0e05b649d12378e666f87200bd95603e0f9f1f5:client/src/components/profile/profile.js


class Profile extends Component {
  render() {
    return (
      <div className="Profile">
            <img className="profile-img" src="http://via.placeholder.com/200x200" alt=""/>
            <h1>My Name</h1>
            <p className="Bio">Bio goes here</p>
            <p>Member since: </p>
            <p><button className="contact-button">Contact</button></p>
      </div>
    );
  }
}

export default Profile;
