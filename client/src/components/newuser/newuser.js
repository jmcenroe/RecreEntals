import React, {Component} from "react";
import "./newuser.css";
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
  username: '',
  displayName: '',
  password: '',
  password2: '',
  email: '',
  phone: ''

}

componentDidMount() {
  
}

send () {
  let data = this.state;
  delete data.password2;
  API.addUser(data);
}

checkPassword () {
  const numtest = /[0-9]/g;
  const lettertest = /[a-z]/g;

  if(numtest.test(this.state.password) && lettertest.test(this.state.password) && this.state.password.length>=8) {
    return '';
  }
  return 'Password must be at least 8 characters long and contain at least one letter and one number';
}

passwordMatch() {
  if (this.state.password !== this.state.password2) {
    return "Passwords must match";
  } 
  return '';
}

checkemail() {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email)) {
    return '';
  }
  return 'Not a valid email address';
}

checkphone() {
  if (this.state.phone.match(/\d/)){
    if (this.state.phone.match(/\d/g).length===10) {
      return '';
    }
  }
  return 'Not a valid phone number';
}

handleChange = event => {
  this.setState({
  [event.target.name]: event.target.value
});

}

submitDisabled() {
  let disabled = false;
  // Confirms all fields have values
  for (var key in this.state) {
    if (this.state[key] === '') {
      disabled= true;
    }
  }

  // Confirms validated fields are valid
  
  if (this.checkemail() !== '' || this.checkPassword() !== '' || this.checkphone() !== '' || this.passwordMatch() !== '') {
    disabled= true;
  }

  //Allows search
  return disabled;


}

  
  
  render() {
   
    return (
      <div>
      <h3>CREATE A NEW ACCOUNT</h3>
    <form className="search">
    <div className="form-row">
      <div className="form-group col-md-6">
      <label htmlFor="username">Username</label>
        <input
          type="text"
          className="form-control"
          name='username'
          value={this.state.username}
          onChange={this.handleChange}
        /></div>
        <div className="form-group col-md-6">
          <label htmlFor="displayName">Display Name</label>
          <input
            type="text"
            className="form-control"
            name='displayName'
            value={this.state.displayName}
            onChange={this.handleChange}
          /></div>
        </div>
        <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="password">Password</label>
            <span style={{
                  color: 'red',
                  paddingLeft: '25px'}}>
                    {this.state.password !== '' ? 
                    this.checkPassword() : ''}
            </span>     
          <input
            type="password"
            className="form-control"
            name='password'
            value={this.state.password}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="password2">Confirm Password
            <span style={{
                color: 'red',
                paddingLeft: '25px'}}>
                  {this.state.password2 !== '' ? 
                  this.passwordMatch() : ''}
            </span>  
          </label>
          <input
            type="password"
            className="form-control"
            name='password2'
            value={this.state.password2}
            onChange={this.handleChange}
          />
          </div>
        </div>
        <div className="form-row">
        <div className="form group col-md-6">
          <label htmlFor="email">Email
            <span style={{
                color: 'red',
                paddingLeft: '25px'}}>
                  {this.state.email !== '' ? 
                  this.checkemail() : ''}
            </span>  
          </label>  
          <input
            type="text"
            className="form-control"
            id="search-term"
            name='email'
            placeholder="example@email.com"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group col-md-4">
          <label htmlFor="phone">Phone Number
                <span style={{
                color: 'red',
                paddingLeft: '25px'}}>
                  {this.state.phone !== '' ? 
                  this.checkphone() : ''}
            </span>  
          </label>  
          <input
            type="tel"
            className="form-control"
            name='phone'
            placeholder="ex: 555-555-5555"
            value={this.state.phone}
            onChange={this.handleChange}
          />
        </div>

        <button 
        type="submit" 
        className="btn btn-dark" 
        id="run-search"
        onClick={this.send.bind(this)}
        disabled={this.submitDisabled()}>
        {/* <i className="fa fa-search"></i> */}
          CREATE ACCOUNT
        </button>
        
    </div>
    </form>
    </div>);
}

}

export default NewUser;
