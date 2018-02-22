import React, { Component } from 'react';
// import '../App.css';
import logo from '../../assets/img/recre-entals-black.gif';
import './product-search.css';
import API from '../../utils/API';
import ProductPanel from '../../components/productpanel';

class ProductSearch extends Component{

state = {
    searchTerm: '',
    searchresults: []
}

componentDidMount() {
    console.log(this.state);
}

handleChange = event => {
    this.setState({
    [event.target.name]: event.target.value
  });
  }  

  search = event => {
    event.preventDefault();
    API.searchItem(this.state.searchTerm)
      .then((data) => {
       this.setState({
        searchresults: data.data
       }, () => {
           console.log(this.state);
       });
      })
  }


    render(){
        return(
            <div>
                <h2> Product Search </h2>
                    <form>
                <input
                    type="text"
                    className="form-control"
                    name='searchTerm'
                    value={this.state.searchTerm}
                    onChange={this.handleChange}
                    />
                    <button type='submit' onClick={this.search.bind(this)}>Go</button>
                    </form>

                    {this.state.searchresults.length>0 
                    ? this.state.searchresults.map((item,index) =>{ 
                        console.log(item.User);
                    return <ProductPanel 
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
                    {...this.props}
                />
                    })
                    : 'No Products' }
            </div>
        );
    }
}

export default ProductSearch;