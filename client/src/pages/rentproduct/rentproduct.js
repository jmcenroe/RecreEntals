import React, { Component } from 'react';
// import '../App.css';
import logo from '../../assets/img/recre-entals-black.gif';
import './rentproduct.css';
import API from '../../utils/API';
import ProductPanel from '../../components/productpanel';
import Calendar from '../../components/calendar';

class RentProduct extends Component{
   

    constructor(props) {
        super(props);
        this.props = props;
        this.state=this.props.location.state;
        
    }

    


componentDidMount() {
    
    API.getOneProduct(this.state.productId).then(data => {
       this.setState({
           item: data.data
       })
    });
    API.checkAuth().then(data => {
        if (data.data.auth) {
            this.setState({
                auth: true,
                userid: data.data.id
            })
        }
        else {
            this.setState({
                auth: false
            })
        }
    })
}

    render(){
        console.log(this.state);
        return(
            <div className="d-flex container-fluid" id="rentForm">
            {this.state.item ?
               <ProductPanel 
                    {...this.props}
                    id={this.state.item.id}
                    index={this.state.item.index}
                    userid={this.state.item.userid}
                    itemName={this.state.itemName}
                    itemDescription={this.state.item.itemDescription}
                    hourly={this.state.item.hourly}
                    daily={this.state.item.daily}
                    weekly={this.state.item.weekly}
                    monthly={this.state.item.monthly}
                    imageURL={this.state.item.imageURL}
                    userId={this.state.item.User.id}
                    userName={this.state.item.User.displayName}
                    userImage={this.state.item.User.imageURL}
                    profileDisabled='true'
                    rentDisabled='true'
                    
                />
                : ''}

                {this.state.auth ? 
                <Calendar 
                    productId={this.state.productId}
                    userId={this.state.userid}
                    />
                : <h1>You have to be logged in to make a reservation for this product</h1>}
                

                
               
            </div>
        );
    }
}

export default RentProduct;