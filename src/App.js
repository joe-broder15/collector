import React, { Component } from "react"
import Map from './Map'
import './style.css'
import './Overlay'
import Overlay from "./Overlay";
import {displayItemsOnLoad, addItem} from './databaseHelpers'


class App extends Component {

    constructor(props) {
        super(props)
        this.state = {mode: "view", caches: []}
        this.changeMode = this.changeMode.bind(this);
        
        this.updateCaches = this.updateCaches.bind(this)
        displayItemsOnLoad().then(items => this.updateCaches(items))
    }
    
    updateCaches(items) {

        this.setState({
            caches: items
        })

    }

    changeMode() {
        if (this.state.mode == "view") {
            this.setState({mode: "create"});
        } else {
            this.setState({mode: "view"});
        }
    }

    render() {
        return (
            <div id="mapDivider">
<<<<<<< HEAD
                <Overlay mode={this.state.mode} changeMode={this.changeMode} />
                <Map caches={this.state.caches}/>
=======
                {<Overlay mode={this.state.mode} changeMode={this.changeMode} />}
                <Map />
>>>>>>> 5fdf1dae0d1a89a78a096dafab2718a1a1b21c4d
            </div>
        )
    }
}

export default App;
