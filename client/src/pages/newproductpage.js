import React, { Component } from "react";
import Container from "../components/container";
import NewProductForm from "../components/newproduct";
import API from '../utils/API';


class NewProductPage extends Component {
  
  constructor(props) {
    super(props);
    this.props = props;
}

state = {
    auth: true,
    userid: 2
}

componentWillMount() {
    // API.checkAuth().then((data)=> {
    //     let statedata = {}
    //     if(data.data.auth) {
    //         statedata.userid=data.data.id;
    //     }
    //     statedata.auth=data.data.auth;
    //     this.setState(statedata,() =>{
    //     });
    // })
}


  render() {
    return (
      <Container>
        {this.state.auth ? 
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title"><strong><i className="fa  fa-list-alt"></i>   New Product</strong></h3>
          </div>
          <div className="panel-body">
            
            <NewProductForm
                userid={this.state.userid}/>
          </div>
        </div>
        : <h1> You must be signed in to add a product</h1>}
        
      </Container>
    );
  }
}

export default NewProductPage;
