import React, { Component } from 'react';
import logo from '../../assets/img/recre-entals-black.gif';
import './home.css';

class Home extends Component{
    render(){
        return(
            <div className="container-fluid">
                <h2>Browse by Category</h2>
                <h3>Small Sporting Goods</h3>
                <p><i className="fas fa-football-ball"></i></p>
                <h3>Snow Equipment</h3>
                <p><i className="fas fa-snowflake"></i></p>
                <h3>Snow Equipment</h3>
                <p><i className="fas fa-snowflake"></i></p>
                <h3>Snow Equipment</h3>
                <p><i className="fas fa-snowflake"></i></p>
                <h3>Snow Equipment</h3>
                <p><i className="fas fa-snowflake"></i></p>
            </div>
        );
    }
}

export default Home;