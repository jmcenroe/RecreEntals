// product grid of all products for rent 

import React, { Component } from 'react';
<<<<<<< HEAD:client/src/components/all-products.js
import Product from './product';
import '../App.css';
import logo from '../assets/img/recre-entals-black.gif';
=======
import Product from '../product';
import './all-products.css';
>>>>>>> f0e05b649d12378e666f87200bd95603e0f9f1f5:client/src/components/allproducts/all-products.js

function loopReturn(){
    let toReturn = [];

    for(let i=0; i<10; i++){
        toReturn.push(<Product />);
    }

    return toReturn;
}

class AllProducts extends Component{
    render(){
        return(
            <div className="container products">
                <h1>Products</h1>
                <div className = "row productRow"> 
                    {loopReturn()}
                </div>
            </div>
        );
    }
}

export default AllProducts;