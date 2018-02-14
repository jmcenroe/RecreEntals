// product grid of all products for rent 

import React, { Component } from 'react';
import Product from './product';
import '../App.css';
import logo from '../assets/img/recre-entals-black.gif';

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