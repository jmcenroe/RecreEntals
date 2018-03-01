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

  this.setState({
      [event.target.id]: event.target.value
  })
}

state = {
  newMessage: ''
}

send = event => {
  event.preventDefault();

  if (this.props.conversationId)
 {
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
else {
 var firstId=null,
     secondId=null;

    if (this.props.userid<this.props.toId) {
      firstId= this.props.userid;
      secondId=this.props.toId;
    }
    else {
      firstId= this.props.toId;
      secondId=this.props.userid;
    }
  let conversationData = {
    user1Id: firstId,
    user2Id: secondId
       
  }
  console.log(conversationData);
  API.startConversation(conversationData)
    .then((data) => {
      let messageData = {
        message: this.state.newMessage,
        ConversationId:  data.data.id,
        authorId: this.props.userid
    }

    API.newMessage(messageData)
      .then(() => {
          console.log('response')
          if (this.props.checkData) {
                    
          this.props.checkData();
          }
          else {
            this.props.clearMessage();
          }
      });
  this.setState({
      newMessage: ''
  })
      
    })
}

}
  
  render() {
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
