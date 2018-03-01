// PDP (product detail page) for a detailed view at a listing 
// photo of item for rent, title, description, cost, seller rating 

import React, { Component } from 'react';
// import '../App.css';
// import NavBar from './header.js';
// import Row from './BSstuff.js';
// import Container from './BSstuff.js';
import './message-panel.css';

const MessagePanel = props => 
    <div id={props.index} className='message-container'>
        <div className={props.active ? 'message' : 'message not-active'}>
            <span className='messageBox'>
                <span className={props.active ? 'user active-user': 'user'}>{props.author} ({props.messageTime})</span>
                <span className='messageText'>:{props.message}</span>
            </span>
        </div>
    </div>

export default MessagePanel;

