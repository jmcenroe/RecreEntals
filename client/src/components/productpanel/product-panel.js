// PDP (product detail page) for a detailed view at a listing 
// photo of item for rent, title, description, cost, seller rating 

import React, { Component } from 'react';
// import '../App.css';
// import NavBar from './header.js';
// import Row from './BSstuff.js';
// import Container from './BSstuff.js';
import API from '../../utils/API';

const ProductPanel = props => <div id={props.id} key={props.index}>
                
                <h2>{props.itemName}</h2>
                <p>{props.itemDescription}</p>
                <table>
                    <thead>
                        <tr>
                            <th>Hourly</th>
                            <th>Daily</th>
                            <th>Weekly</th>
                            <th>Monthly</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{props.hourly !== null ? '$' + props.hourly +'/hr' : 'N/A'}</td>
                            <td>{props.daily !== null ? '$' + props.daily +'/day' : 'N/A'}</td>
                            <td>{props.weekly !== null ? '$' + props.weekly +'/week' : 'N/A'}</td>
                            <td>{props.monthly !== null ? '$' + props.monthly +'/month' : 'N/A'}</td>
                        </tr>
                    </tbody>
                </table>
            </div>




export default ProductPanel;

