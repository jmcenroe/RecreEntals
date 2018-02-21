// PDP (product detail page) for a detailed view at a listing 
// photo of item for rent, title, description, cost, seller rating 

import React, { Component } from 'react';
// import '../App.css';
// import NavBar from './header.js';
// import Row from './BSstuff.js';
// import Container from './BSstuff.js';
import './product-panel.css';
import API from '../../utils/API';

const ProductPanel = props => <div id={props.id} key={props.index}>
                <div className = "row productRow">
                            <div className="col col-4 col-xs-12 imgCol">
                                <img src={props.imageURL} alt={props.itemName} className="productImage"/>
                            </div>
                        
                            <div id={props.id} key={props.index} className="col col-4 col-xs-6 productInfo">
                                <h3>{props.itemName}</h3>
                                <h4>{props.itemDescription}</h4>
                            </div>
                            <div className="col col-4 col-xs-6 productPrice">
                                <div className="row align-left">{props.hourly !== null ? '$' + props.hourly +'/hr' : 'Hourly price not available.'}</div>
                                <div className="row align-left">{props.daily !== null ? '$' + props.daily +'/day' : 'Daily price not available'}</div>
                                <div className="row align-left">{props.weekly !== null ? '$' + props.weekly +'/week' : 'Weekly price not available'}</div>
                                <div className="row align-left">{props.monthly !== null ? '$' + props.monthly +'/month' : 'Monthly price not available'}</div>
                            </div>
                  </div>
            </div>



export default ProductPanel;

