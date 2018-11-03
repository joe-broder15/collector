import React, { Component } from "react"
import Map from './Map'
import './style.css'
import './Overlay'
import Overlay from "./Overlay";

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {mode: "view", caches: []}
        this.changeMode = this.changeMode.bind(this);
    }
    

    changeMode(){
        if(this.state.mode == "view"){
            this.setState({mode: "create"});
        } else {
            this.setState({mode: "view"});
        }
    }

    render() {
        return (
<<<<<<< HEAD
            <div>
                {/* <div className="browser"></div> */}
=======
            <div id="mapDivider">
                <Overlay mode={this.state.mode} changeMode={this.changeMode} />
>>>>>>> e2590e6a5c524a5a3ab4be7eaa181f9195708f39
                <Map />
            </div>
        )
    }
}

export default App;
