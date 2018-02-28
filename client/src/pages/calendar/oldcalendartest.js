import React, { Component } from "react";
import Container from "../../components/container";
import NewProductForm from "../../components/newproduct";
import API from '../../utils/API';
import Calendar from 'react-calendar';
import { isUndefined } from "util";
import './calendar.css';

class CalendarPage extends Component {

    state = {
        dateRange: [new Date()],
        productId: 1,
        productReservations: [],
        month: null,
        startDate: new Date(),
        endDate: undefined
    }

    componentDidMount() {
        API.getReservations(this.state.productId)
            .then(data => {
                console.log(data);
                this.setState({
                    productReservations: data.data
                }, () => {
                    console.log(this.state);
                })
            })
    }


    datacheck = data => {
        console.log(data);
    }

    eventHandler = event => {

        this.setState({
            [event.target.name]: event.target.value
        })
    }

    calendarChange = (date,view) => {

       
        this.setState({
            startDate: date
        })
    }

    checkDate(dateObject) {
        
       for (let i=0; i<this.state.productReservations.length; i++) {
           let start = new Date(this.state.productReservations[i].startTime),
               end = new Date(this.state.productReservations[i].endTime)

           if (dateObject.date >= start && dateObject.date <= end) {
               return true;
           }
       }

        return false;
        
    }

    render(){ return <div className='Container'>
                        <div className='row'>
                            <div className='col-sm-6'>
                                <input type='date' 
                                    name='startDate'
                                    value={this.state.startDate}
                                    onChange={this.eventHandler}
                                    style={{
                                        'width': '200px'
                                    }}              
                                />    
                     
                                <Calendar
                                    value={this.state.startDate}
                                    showNeighboringMonth={false}
                                    calendarType='US'
                                    minDate={new Date()}
                                    maxDetail='month'
                                    returnValue='start'
                                    onChange={this.calendarChange}
                                    tileDisabled={this.checkDate.bind(this)}
                                    />
                                </div>
                                {/* {this.state.startDate ?
                                <div className='col-sm-6'>
                                <input type='text'
                                    name='endDate' 
                                    value={this.state.endDate}
                                    onChange={this.eventHandler}
                                    style={{
                                        'width': '200px'
                                    }}
                                />        
                                <Calendar
                                    value={this.state.endDate}
                                    showNeighboringMonth={false}
                                    calendarType='US'
                                    minDate={new Date()}
                                    maxDetail='month'
                                    returnValue='end'
                                    onChange={this.calendarChange}
                                    tileDisabled={this.checkDate.bind(this)}
                                    />
                                </div>
                                : '' } */}
                            </div>
                        </div>;
    }
}

export default CalendarPage;
