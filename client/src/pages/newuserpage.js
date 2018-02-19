import React, { Component } from "react";
import Container from "../components/container";
import NewUserForm from "../components/newuser";


class NewUserPage extends Component {
  
  constructor(props) {
    super(props);
    this.props = props;
}

componentDidMount() {
 
}


  render() {
    return (
      <Container>
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title"><strong><i className="fa  fa-list-alt"></i>   New User</strong></h3>
          </div>
          <div className="panel-body">
            
            <NewUserForm/>
          </div>
        </div>
        
      </Container>
    );
  }
}

export default NewUserPage;
