import React, { Component } from 'react';
import '../App.css';
import logo from '../assets/img/recre-entals-black.gif';

class About extends Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="col-lg"><h4>Chris Clark</h4></div>
                        <div className="col-lg"><h4>Daniel John</h4></div>
                        <div className="col-lg"><h4>Jarrod McEnroe</h4></div>
                        <div className="col-lg"><h4>Tori Smith</h4></div>
                    </div>
                </div>
            </div>

        );
    }
}

export default About;