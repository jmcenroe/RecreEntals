// user profile page to edit / public profile 
import React, { Component } from 'react';
// import '../App.css';
import logo from '../../assets/img/recre-entals-black.gif';
import './profile.css';
import API from '../../utils/API';
import ProductPanel from '../../components/productpanel';
import NewMessage from '../newmessage';


class Profile extends Component {
  
  
  constructor(props) {
    super(props);
    this.props = props;
}

state= {
  products: [],
  showMessage: false
}



  componentDidMount() {
       
   this.getData();
  }

  getData() {
    API.getProductByUser(this.props.id).then(data => {
      this.setState({
        products: data.data
      });
    });
  }

  newMessage() {
    API.checkAuth()
      .then(data => {
        if (data.data.auth) {
          this.setState({
            userid: data.data.id,
            showMessage: true
          })
        }
        else {
          alert('You have to be signed in to send a message');
        }
      })
    
  }

  clearMessage() {
    this.setState({
      showMessage: false
    });
  }
  remove = event => {

    API.removeItem(event.target.id).then(() => {
      this.getData();
    })
  }


  render() {
    return (
      <div className="profile container">
          <div className="row justify-content-center">
            {/* <div className="col"> */}
                <img className="profile-img" src={this.props.imageURL!== null ? 
                                                  this.props.imageURL : "http://via.placeholder.com/200x200"} 
                                              alt={this.props.displayName}/>
            {/* </div> */}
          </div>
          <div className="row justify-content-center text-center" id="profileInfo">
            <div className="col">
              <h1>{this.props.displayName}</h1>
              <p>Member since: {this.props.createdAt.slice(5,10) + '-' + this.props.createdAt.slice(0,4)}</p>
              <p>Email: {this.props.email!== null ? 
                          this.props.email : 'Email not provided'}</p>
              <p>Phone: {this.props.phone!== null ? 
                        this.props.phone : 'Phone not provided'}</p>
              {this.props.edit ? '' :
              <div style={{'overflow':'auto'}}>
                <button className="contact-button btn btn-block btn-tan" onClick={this.newMessage.bind(this)}>Contact</button>
                  {this.state.showMessage ?
                  <div>
                    <NewMessage
                      userid={this.state.userid}
                      toId={this.props.id}
                      clearMessage={this.clearMessage.bind(this)}/>
                  </div>
                  : ''}
                  
                </div>
                }
              <p className="Products">Products:</p>
              {this.state.products.length > 0 ?
              this.state.products.map((item,index) =>{
                console.log(item);
                return <div>
                          <ProductPanel 
                                {...this.props}
                                id={item.id}
                                index={item.index}
                                userid={item.userid}
                                itemName={item.itemName}
                                itemDescription={item.itemDescription}
                                hourly={item.hourly}
                                daily={item.daily}
                                weekly={item.weekly}
                                monthly={item.monthly}
                                imageURL={item.imageURL}
                                profileDisabled='true'
                                edit={this.props.edit}
                                remove={this.remove.bind(this)}
                        />
                        </div>;
              })
              : ''}

              
            </div>
          </div>        
      </div>

    );
  }
}

export default Profile;
