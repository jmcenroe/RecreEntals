// PDP (product detail page) for a detailed view at a listing 
// photo of item for rent, title, description, cost, seller rating 

import React, { Component } from 'react';
// import '../App.css';
// import NavBar from './header.js';
// import Row from './BSstuff.js';
// import Container from './BSstuff.js';
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
                        <div id={item.id}>
                            <h2>{item.itemName}</h2>
                            <p>{item.itemDescription}</p>
                            <table>
                                <tr>
                                    <th>Hourly</th>
                                    <th>Daily</th>
                                    <th>Weekly</th>
                                    <th>Monthly</th>
                                </tr>
                                <tr>
                                    <td>{item.hourly !== null ? '$' + item.hourly +'/hr' : 'N/A'}</td>
                                    <td>{item.daily !== null ? '$' + item.daily +'/day' : 'N/A'}</td>
                                    <td>{item.weekly !== null ? '$' + item.weekly +'/week' : 'N/A'}</td>
                                    <td>{item.monthly !== null ? '$' + item.monthly +'/month' : 'N/A'}</td>
                                </tr>
                            </table>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default ProductPanel;

