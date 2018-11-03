import React, { Component } from "react"
import App from "./App";

class Overlay extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        if (this.props.mode == "view"){
            return (
                <div id="overlayPanel">
                    <div id="searchbar">
                        <input></input> 
                        <button>Search</button>
                    </div>
                    <button onClick={this.props.changeMode}>Add Cache</button>
                </div>
            )
        } else if (this.props.mode == "create"){
            return (
                <div id="overlayPanel">
                    Name:
                    <input></input>
                    Description:
                    <input></input>
                    <button>Add Cache</button>
                    <button onClick={this.props.changeMode}>Back</button>
                </div>
            )
        }
    }
}

export default Overlay;
