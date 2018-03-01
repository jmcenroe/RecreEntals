import React, { Component } from 'react';
// import '../App.css';
import logo from '../../assets/img/recre-entals-black.gif';
import './product-search.css';
import API from '../../utils/API';
import ProductPanel from '../../components/productpanel';
import mapcontainer from '../../components/mapcontainer';

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
            <div className="searchFlex container-fluid">
                {/* <h2><i className="fas fa-search"></i> Product Search</h2> */}
                <div className="row searchRow d-flex">
                    <form id="searchbar">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search all items for your next rental..." 
                        name='searchTerm'
                        value={this.state.searchTerm}
                        onChange={this.handleChange}
                    />
                    <div className="row d-flex" id="buttonRow">
                        <button className="btn btn-mine" type='submit' id="searchButton" onClick={this.search.bind(this)}>Search</button>
                    </div>
                    </form>
                </div>

                        {this.state.searchresults.length>0 
                        ? this.state.searchresults.map((item,index) =>{ 
                            console.log(item.User);
                        return <ProductPanel 
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
                        })
                        : 'No rentals were found. Try again.' }
                </div>
            
        );
    }
}

export default ProductSearch;