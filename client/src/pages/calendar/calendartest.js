import React, { Component } from "react";
import Container from "../../components/container";
import NewProductForm from "../../components/newproduct";
import API from '../../utils/API';
import DayPickerInput from 'react-day-picker/DayPickerInput'
import { isUndefined } from "util";
import './calendar.css';
import 'react-day-picker/lib/style.css';

import MomentLocaleUtils, {
    formatDate,
    parseDate,
  } from 'react-day-picker/moment';

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

    render(){ 
        return (
            <div>
              <DayPickerInput
                formatDate={formatDate}
                parseDate={parseDate}
                placeholder='Choose Date: MM/DD/YYYY'
              />
            </div>
          );
    }
}

export default CalendarPage;
