// product grid of all products for rent 

import React, { Component } from 'react';
import ProductGroup from '../productgroup';
// import '../App.css';
import logo from '../../assets/img/recre-entals-black.gif';
// import Product from '../product';
import './all-products.css';

import API from '../../utils/API';

class AllProducts extends Component{

    state = {
        categories: [],
        categoryCount: []
    }

    componentDidMount() {
        console.log('Making call');
        let categorylist = [];
        let categorynum = [];
        API.getCategoriesWithCount().then((data) => {
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
        const index = parseInt(event.target.getAttribute('data-id'));

        //App throws an error if event is clicked before everything is built, ignore if data doesn't render properly
        if (!isNaN(index)) {

        
        let data = this.state.categories;
        console.log(index);
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

       
    }



    allCategoryDisplay() {
        var rows = [];
        for(let i = 0; i<this.state.categories.length; i++) {
            rows.push(<div>
                        <div id={this.state.categories[i]} data-id={i} className="row categoryRow" onClick={this.productClick.bind(this)}>
                    
                            <div className="col d-flex leftCol"  data-id={i}>
                                <h2><img data-id={i} src={this.state.categories[i].Category.imageURL} className="categoryIcon"/></h2>
                            </div>
                            <div className="col d-flex rightCol category" 
                                data-id={i}>
                                <h3 data-id={i}>

                                    
                                    {this.state.categories[i].category}
                                    ({this.state.categoryCount[i]})
                                </h3>
                            </div>
                        
                    </div>
                        <div>
                            {this.state.categories[i].display ? 
                            <ProductGroup category={this.state.categories[i].category} {...this.props}/> : ''}
                        </div>
                    </div>
                    );
        }

        return rows;
    }

    authenticate () {
       API.checkAuth().then((data) => {
           
         if(!data.data.auth) {
             alert('You must be signed in to add a product for rent.');
         }
         else {
             this.props.history.push({
                 pathname: '/newproduct'
             })
         }
       });
    }


    render(){
        return(
            <div className="container products">
                <div className = "row d-flex">
                    <div className = "col col-12 align-self-center">
                        <h2>Browse Rentals by Category</h2>
                    </div>
                    <div className="col align-self-center">
                        <button className="btn btn-mine" id="add"
                         onClick={this.authenticate.bind(this)}><i className="fas fa-plus"></i> Add Product</button>
                    </div>
                </div>
                
                {this.allCategoryDisplay()}
            </div>
        );
    }
}

export default AllProducts;