import React, { Component } from 'react';
import "./CreateRent.css"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import 'react-google-places-autocomplete/dist/index.min.css';
import Button from '@material-ui/core/Button';


class CreateRent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rentor: false,
            location: "",
            numGuests: "",
            startDate: "",
            endDate: "",
            price: "",
            passCode: ""
        }
    }

    becomeRentor = () => {
        this.setState({ rentor: true })
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = () => {
        this.props.createRentable(this.state.location, this.state.numGuests, this.state.startDate.toString(), this.state.endDate.toString(), this.state.price, this.state.passCode)
        this.setState({
            location: "",
            numGuests: "",
            startDate: "",
            endDate: "",
            price: "",
            passCode: ""
        })
    }

    handleStartDateChange = date => {
        this.setState({
          startDate: date
        });
    };

    handleEndDateChange = date => {
        this.setState({
          endDate: date
        });
    };

    handleLocation = data => {
        console.log(data.description)
    }

    render() { 
        if (!this.state.rentor){
            return (
                <div className="button-container">
                    <button className="button" onClick={this.becomeRentor}>Have a Place You Want To Rent Out? Become a Rentor!</button>
                </div>
            )
        }

        return (
            <div>
                    <GooglePlacesAutocomplete
                        onSelect={this.handleLocation}
                    />
                <div className="spacer">
                    <input
                        name="numGuests"
                        value={this.state.numGuests}
                        onChange={this.handleChange}
                        placeholder="Number of Guests"
                    />
                </div>
                <div className="spacer">
                    <DatePicker
                        selected={this.state.startDate}
                        onChange={this.handleStartDateChange}
                        placeholderText="Start Date"
                    />
                </div>
                <div className="spacer">
                    <DatePicker
                        selected={this.state.endDate}
                        onChange={this.handleEndDateChange}
                        placeholderText="End Date"
                    />
                </div>
                <div className="spacer">
                    <input
                        name="price"
                        value={this.state.price}
                        onChange={this.handleChange}
                        placeholder="Price per day of rent"
                    />
                </div>
                <div className="spacer">
                    <input
                        name="passCode"
                        value={this.state.passCode}
                        onChange={this.handleChange}
                        placeholder="Pass Code for The Place"
                    />
                </div>
                <div className="spacer1">
                    <Button variant="contained" color="primary"onClick={this.handleSubmit}>Submit</Button>
                </div>
            </div>
        );

        
    }
}
 
export default CreateRent;