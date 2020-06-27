import React, { Component } from "react";
import Slide from "./AvailableRentals";
import Slide2 from "./Slideshow";
import "./Slideshow.css"

class Dashboard extends Component {
    constructor(){
        super()
        this.state = {
            
        }
    }

    render(){
        return(
            <div>
               <Slide />
               <Slide2 />
            </div>
        )
    }
}

export default Dashboard