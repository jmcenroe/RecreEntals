import React, { Component } from 'react';
<<<<<<< HEAD:client/src/components/product.js
import '../App.css';
import logo from '../assets/img/recre-entals-black.gif';
=======
import './product.css';
>>>>>>> f0e05b649d12378e666f87200bd95603e0f9f1f5:client/src/components/product/product.js

class Product extends Component{
    render(){
        return(
            <div className="col-xs-6 col-s-6 col-md-4 col-lg-3 product">
                <a href="#"><img src="http://via.placeholder.com/150x150" /></a>
            </div>
        );
    }
}

export default Product;