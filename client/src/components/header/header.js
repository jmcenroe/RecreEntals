// burger bar, logo, and "Add item for rent" 
// search bar that carries over to all pages except home.js
import React, { Component } from 'react';
import '../app.css';

// class Header extends Component {
//   render() {
//     return (
//       <nav className="navbar navbar-toggleable-md navbar-light bg-inverse">
//         <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <a className="navbar-brand" href="#">Logo Goes Here</a>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav mr-auto">
//             <li className="nav-item active">
//               <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#Rent">Rent Stuff</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#List">List Stuff</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#myProfile">My Profile</a>
//             </li>
//           </ul>
//           <form className="form-inline my-2 my-lg-0">
//             <input className="form-control mr-sm-2" type="text" placeholder="Search">
//               <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//           </form>
//       </div>
//     </nav>

//       );
//     }
//   }
// export default Header;
  const NavComponent = React.createClass({
    render: function(){
      return (
        <nav>
          <div className="navWide">
            <div className="wideDiv">
              <a href="#">Home</a>
              <a href="#">Rent Stuff</a>
              <a href="#">List Stuff</a>
              <a href="#">My Profile</a>     
            </div>   
          </div>
          <div className="navNarrow">
            <i className="fa fa-bars fa-2x" onClick={this.burgerToggle}></i>
            <div className="narrowLinks">
              <a href="#" onClick={this.burgerToggle}>Home</a>
              <a href="#" onClick={this.burgerToggle}>Rent Stuff</a>
              <a href="#" onClick={this.burgerToggle}>List Stuff</a>
              <a href="#" onClick={this.burgerToggle}>My Profile</a>
            </div>
          </div>
        </nav>
      );
    }
  }

  ReactDOM.render(<NavComponent />, document.querySelector('navbar'));