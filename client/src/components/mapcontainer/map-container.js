import React, { Component } from 'react';
import ReactDOM from 'react-dom'

export default class MapContainer extends Component {

  componentDidUpdate() {
    this.loadMap(); 
  }

  loadMap() {
    if (this.props && this.props.google) { // checks to make sure that props have been passed
      const {google} = this.props;
      const maps = google.maps; // 

      const mapRef = this.refs.map; // looks for HTML div ref 'map'. Returned in render below.
      const node = ReactDOM.findDOMNode(mapRef); // finds the 'map' div in the React DOM, names it node

      const mapConfig = Object.assign({}, {
        center: {lat: 32.881907, lng: -117.243544}, 
        zoom: 13,
      })

      this.map = new maps.Map(node, mapConfig); // creates a new Google map on the specified node (ref='map') with the specified configuration set above.

    }
  }

  render() {
    const style = { 
      width: '30vw', // map takes up 30% of the width screen
      height: '25vh' // map takes roughly 25% of the height of the screen
    }

    return ( 
      <div ref="map" style={style}>
        loading map...
      </div>
    )
  }
}