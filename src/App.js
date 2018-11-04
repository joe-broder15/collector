import React, { Component } from "react"
import Map from './Map'
import './style.css'
import './Overlay'
import Overlay from "./Overlay";
import {displayItemsOnLoad, addItem, deleteItem} from './databaseHelpers'


class App extends Component {

    constructor(props) {
        super(props)
        this.state = {mode: "view", caches: [], map: null}
        this.changeMode = this.changeMode.bind(this);
        
        this.add = this.add.bind(this)
        this.delete = this.delete.bind(this)
        this.setMap = this.setMap.bind(this)

        this.updateCaches = this.updateCaches.bind(this)
        displayItemsOnLoad().then(items => this.updateCaches(items))
    }
    
    updateCaches(items) {
        this.setState({
            caches: items
        })
    }

    add(cacheName, desc, lat, long) {
        addItem(cacheName, desc, lat, long).then(() =>
        displayItemsOnLoad().then(items => this.updateCaches(items)))
    }

    delete(data) {
        deleteItem(data).then(() =>
        displayItemsOnLoad().then(items => this.updateCaches(items)))
    }

    changeMode() {
        if (this.state.mode == "view") {
            this.setState({mode: "create"});
        } else {
            this.setState({mode: "view"});
        }
    }

    setMap(_map) {
        this.setState({
            map: _map
        })
    }

    render() {
        return (
            <div id="mapDivider">
                <Overlay mode={this.state.mode} changeMode={this.changeMode} add={this.add} map={this.state.map}/>
                <Map caches={this.state.caches} mode={this.state.mode} add={this.add} delete={this.delete} setMap={this.setMap}/>
            </div>
        )
    }
}

export default App;
