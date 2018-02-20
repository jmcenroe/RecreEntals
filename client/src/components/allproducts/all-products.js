// product grid of all products for rent 

import React, { Component } from 'react';
import Product from '../product';
// import '../App.css';
import logo from '../../assets/img/recre-entals-black.gif';
// import Product from '../product';
import './all-products.css';

import API from '../../utils/API';

function loopReturn(){
    let toReturn = [];

    for(let i=0; i<10; i++){
        toReturn.push(<Product />);
    }

    return toReturn;
}

class AllProducts extends Component{

    state = {
        categories: [],
        categoryCount: []
    }

    componentDidMount() {
        console.log('Making call');
        API.getCategories().then((data) => {
            console.log(data);
        });

    }


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