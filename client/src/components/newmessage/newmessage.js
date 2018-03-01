import React, {Component} from "react";
import { Link } from "react-router-dom";
import "./newmessage.css";
import logo from '../../assets/img/recre-entals-black.gif';
import API from '../../utils/API';
// white logo commented out for now
// import logoWhite from '../../assets/img/recre-entals-white.gif';

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const NewMessage = props =>  
    <div className="newMessageContainer">
      <form className="newmessage">
          <textarea
                  type="text"
                  className="form-control"
                  id="newMessage"
                  placeholder='New Message'
                  name='newMessage'
                  value={props.newMessage}
                  onChange={props.handleChange}
                ></textarea>
        
            <button 
            style={{float: 'right'}}
            type="submit" 
            className="btn btn-mine" 
            id="run-search"
            onClick={props.send}
            >
              Send Message
            </button>
            

      </form>
    </div>;




export default NewMessage;
