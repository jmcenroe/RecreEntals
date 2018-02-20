// product grid of all products for rent 

import React, { Component } from 'react';
import Product from '../product';
import ProductPanel from '../productpanel';
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
        let categorylist = [];
        let categorynum = [];
        API.getCategories().then((data) => {
            console.log(data.data);
            for (let i=0; i<data.data.count.length; i++) {
                categorylist.push(data.data.rows[i]);
                categorylist[i].display = false;
                categorynum.push(data.data.count[i].count);
            }

           

            this.setState({
                categories: categorylist,
                categoryCount: categorynum
            }, () => {
                console.log(this.state);

            });
        });

    }

    productClick(event) {
        const index = parseInt(event.target.id.slice(8,event.target.id.length));

        let data = this.state.categories;

        if (data[index].display === true) {
            data[index].display = false;
        }
        else {
            data[index].display = true;
        }

        this.setState({
            categories: data
        });

       
    }

    displayCategory(category) {

        API.getProductByCategory(category)
            .then((data) => {
                return this.showProducts(data.data);                
            });
    }

    showProducts(data) {
        let html = [];
        data.map((item,index) => {
            html.push(<ProductPanel {...item}/>);
        });

        console.log(html);
        
        return html;
    }

    allCategoryDisplay() {
        var rows = [];
        for(let i = 0; i<this.state.categories.length; i++) {
            rows.push(<div id={this.state.categories[i]}>
                        <h2 style={{'text-align': 'left'}}>
                            <span 
                                className='category' 
                                onClick={this.productClick.bind(this)}
                                id={'category' + i}>
                            {this.state.categories[i].category}({this.state.categoryCount[i]})
                            </span>
                        </h2>
                        {this.state.categories[i].display ? 
                        <ProductPanel category={this.state.categories[i].category}/> : ''}
                    </div>);
        }

        return rows;
    }


    render(){
        return(
            <div className="container products">
                <h1>Products By Category</h1>
                {this.allCategoryDisplay()}
            </div>
        );
    }
}

export default AllProducts;