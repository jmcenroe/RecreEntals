import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import API from '../../utils/API'

import MomentLocaleUtils, {
    formatDate,
    parseDate,
  } from 'react-day-picker/moment';

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.handleStartDayChange = this.handleStartDayChange.bind(this);
    this.handleEndDayChange = this.handleEndDayChange.bind(this);
    this.state = {
      selectedStartDay: undefined,
      selectedEndDay: undefined,
      startIsDisabled: false,
      endIsDisabled: false,
      productId: this.props.productId,
      userId: this.props.userId,
      productReservations: [],
      oneDay: false
    };
  }


  handleStartDayChange(selectedStartDay, modifiers) {
    this.setState({
      selectedStartDay,
      startIsDisabled: modifiers.disabled === true,
    });
  }

  handleEndDayChange(selectedEndDay, modifiers) {
    this.setState({
      selectedEndDay,
      endIsDisabled: modifiers.disabled === true,
    }, () => {
        console.log(this.state.selectedEndDay);
    });
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

  getStartDisabled() {
    const today = new Date();
        //Start disabled array with baseline of not allowing dates before today
      let disabledArray = [{
          before: today
      }]
      if (this.state.selectedEndDay) {
          //Don't allow user to select days after end day
          disabledArray.push({
              after: this.state.selectedEndDay
          })

        // Check reservations to see if any exist between today and selected end day to generate a new before
        for(let i=0; i<this.state.productReservations.length; i++) {
            const resEndDate = new Date(this.state.productReservations[i].endTime);
            if (this.state.selectedEndDay > resEndDate) {
                resEndDate.setDate(resEndDate.getDate() + 1);
            
                disabledArray[0].before = resEndDate;
            }
        }
                
      }
      else{
        //If no day selected in other calendar field, just block out all dates from reservations     
    
    for (let i=0; i<this.state.productReservations.length; i++) {
        let newRangeArray = {
            from: new Date(this.state.productReservations[i].startTime),
            to: new Date(this.state.productReservations[i].endTime)
        }
        disabledArray.push(newRangeArray);
    }
    
    
      }
      
    return disabledArray
    
  }

  getEndDisabled() {
    const today = new Date();
        //Start disabled array with baseline of not allowing dates before today
      let disabledArray = [{
          before: today
      }]
      //Check to see if other date field has been selected
      if (this.state.selectedStartDay) {
          //Don't allow user to select days before start day
          console.log(disabledArray);
          disabledArray[0].before = this.state.selectedStartDay
          console.log(disabledArray);

        // Check reservations to see if any exist after start day to generate an after day
        for(let i=0; i<this.state.productReservations.length; i++) {
            const resStartDate = new Date(this.state.productReservations[i].startTime);
            if (this.state.selectedStartDay < resStartDate) {
                resStartDate.setDate(resStartDate.getDate() - 1);
            
                disabledArray.push({
                    after: resStartDate
                });
            }
        }
                
      }
      else{
        //If no day selected in other calendar field, just block out all dates from reservations     
    
    for (let i=0; i<this.state.productReservations.length; i++) {
        let newRangeArray = {
            from: new Date(this.state.productReservations[i].startTime),
            to: new Date(this.state.productReservations[i].endTime)
        }
        disabledArray.push(newRangeArray);
    }
    
    
      }
      
    return disabledArray
    
  }

  disableSubmit() {
      
    if (//There must be data in first date field
        (!this.state.selectedStartDay) 
        //There must be data in second field unless checkbox for one day reservation is selected
        || (!this.state.selectedEndDay && !this.state.oneDay)
        //An invalid date can not be selected
        || (this.state.startIsDisabled || this.state.endIsDisabled)
    )
    {
        return true;
    }

      return false;
  }

  send() {
      let requestData ={
         startTime: this.state.selectedStartDay,
         ItemId: this.state.productId,
         UserId: this.state.userId 
      }
      if (this.state.oneDay) {
          console.log(requestData.startTime);
          requestData.endTime=requestData.startTime;
          console.log(requestData.endTime)
      }
      else {
          requestData.endTime=this.state.selectedEndDay
      }
      console.log(requestData);
      API.makeReservation(requestData)
        .then(() => {
            alert('You have successfully completed your reservation');
        });
  }

  checkbox = event => {
     this.setState({
         oneDay: !this.state.oneDay
     }, () => {
         console.log(this.state.oneDay);
     })
     
  }

  render() {
    const { selectedStartDay, startIsDisabled, selectedEndDay, endIsDisabled } = this.state;
    return (
        <div id="calendarHolder">
            <div className='row'>
                <div className='col-sm-6'>
                <p>
                {!selectedStartDay && '🤔 Type or pick a valid day'}
                {selectedStartDay && startIsDisabled && '😡 This day is disabled'}
                {selectedStartDay &&
                    !startIsDisabled &&
                    `😄 You chose ${selectedStartDay.toLocaleDateString()}`}
                </p>
                <DayPickerInput
                value={selectedStartDay}
                onDayChange={this.handleStartDayChange}
                formatDate={formatDate}
                parseDate={parseDate}
                placeholder='MM/DD/YYYY'
                dayPickerProps={{
                    selectedDays: selectedStartDay,
                    disabledDays: this.getStartDisabled()
                }}
                />
            </div>
           
            <div className='col-sm-6'>
            {this.state.oneDay ? '' :
                <div>
                <p>
                {!selectedEndDay && '🤔 Type or pick a valid day'}
                {selectedEndDay && endIsDisabled && ' This day is disabled'}
                {selectedEndDay &&
                    !endIsDisabled &&
                    `😄 You chose ${selectedEndDay.toLocaleDateString()}`}
                </p>
                <DayPickerInput
                value={selectedEndDay}
                onDayChange={this.handleEndDayChange}
                formatDate={formatDate}
                parseDate={parseDate}
                placeholder='MM/DD/YYYY'
                dayPickerProps={{
                    selectedDays: selectedEndDay,
                    disabledDays: this.getEndDisabled()
                }}
                />
                </div>
            }
            </div>
            
        </div>
        
        <div className='row'>
        <input id="oneDay" name='oneDay' value={this.state.oneDay} onChange={this.checkbox.bind(this)} type="checkbox"/>
        <p>One Day Reservation</p>
        </div>
        <div className='row'>
            <button
                style={{"margin-bottom": "0.5em"}}
                className="btn btn-mine btn-block"
                onClick={this.send.bind(this)}
                disabled={this.disableSubmit()}
                >Make reservation
            </button>
        </div>
    </div>
    );
  }
}

export default Calendar;