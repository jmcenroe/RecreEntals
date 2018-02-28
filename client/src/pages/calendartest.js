import React, { Component } from "react";
import Container from "../components/container";
import NewProductForm from "../components/newproduct";
import API from '../utils/API';
import Calendar from 'react-calendar';

class CalendarPage extends Component {

    state = {
        dateRange: [new Date()],
        productId: 1,
        productReservations: [],
        month: null
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


    eventHandler = daterange => {
        let reject = false;
        //valdiate that selection doesn't overlap another reservation
        for(let i=0; i<this.state.productReservations.length; i++) {
            let start = new Date(this.state.productReservations[i].startTime);

            if (start >= daterange[0] && start <= daterange[1]) {
                alert('You have overlapped a pre-existing reservation, please select again');
                reject=true;

            }
        }
      
        if (!reject) {
            this.setState({
                dateRange: daterange
            }, () => {
                console.log(this.state);
            })
        }
        else {
            this.setState({
                dateRange: []
            })
        }
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

    render(){ return <Calendar
                                showNeighboringMonth={false}
                                calendarType='US'
                                minDate={new Date()}
                                maxDetail='month'
                                returnValue='range'
                                selectRange={true}
                                onChange={this.eventHandler}
                                onClick={this.datacheck}
                                tileDisabled={this.checkDate.bind(this)}
                                />;
    }
}

export default CalendarPage;
