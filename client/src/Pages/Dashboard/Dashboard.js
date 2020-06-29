import React, { Component } from "react";
import Slide from "./CurrentRents";
import Slide2 from "./Leases";
import "./Slideshow.css"

class Dashboard extends Component {
    constructor(props){
        super(props)
        this.state = {
            
        }
    }

    render(){
        return(
            <div>
               <Slide personalRents={this.props.personalRents}/>
               <Slide2 personalRentables={this.props.personalRentables}/>
            </div>
        )
    }
}

export default Dashboard