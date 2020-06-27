import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import 'react-google-places-autocomplete/dist/index.min.css';

class Rent extends Component {
    constructor(props){
        super(props)
        this.state = {
            
        }
    }

    handleLocation = data => {
        console.log(data.description)
    }

    logRentables = () => {
        console.log(this.props.rentables)
    }


    render(){
        return(
            <div>
                <GooglePlacesAutocomplete
                    onSelect={this.handleLocation}
                />
                <button onClick={this.logRentables}>Log</button>
            </div>
        )
    }
}

export default Rent