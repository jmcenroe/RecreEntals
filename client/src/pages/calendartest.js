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
        month: null,
        startDate: new Date()
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

    calendarChange = date => {
        
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
                        <input type='text' 
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
                        </div>;
    }
}

export default CalendarPage;
