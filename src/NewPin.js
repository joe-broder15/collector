import React, { Component } from "react";
import './style.css'
import pinImage from './pin.png'

class NewPin extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id="newPin">
                <div id="newPinText">New Pin</div>
                <img className='pin' src={pinImage} />
            </div>
        )
    }
}

export default NewPin;