import React, {Component} from "react";
import { Link } from "react-router-dom";
import "./newmessage.css";
import logo from '../../assets/img/recre-entals-black.gif';
import API from '../../utils/API';
// white logo commented out for now
// import logoWhite from '../../assets/img/recre-entals-white.gif';

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const NewMessage = props =>  
      <div>
    <form className="newmessage">
    <div className="form-row">
      <textarea
              type="text"
              style={{
                'height': '150px'
              }}
              className="form-control"
              id="newMessage"
              placeholder='New Message'
              name='newMessage'
              value={props.newMessage}
              onChange={props.handleChange}
            ></textarea>
     
        <button 
        type="submit" 
        className="btn btn-dark" 
        id="run-search"
        onClick={props.send}
        >
          Send Message
        </button>
        
    </div>
    </form>
    </div>;




export default NewMessage;
