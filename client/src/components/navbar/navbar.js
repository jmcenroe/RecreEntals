import React, {Component} from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import logo from '../../assets/img/recre-entals-black.gif';
// white logo commented out for now
// import logoWhite from '../../assets/img/recre-entals-white.gif';

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
class Navbar extends Component {

  constructor(props) {
    super(props);
    this.props = props;
}

state = {
  lists: [],
  activeList: '',
  changeList: ''
}

componentDidMount() {

}

  
  
  render() {
   
    return <nav className="navbar navbar-default">
    <div className="container-fluid">
      
          <div className="navbar-header">
            <span className="navbar-brand">
            <img alt="RecreEntals" className="logo" src={logo} />
            </span>
          </div>
          <ul className="nav navbar-nav">
            <li
              className={
                window.location.pathname === "/"
                  ? "active"
                  : ""
              }
            >
              <Link to="/">Home</Link>
            </li>
          
            <li
              className={window.location.pathname === "/products" ? "active" : ""}
            >
              <Link to="/products">Products</Link>
            </li>
            <li
              className={window.location.pathname === "/profile" ? "active" : ""}
            >
              <Link to="/profile">Profile</Link>
            </li>
            
                
          </ul>  
        
        
    </div>
  </nav>;

}

}

export default Navbar;
