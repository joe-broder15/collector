import React, { Component } from "react"
import Map from './Map'

class App extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <div className="browser"></div>
                <Map />
            </div>
        )
    }
}

export default App;
