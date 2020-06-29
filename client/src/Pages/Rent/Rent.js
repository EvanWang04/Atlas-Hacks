import React, { Component } from "react";
import "react-datepicker/dist/react-datepicker.css"
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import 'react-google-places-autocomplete/dist/index.min.css';
import RentablesCard from "../../Components/RentablesCard"

class Rent extends Component {
    constructor(props){
        super(props)
        this.state = {
            rentables: this.props.rentables
        }
        this.search = this.search.bind(this)
    }

    handleLocation = data => {
        this.setState({location: data.description})
    }


    search = () => {
        console.log(this.props.rentables)
        let arr = this.props.rentables[3]
        this.setState({ rentables: [arr] })
    }

    render(){
        
        return(
            <div>
                <GooglePlacesAutocomplete
                    onSelect={this.handleLocation}
                />
                <button onClick={this.search}>Search</button>
                
                <RentablesCard
                    rentables={this.state.rentables}
                    createRent={this.props.createRent}
                    web3={this.props.web3}
                />
                
            </div>
        )
    }
}

export default Rent