import React, { Component } from 'react';

class Row extends Component{
    render(){
        return(
            <div className = {this.props.classes + " row"} />
        );
    }
}

class Column extends Component{
    render(){
        return(
            <div className = {this.props.classes + " col"} />
        );
    }
}

class Container extends Component{
    render(){
        return(
            <div className = {this.props.classes + " container"} />
        );
    }
}

export function Row();
export function Column();
export function Container();

export default {Row, Column, Container};