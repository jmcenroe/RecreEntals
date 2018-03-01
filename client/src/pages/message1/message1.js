import React, { Component } from "react";
import API from '../../utils/API';
import NewMessage from '../../components/newmessage';
import MessagePanel from '../../components/messagepanel';
import Moment from 'moment';


class Message2 extends Component {
  
  constructor(props) {
    super(props);
    this.props = props;
    
}

state= {
    conversationId: this.props.conversationId,
    conversation: {
        Messages: []
    },
    newMessage: '',
    userid: this.props.userid,
    clearInterval: null
}



componentWillMount() {
    console.log(this.state);
    API.checkAuth()
        .then((data)=> {
            this.setState({
                userid: data.data.id
            })
        })
    this.checkData();

    //Set up db listener via setInterval
    if (this.state.clearInterval === null){

        let intervalVar = setInterval(this.checkData.bind(this),10000);

        this.setState({
            clearInterval: intervalVar
        });
    }

    
    
}

componentWillUnmount() {
    clearInterval(this.state.clearInterval);
}

checkData() {
    console.log('Getting data');
    API.getConversation(this.state.conversationId)
        .then(data => {
            //Check to see if db state is different than page state, if so update
            
            if (this.state.conversation.Messages.length !== data.data.Messages.length) {
                this.setState({
                    conversation: data.data
                });
            }
    });
}

handleChange = event => {
    this.setState({
        [event.target.id]: event.target.value
    })
}

send = event => {
    event.preventDefault();
    let sendData = {
        message: this.state.newMessage,
        ConversationId:  this.state.conversationId,
        authorId: this.state.userid
    }

    console.log(sendData);

    API.newMessage(sendData)
        .then((response) => {
            console.log('getting response');
            console.log(response);
            this.checkData();
            
        });
    this.setState({
        newMessage: ''
    });
}

formatTime(time) {
    var date = Moment(time).format('MMM Do, h:mm');
    
    return date;
}


  render() {
    return (
        <div className='container' style={{height: '100%'}}>
          <div className='container allMessages' style={{"max-height": "200px", "overflow": "auto"}}>
              { this.state.conversation.Messages
              ? this.state.conversation.Messages.map((item,index) => {
                  let activeUser=item.authorId === this.state.userid;
                  return <MessagePanel 
                              active={activeUser}
                              author={item.authorId === this.state.conversation.user1Id ? 
                                      this.state.conversation.user1.displayName:
                                      this.state.conversation.user2.displayName}
                              messageTime={this.formatTime(item.createdAt)}
                              message={item.message}
                              index={index}
                              />
              })
              : ''}
            <hr style={{"margin-top": "0", "margin-bottom": "0.5em"}}/>
            <button class="btn-mine" id="close" onClick={this.props.clear}>Close</button>

          </div>
              <NewMessage
                  checkData={this.checkData.bind(this)}
                  conversationId={this.state.conversationId}
                  userid={this.state.userid}
                  />
          
        </div>
      );
  }
}

export default Message2;
