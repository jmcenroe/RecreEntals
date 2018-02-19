import React, {Component} from "react";
import { Link } from "react-router-dom";
import Row from "../row";
import "./navbar.css";
import Col from "../col";
import logo from "../../assets/img/recre-entals-white.gif";

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
      <Row>
        <Col size="3">
          <div className="navbar-header">
            <span className="navbar-brand">
              <img src={logo} id="logo"/>
            </span>
          </div>
        </Col>
        <Col size="3" className="col-3 offset-sm-6 offset-md-6 offset-lg-6" id="options">
          <ul className="navbar-nav">
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
        </Col> 
        
        </Row>
    </div>
  </nav>;

}

}

export default Navbar;
