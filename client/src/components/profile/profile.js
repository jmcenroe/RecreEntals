// user profile page to edit / public profile 
import React, { Component } from 'react';
// import '../App.css';
import logo from '../../assets/img/recre-entals-black.gif';
import './profile.css';
import API from '../../utils/API';
import ProductPanel from '../../components/productpanel';


class Profile extends Component {
  
  
  constructor(props) {
    super(props);
    this.props = props;
}

state= {
  products: []
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
    console.log('Send a new message');
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
              <p><button className="contact-button" onClick={this.newMessage}>Contact</button></p>
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
