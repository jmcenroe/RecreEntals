import React, {Component} from "react";
import { Link } from "react-router-dom";
import "./newmessage.css";
import logo from '../../assets/img/recre-entals-black.gif';
import API from '../../utils/API';
// white logo commented out for now
// import logoWhite from '../../assets/img/recre-entals-white.gif';

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
class NewMessage extends Component {

  constructor(props) {
    super(props);
    this.props = props;
}

handleChange = event => {
  console.log('Trying to get here');
  this.setState({
      [event.target.id]: event.target.value
  })
}

state = {
  newMessage: ''
}

send = event => {
  event.preventDefault();
  let sendData = {
      message: this.state.newMessage,
      ConversationId:  this.props.conversationId,
      authorId: this.props.userid
  }

  console.log(sendData);

  API.newMessage(sendData)
      .then(() => {
          console.log('response')
          if (this.props.checkData) {
                    
          this.props.checkData();
          }
          
      });
  this.setState({
      newMessage: ''
  })
}
  
  render() {
    console.log('loading component');
    return <div className="newMessageContainer">
      <form className="newmessage">
          <textarea
                  type="text"
                  className="form-control"
                  id="newMessage"
                  placeholder='New Message'
                  name='newMessage'
                  value={this.state.newMessage}
                  onChange={this.handleChange}
                ></textarea>
        
            <button 
            style={{float: 'right'}}
            type="submit" 
            className="btn btn-mine" 
            id="run-search"
            onClick={this.send}
            >
              Send Message
            </button>
            

      </form>
    </div>;

  }
}


export default NewMessage;
