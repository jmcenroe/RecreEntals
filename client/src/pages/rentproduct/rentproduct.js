import React, { Component } from 'react';
// import '../App.css';
import logo from '../../assets/img/recre-entals-black.gif';
import './rentproduct.css';
import API from '../../utils/API';
import ProductPanel from '../../components/productpanel';

class RentProduct extends Component{
   

    constructor(props) {
        super(props);
        this.props = props;
        this.state=this.props.location.state;
        
    }

    


componentDidMount() {
    
    API.getOneProduct(this.state.productId).then(data => {
       this.setState({
           item: data.data
       })
    });
    API.checkAuth().then(data => {
        if (data.data.auth) {
            API.getUser(data.data.id).then(data => {
                this.setState({
                    form: {
                        name: data.data.displayName,
                        email: data.data.email,
                        phone: data.data.phone,
                        message: ''
                    }
                });
            })
        }
        else {
            this.setState({
                form: {
                    name: '',
                    email: '',
                    phone: '',
                    message: ''
                }
            })
        }
    })
}

handleChange = event => {
    let statedata = this.state.form;
    statedata[event.target.name]=event.target.value;
    this.setState({
    form: statedata
    
  });
  }  

  checkemail() {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.form.email)) {
      return '';
    }
    return 'Not a valid email address';
  }

  checkphone() {
      if(this.state.form.phone){
        if (this.state.form.phone.match(/\d/)){
            if (this.state.form.phone.match(/\d/g).length===10) {
                return '';
            }
        }
        return 'Not a valid phone number';
    }
  }

  send = event => {
      event.preventDefault();
      let data = this.state.form;
      data.toEmail = this.state.item.User.email;
      data.product = this.state.item.itemName;

      if (data.phone === '') {
          data.phone = 'Not Provided'
      }

      if (data.email === '') {
        data.email = 'Not Provided'
    }

      API.sendMessage(data).then(data => {
          //Add flash message later
      });

  }

  submitDisabled() {
      //Name and message required
      if (this.state.form.name === '' || this.state.form.message === '') {
          return true;  
      }

    //   At least one of phone or email required
      if (this.state.form.phone === '' && this.state.form.email === '') {
          return true;
      }

      //Check for valid form entries
      if(this.checkemail() !== '' || this.checkphone() !== '') {
          return true;
      }

      //All conditions met
      return false;
  }

 


    render(){
        console.log(this.state);
        return(
            <div className="d-flex container-fluid" id="rentForm">
            {this.state.item ?
               <ProductPanel 
                    {...this.props}
                    id={this.state.item.id}
                    index={this.state.item.index}
                    userid={this.state.item.userid}
                    itemName={this.state.itemName}
                    itemDescription={this.state.item.itemDescription}
                    hourly={this.state.item.hourly}
                    daily={this.state.item.daily}
                    weekly={this.state.item.weekly}
                    monthly={this.state.item.monthly}
                    imageURL={this.state.item.imageURL}
                    userId={this.state.item.User.id}
                    userName={this.state.item.User.displayName}
                    userImage={this.state.item.User.imageURL}
                    profileDisabled='true'
                    rentDisabled='true'
                    
                />
                : ''}
                {this.state.form ? <div className="row">
                <form className="search">
                <div className="col">
                    <div className="form-row">
                        <label htmlFor="displayName">Name*</label>
                        <input
                            type="text"
                            className="form-control"
                            name='name'
                            value={this.state.form.name}
                            onChange={this.handleChange}
                        />
                        </div>
                        <div className="form-row">
                        <div className="form group">
                        <label htmlFor="email">Email
                            <span style={{
                                color: 'red',
                                paddingLeft: '25px'}}>
                                {this.state.form.email !== ''  ? 
                                this.checkemail() : ''}
                            </span>  
                        </label>  
                        <input
                            type="text"
                            className="form-control"
                            id="emailInput"
                            name='email'
                            placeholder="example@email.com"
                            value={this.state.form.email}
                            onChange={this.handleChange}
                        />
                        </div>
                        <div className="form-group">
                        <label htmlFor="phone">Phone Number
                                <span style={{
                                color: 'red',
                                paddingLeft: '25px'}}>
                                {this.state.form.phone !== '' ? 
                                this.checkphone() : ''}
                            </span>  
                        </label>  
                        <input
                            type="tel"
                            className="form-control"
                            name='phone'
                            placeholder="ex: 555-555-5555"
                            value={this.state.form.phone}
                            onChange={this.handleChange}
                        />
                        </div>
                    </div>
                    </div>
                    <div className="col">
                        <div className="form-group">
                        <label htmlFor="message">Message*</label>
                        <textarea
                            type="text"
                            style={{
                            'height': '150px'
                            }}
                            className="form-control"
                            placeholder='Message'
                            name='message'
                            value={this.state.form.message}
                            onChange={this.handleChange}
                        ></textarea>
                    </div>

                    <button 
                    type="submit" 
                    className="btn btn-dark" 
                    id="run-search"
                    onClick={this.send.bind(this)}
                    disabled={this.submitDisabled()}>
                    
                    SEND MESSAGE
                    </button>
                    </div>
                
            </form>
            </div>
            : '' }
               
            </div>
        );
    }
}

export default RentProduct;