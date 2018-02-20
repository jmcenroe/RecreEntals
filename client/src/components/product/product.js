import React, { Component } from 'react';
// import '../App.css';
import logo from '../../assets/img/recre-entals-black.gif';
import './product.css';

class Product extends Component{
    render(){
        return(
            <div className="col-xs-6 col-s-6 col-md-4 col-lg-3 product">
                <a href="#"><img src="http://via.placeholder.com/100x100" /></a>
                
                <h3>Title</h3>
            </div>
        );
    }
}

export default Product;