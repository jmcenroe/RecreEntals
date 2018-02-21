// PDP (product detail page) for a detailed view at a listing 
// photo of item for rent, title, description, cost, seller rating 

import React, { Component } from 'react';
// import '../App.css';
// import NavBar from './header.js';
// import Row from './BSstuff.js';
// import Container from './BSstuff.js';
import './product-panel.css';
import API from '../../utils/API';

class ProductPanel extends Component {

    constructor(props) {
        super(props);
        this.props = props;
        
    }

    state = {
        products: []
    }

    componentDidMount() {
        API.getProductByCategory(this.props.category).then((data) => {
            this.setState({
                products: data.data
            });
        });
    }

    displayCategory(category) {

        API.getProductByCategory(category)
            .then((data) => {
                return this.showProducts(data.data);                
            });
    }

    render() {
        return(
            <div> 
                {this.state.products.map((item,index) => {
                    return (
                        <div className = "row productRow">
                            <div className="col col-4 col-xs-12 imgCol">
                                <img src={item.imageURL} alt={item.itemName} className="productImage"/>
                            </div>
                        
                            <div id={item.id} key={index} className="col col-4 col-xs-6 productInfo">
                                <h3>{item.itemName}</h3>
                                <h4>{item.itemDescription}</h4>
                            </div>
                            <div className="col col-4 col-xs-6 productPrice">
                                <div className="row align-left">{item.hourly !== null ? '$' + item.hourly +'/hr' : 'Hourly price not available.'}</div>
                                <div className="row align-left">{item.daily !== null ? '$' + item.daily +'/day' : 'Daily price not available'}</div>
                                <div className="row align-left">{item.weekly !== null ? '$' + item.weekly +'/week' : 'Weekly price not available'}</div>
                                <div className="row align-left">{item.monthly !== null ? '$' + item.monthly +'/month' : 'Monthly price not available'}</div>
                            </div>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default ProductPanel;

