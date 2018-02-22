// user profile page to edit / public profile 
import React, { Component } from 'react';
// import '../App.css';
import logo from '../../assets/img/recre-entals-black.gif';
import './profilepage.css';
import API from '../../utils/API';
import Profile from '../../components/profile'


class ProfilePage extends Component {
  
  
  constructor(props) {
    super(props);
    this.props = props;
}

state = {
  displayUser: {},
  authUser: {},
  edit: false,
  view: false

}


  componentDidMount() {
    
    this.findUserData();
    
  }

  findUserData() {
    //Get user info if signed in
    API.checkAuth().then((data) => {
      console.log('Checking auth');
      //Confirms user token data
      if(data.data.auth) {
               
       API.getUser(data.data.id).then(data => {
         //Check if re-direct user exists
         if(this.props.location.state) {

           //Check if auth user and display user are the same, save both to state
           if (parseInt(this.props.location.state.profileId) === data.data.id) {
             console.log('Checkpoint 1');
             this.setState({
               authUser: data.data,
               displayUser: data.data,
               edit: true,
               view: true
             });
           }
           //If auth user and display user are different, get display user data and save to state
           else {
             let authUserData = data.data;
             API.getUser(this.props.location.state.profileId).then(data => {
              console.log('Checkpoint 2');
               this.setState({
                 authUser: authUserData,
                 displayUser: data.data,
                 edit: false,
                 view: true
               })
             })
           }
         }
         else {
           //No re-direct, user accessing profile through their user link
           //Save auth user to state, assume that authuser is displayUser
           console.log('Checkpoint 3');
           this.setState({
             authUser: data.data,
             displayUser: data.data,
             view: true,
             edit: true
           });
         }
       })
      }

      //No authorized user, check for re-direct user
      else {
        if (this.props.location.state) {
          API.getUser(this.props.location.state.profileId).then(data => {
            console.log('Checkpoint 4');
            this.setState({
              displayUser: data.data,
              edit: false,
              view: true
            })
          })

        }
        //No re-direct user and no auth user, re-direct window away from profile
        else {
          this.setState({

            view: false
          });
        }

      }
      
      
    });

    if(this.props.location.state) {
      API.getUser(this.props.location.state.profileId).then(data => {
        this.setState({
          displayUser: data.data
        })
      })
    }
  }

  render() {
    console.log(this.state.view);
    return (
      <div className="profile container">
        {this.state.view ?
        <Profile edit={this.state.edit} 
          {...this.state.displayUser}/>
        : <h1>You must be <a href='/'>signed in</a> to view your own profile</h1>}
        
      </div>

    );
  }
}

export default ProfilePage;
