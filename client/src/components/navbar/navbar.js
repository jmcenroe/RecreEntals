import React, {Component} from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import logoWhite from "../../assets/img/recre-entals-white.gif";
import logo from '../../assets/img/recre-entals-black.gif';
import API from '../../utils/API';

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
class Navbar extends Component {

  constructor(props) {
    super(props);
    this.props = props;
}

state = {
  lists: [],
  activeList: '',
  changeList: '',
  auth: false,
  userName: '',
  searchTerm: ''
}

componentDidMount() {
  API.checkAuth().then( (data) => {
    let statedata = {}
    console.log(data.data);
    statedata.auth = data.data.auth;
    
    if (statedata.auth) {
      statedata.userName= data.data.displayName;
    }
    this.setState(
      statedata
    );
  });
}

 

 



  
  
  render() {
   
    return <nav className="navbar navbar-default" id="navId">
    <div className="container-fluid">
      <div className="row justify-content-between" id="navRow">
        <div className="col">
          <div className="navbar-header">
            <span className="navbar-brand">
            <img alt="RecreEntals" id="logo" src={logoWhite} />
            </span>
          </div>
          <div className='message'>
            <span>
              {this.state.message}
            </span>
          </div>
        </div>
        <div className="col" id="options">
          <ul className="navbar-nav" id="navbar-links">
            <li
              className={
                window.location.pathname === "/"
                  ? "active"
                  : ""
              }
            >
             {this.state.auth ? 
                <div> Welcome, 
                    <Link to='/profile'>{this.state.userName}</Link>
                    <form action='/auth/logout' method='get'>
                      <button type='submit'>Log Out</button>
                    </form> 
                </div>
                
                : <div>
                    You are not logged in. <Link to="/">Log In</Link>
                  </div>}
            </li>
            <li
              className={window.location.pathname === "/products" ? "active" : ""}
            > <div>
               <Link to="/productsearch">Search Products</Link>
               <Link to="/products">Or Browse Products</Link>
              </div>
            </li>
           
            
            
                
          </ul> 
        </div> 
        
        </div>
    </div>
  </nav>;

}

}

export default Navbar;
