// user profile page to edit / public profile 
import React, { Component } from 'react';
import './profile.css';


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
