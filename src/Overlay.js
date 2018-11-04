import React, { Component } from "react"
import App from "./App";
import { addItem } from "./databaseHelpers";

class Overlay extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: "",
            description: ""
        };

        this.handleName = this.handleName.bind(this)
        this.handleDescription = this.handleDescription.bind(this)
        this.submitItem = this.submitItem.bind(this)
    }

    handleName(event) {
        this.setState({
            name: event.target.value
        });
    }

    handleDescription(event) {
        this.setState({
            description: event.target.value
        });
    }

    submitItem() {
        if (this.state.name !== '' && this.state.description !== '') {
            var point = this.props.map.getCenter()
            this.props.add(this.state.name, this.state.description, point.lat, point.lng)
            this.setState({
                name: "",
                description: "",
            });
            this.props.changeMode()
        }
    }

    render() {
        if (this.props.mode == "view"){
            return (
                <div id="overlayPanel">
                    <h1>Collector</h1>
                    <div id="searchbar">
                        <input></input> 
                        <button>Search</button>
                    </div>
                    <button onClick={this.props.changeMode}>Add Cache</button>
                    {/* <button onClick={() => this.props.add("test-cache", "example", 37.8756, -122.2588)}>testItem</button> */}
                </div>
            )
        } else if (this.props.mode == "create"){
            return (
                <div id="overlayPanel">
                    <h1>Collector</h1>
                    Name:
                    <input value={this.state.name} onChange={this.handleName}></input>
                    Description:
                    <input value={this.state.description} onChange={this.handleDescription}></input>
                    <button onClick={this.submitItem}>Create New Cache</button>
                    <button onClick={this.props.changeMode}>Back</button>
                </div>
            )
        }
    }
}

export default Overlay;
