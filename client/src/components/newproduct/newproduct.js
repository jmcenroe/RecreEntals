import React, {Component} from "react";
import { Link } from "react-router-dom";
import "./newproduct.css";
import logo from '../../assets/img/recre-entals-black.gif';
import API from '../../utils/API';
// white logo commented out for now
// import logoWhite from '../../assets/img/recre-entals-white.gif';

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
class NewUser extends Component {

  constructor(props) {
    super(props);
    this.props = props;
}

state = {
  item: {
    itemName: '',
    itemDescription: '',
    category: '',
    hourly: '',
    daily: '',
    weekly: '',
    monthly: '',
    imageUrl: ''
  },
  categorylist: []

}

componentDidMount() {
  API.getCategories().then((data) => {
    let statedata = [];
    for (let i=0; i<data.data.length; i++) {
      statedata.push(data.data[i].name);
    }
    this.setState({
      categorylist: statedata
    });
  });
}

send () {
  console.log('Sending');
}

// checkPassword () {
//   const numtest = /[0-9]/g;
//   const lettertest = /[a-z]/g;

//   if(numtest.test(this.state.password) && lettertest.test(this.state.password) && this.state.password.length>=8) {
//     return '';
//   }
//   return 'Password must be at least 8 characters long and contain at least one letter and one number';
// }

// passwordMatch() {
//   if (this.state.password !== this.state.password2) {
//     return "Passwords must match";
//   } 
//   return '';
// }

// checkemail() {
//   if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email)) {
//     return '';
//   }
//   return 'Not a valid email address';
// }

// checkphone() {
//   if (this.state.phone.match(/\d/)){
//     if (this.state.phone.match(/\d/g).length===10) {
//       return '';
//     }
//   }
//   return 'Not a valid phone number';
// }

handleChange = event => {
  let statedata = this.state.item;
  statedata[event.target.name] = event.target.value
  this.setState({
    item: statedata
  });

}

submitDisabled() {
  return false;

}

  
  
  render() {
   
    return (
    <form className="search">
    
      <div className="form-group">
      <label htmlFor="itemName">Item Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Item Name"
          name='itemName'
          value={this.state.item.itemName}
          onChange={this.handleChange}
        />
        <div className="form-group">
          <label htmlFor="itemDescription">Item Description</label>
          <textarea
            type="text"
            style={{
              'height': '150px'
            }}
            className="form-control"
            placeholder='Item Description'
            name='itemDescription'
            value={this.state.item.itemDescription}
            onChange={this.handleChange}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="category">Category: </label>
              
          <select
            name='category'
            className='inline'
            value={this.state.category}
            onChange={this.handleChange}
          >
            {this.state.categorylist.map((item,index) => {
              return <option value={item}>{item}</option>
            })}
          </select>
          <label htmlFor="hourly" className='inline'>Rates: &nbsp;&nbsp;&nbsp; Hourly </label>
            <input
            type="text"
            className="inline-textbox"
            placeholder="Rate"
            name='hourly'
            value={this.state.item.hourly}
            onChange={this.handleChange}
          />
          <label htmlFor="daily">&nbsp; /hr&nbsp;&nbsp;&nbsp;&nbsp; Daily </label>
            <input
            type="text"
            className="inline-textbox"
            placeholder="Rate"
            name='daily'
            value={this.state.item.daily}
            onChange={this.handleChange}
          />
          <label htmlFor="weekly">&nbsp; /day&nbsp;&nbsp;&nbsp;&nbsp; Weekly </label>
            <input
            type="text"
            className="inline-textbox"
            placeholder="Rate"
            name='weekly'
            value={this.state.item.weekly}
            onChange={this.handleChange}
          />
          <label htmlFor="monthly">&nbsp; /wk&nbsp;&nbsp;&nbsp;&nbsp; Monthly </label>
            <input
            type="text"
            className="inline-textbox"
            placeholder="Rate"
            name='monthly'
            value={this.state.item.monthly}
            onChange={this.handleChange}
          />
           <label htmlFor="monthly">&nbsp; /mo</label>
           

        </div>
        <div className="form-group">
          <label htmlFor="imageURL">Image URL</label>
    
          <input
            type="text"
            className="form-control"
            name='imageUrl'
            value={this.state.item.imageUrl}
            onChange={this.handleChange}
          />
        </div>
        

        <button 
        type="submit" 
        className="btn btn-default" 
        id="run-search"
        onClick={this.send.bind(this)}
        disabled={this.submitDisabled()}>
        <i className="fa fa-search"></i>
          Submit
        </button>
        
    </div>
    </form>);

}

}

export default NewUser;
