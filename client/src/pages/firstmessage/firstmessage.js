import React, { Component } from "react";
import Container from "../../components/container";
import API from '../../utils/API';
import NewMessage from '../../components/newmessage';
import MessagePanel from '../../components/messagepanel';


class FirstMessage extends Component {
  
  constructor(props) {
    super(props);
    this.props = props;
}

state = {
    conversation: {
        Messages: []
    },
    conversationId: 1,
    newMessage: '',
    userid: 2,
    clearInterval: null
}

componentWillMount() {
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
                })
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
        .then(() => {
            console.log('response')
            this.checkData();
            
        });
    this.setState({
        newMessage: ''
    })
}


  render() {
    return (
        <div className='container' style={{height: '100%'}}>
          <div className='container allMessages'>
              { this.state.conversation.Messages
              ? this.state.conversation.Messages.map((item,index) => {
                  let activeUser=item.authorId === this.state.userid;
                  return <MessagePanel 
                              active={activeUser}
                              author={item.authorId === this.state.conversation.user1Id ? 
                                      this.state.conversation.user1.displayName:
                                      this.state.conversation.user2.displayName}
                              messageTime={item.createdAt}
                              message={item.message}
                              index={index}
                              />
              })
              : ''}
          </div>
              <NewMessage
                  handleChange={this.handleChange.bind(this)}
                  newMessage={this.state.newMessage}
                  send={this.send.bind(this)}/>
          
        </div>
      );
  }
}

export default FirstMessage;
