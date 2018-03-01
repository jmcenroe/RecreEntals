import React, {Component} from "react";
import "./newproduct.css";
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
  categorylist: [],
  errorMessage: ''

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

send (event) {
  event.preventDefault();
  let data = this.state.item;

  //Get category id
  for(let i=0; i<this.state.categorylist.length; i++) {
    if (data.category === this.state.categorylist[i]) {
      data.CategoryId = i;
    }
  }

  // Make sure rates are numbers
  if (data.hourly !== '') {data.hourly = parseFloat(data.hourly);}
    else {data.hourly=null;}
  if (data.daily !== '') {data.daily = parseFloat(data.daily);}
   else {data.daily=null;}
  if (data.weekly !== '') {data.weekly = parseFloat(data.weekly);}
    else {data.weekly=null;}
  if (data.monthly !== '') {data.monthly = parseFloat(data.monthly);}
  else {data.monthly=null;}

  //Find active userId 
  API.checkAuth().then((userdata) => {
    if (userdata.data.auth) {
      data.UserId = userdata.data.id;
      API.addItem(data);
    }
  })
}  

handleChange = event => {
  let statedata = this.state.item;
  statedata[event.target.name] = event.target.value
  this.setState({
    item: statedata
  });

}

submitDisabled() {
  const item = this.state.item;
  
  //Check required fields
  if (item.itemName === '' || item.itemDescription === '' || item.category === '' || item.imageUrl === '' ) {
    if (this.state.errorMessage !== 'Missing Required Fields') {
      this.setState({
        errorMessage: 'Missing Required Fields'
      });
    }
    return true
  }

  //Check for at least one rate
  if (item.hourly === '' && item.daily === '' && item.weekly === '' && item.monthly === '' ) {
    if (this.state.errorMessage !== 'At least one Rate must be provided') {
      this.setState({
        errorMessage: 'At least one Rate must be provided'
      });
    }
    return true
  }

  
  //Check that rates are valid (numbers)
  if ((item.hourly !== '' && isNaN(parseFloat(item.hourly))) ||
      (item.daily !== '' && isNaN(parseFloat(item.daily))) ||
      (item.weekly !== '' && isNaN(parseFloat(item.weekly))) ||
      (item.monthly !== '' && isNaN(parseFloat(item.monthly)))) {
    if (this.state.errorMessage !== 'Entered Rates must be valid numbers') {
      this.setState({
        errorMessage: 'Entered Rates must be valid numbers'
      })
    }
    return true;
  }

  if (this.state.errorMessage !== '') {
    this.setState({
      errorMessage: ''
    })
  }
 return false;
}

  
  
  render() {
   
    return (
    <form className="search">
    
      <div className="form-group">
      <label htmlFor="itemName">Item Name*</label>
        <input
          type="text"
          className="form-control"
          placeholder="Item Name"
          name='itemName'
          value={this.state.item.itemName}
          onChange={this.handleChange}
        />
        <div className="form-group">
          <label htmlFor="itemDescription">Item Description*</label>
          <textarea
            type="text"
            style={{
              'height': '150px'
            }}
            className="form-control"
            id="description"
            placeholder='Item Description'
            name='itemDescription'
            value={this.state.item.itemDescription}
            onChange={this.handleChange}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="category">Category*</label>
              
          <select
            name='category'
            className='inline'
            value={this.state.category}
            onChange={this.handleChange}
          >
            <option selected="true" disabled="disabled">Choose Category</option>  
            {this.state.categorylist.map((item,index) => {
              return <option value={item}>{item}</option>
            })}
          </select>
          <div>
            Rates:
          </div>
          <label htmlFor="hourly" className='inline'>&nbsp;&nbsp;&nbsp;</label>
            <input
            type="text"
            className="inline-textbox"
            placeholder="$"
            name='hourly'
            value={this.state.item.hourly}
            onChange={this.handleChange}
          />
          <label htmlFor="daily">&nbsp; /hr&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input
            type="text"
            className="inline-textbox"
            placeholder="$"
            name='daily'
            value={this.state.item.daily}
            onChange={this.handleChange}
          />
          <label htmlFor="weekly">&nbsp; /day&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input
            type="text"
            className="inline-textbox"
            placeholder="$"
            name='weekly'
            value={this.state.item.weekly}
            onChange={this.handleChange}
          />
          <label htmlFor="monthly">&nbsp; /wk&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input
            type="text"
            className="inline-textbox"
            placeholder="$"
            name='monthly'
            value={this.state.item.monthly}
            onChange={this.handleChange}
          />
           <label htmlFor="monthly">&nbsp; /mo</label>
           

        </div>
        <div className="form-group">
          <label htmlFor="imageURL">Image URL*</label>
    
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
        <span style={{
                  color: 'red',
                  paddingLeft: '25px'}}>
                    {this.state.errorMessage !== '' ? 
                    this.state.errorMessage : ''}
            </span>  
        
    </div>
    </form>);

}

}

export default NewUser;
