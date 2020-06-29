import React, { Component } from 'react';
import DatePicker from "react-datepicker";

class RentablesCard extends Component {
  constructor(props){
    super(props)
    this.state = {
      estimatedCost: 0,
      PPD: 0,
      excludeDates: []
    }
    this.completeRent = this.completeRent.bind(this)
    this.handleCost = this.handleCost.bind(this)
    this.createDateArr = this.createDateArr.bind(this)
  }

  openRent = (startDate, endDate, id) => {
    this.setState({ [id]: true})
  }

  handleStartDateChange = async date => {
    await this.setState({
      startDate: date
    });

    await this.handleCost()
  };

  handleEndDateChange = async date => {
    await this.setState({
      endDate: date
    });

    await this.handleCost()
  };



  completeRent = (id) => {
    this.props.createRent(this.state.startDate.toString(), this.state.endDate.toString(), id, this.state.address)
  }

  handleCost = () => {
    console.log(this.state.startDate)
    if (this.state.startDate && this.state.endDate){
      let diff = this.state.endDate.getTime() - this.state.startDate.getTime()
      diff = diff / (1000 * 3600 * 24)
      this.setState({ estimatedCost: diff*this.state.PPD})
    }
  }

  addDays = (date, days) => {
    let copy = new Date(Number(date))
    copy.setDate(date.getDate() + days)
    return copy
  }

  createDateArr = async (date1, date2) => {
    console.log(date1, date2)
    let diff = date2.getTime() - date1.getTime()
    diff = diff / (1000 * 3600 * 24)
    await this.setState({ excludeDates: [] })
    for (let i=0; i<=diff; i++){
      await this.state.excludeDates.push(this.addDays(date1, i))
    }
  }

  render() {
    if (!this.props.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }else{
    return (
    <div>
        <ul>
          { this.props.rentables.map((data, key) => {
            return(
              <div key={key}>
                  <span className="content">Location: {data.location} | </span>
                  <span>Recommended number of guests: {data.numGuests} | </span>
                  <span>Price per day: ${data.price} | </span>
                  <button onClick={(event) => {this.openRent(data.startDate, data.endDate, data.id) 
                  this.setState({ PPD: data.price, address: data.renterAddress})
                  
                  // eslint-disable-next-line no-unused-expressions
                  data.Rents[0] ? this.createDateArr(new Date(data.Rents[0][0]), new Date(data.Rents[0][1])) : null
                  
                }
                }
                  >Rent</button>
                  <br/>
                  {this.state[data.id] ? 
                  
                  <div>
                    <DatePicker
                        selected={this.state.startDate}
                        onChange={this.handleStartDateChange}
                        placeholderText="Start Date"
                        minDate={new Date(data.startDate)}
                        maxDate={new Date(data.endDate)}
                        showDisabledMonthNavigation
                        excludeDates={this.state.excludeDates}
                    />
                    <DatePicker
                        selected={this.state.endDate}
                        onChange={this.handleEndDateChange}
                        placeholderText="End Date"
                        minDate={new Date(data.startDate)}
                        maxDate={new Date(data.endDate)}
                        showDisabledMonthNavigation
                        excludeDates={this.state.excludeDates}
                    />
                    <input
                    placeholder="Number of Guests"
                    />
                    <button onClick={() => {this.completeRent(data.id)}}>Complete Rent</button>
                    <div>Estimated Cost: ${this.state.estimatedCost}</div>
                  </div>
                   : null}
                <br/>
              </div>
            )
          })}
        </ul>
    </div>
    );}
  }
}

export default RentablesCard;