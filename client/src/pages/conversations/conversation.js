import React, { Component } from "react";
import Container from "../../components/container";
import API from '../../utils/API';
import NewMessage from '../../components/newmessage';
import MessagePanel from '../../components/messagepanel';
import './conversation.css';

class Conversation extends Component {
  
  constructor(props) {
    super(props);
    this.props = props;
}

state = {
    userid: undefined,
    clearInterval: null,
    auth: false,
    conversations: []
}

componentWillMount() {
    API.checkAuth()
        .then((data)=> {
            if(data.data.auth) {
                this.setState({
                    userid: data.data.id,
                    auth: true
                }, () => {
                    console.log('getting here');
                    this.checkData();

                });
            }
            
        })
    

    // //Set up db listener via setInterval
    // if (this.state.clearInterval === null){

    //     let intervalVar = setInterval(this.checkData.bind(this),10000);

    //     this.setState({
    //         clearInterval: intervalVar
    //     });
    // }

    
    
}

componentWillUnmount() {
    // clearInterval(this.state.clearInterval);
}

checkData () {
    console.log('checking data');
    API.getAllConversations(this.state.userid)
        .then(data => {
            if (this.state.conversations.length < data.data.length) {
                this.setState({
                    conversations: data.data
                })
            }
        })
}

goToConversation = event => {
    this.props.history.push({
        pathname: '/message',
        state: {
            conversationId: parseInt(event.target.getAttribute('data-id')),
            conversation: {
                Messages: []
            },
            newMessage: '',
            userid: parseInt(this.state.userid),
            clearInterval: null
        }
    })
}

displayConversations() {
    // return <div>Here I am</div>;
    return this.state.conversations.map((item, index) => {
        //Determine if user info is user1 or user2
        const isUser1 = item.user1.id === this.state.userid;
        return <div className="row convoRow" key={index} data-id={item.id} onClick={this.goToConversation.bind(this)}>
                <div className = "col"> <img className ="convoAva" src={isUser1 ? item.user2.imageURL : item.user1.imageURL} data-id={item.id} alt='profile'/> </div>
                <div className = "col"> {isUser1 ? item.user2.displayName : item.user1.displayName}  </div>
                </div>;
    });
}








  render() {
      console.log(this.state);
    return (
        <div className="convos">{this.state.auth ? 
                this.state.conversations.length>0 ? this.displayConversations() : 'No conversations to display' 
                : 'You must be signed in to use messenger'}
        
        </div>
      );
  }
}

export default Conversation;
