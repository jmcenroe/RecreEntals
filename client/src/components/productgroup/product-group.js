// PDP (product detail page) for a detailed view at a listing 
// photo of item for rent, title, description, cost, seller rating 

import React, { Component } from 'react';
// import '../App.css';
// import NavBar from './header.js';
// import Row from './BSstuff.js';
// import Container from './BSstuff.js';
import API from '../../utils/API';
import ProductPanel from '../productpanel';

class ProductGroup extends Component {

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
            }, () => {
                console.log(this.state);
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
                    return (<ProductPanel 
                                {...this.props}
                                id={item.id}
                                index={item.index}
                                userid={item.userid}
                                itemName={item.itemName}
                                itemDescription={item.itemDescription}
                                hourly={item.hourly}
                                daily={item.daily}
                                weekly={item.weekly}
                                monthly={item.monthly}
                                imageURL={item.imageURL}
                                userId={item.User.id}
                                userName={item.User.displayName}
                                userImage={item.User.imageURL}
                                profileDisabled='false'
                                
                            />
                    )
                })}
            </div>
        );
    }
}

export default ProductGroup;

