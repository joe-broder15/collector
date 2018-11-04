import React, { Component } from "react";
import ItemMarker from "./ItemMarker"
import NewPin from "./NewPin";

class Map extends Component {

    constructor(props) {
        super(props)
        this.state = {
            mapCreated: false
        }

        this.binding = React.createRef();
    }

    componentDidMount() {
        var platform = new window.H.service.Platform({
            app_id: 'devportal-demo-20180625',
            app_code: '9v2BkviRwi9Ot26kp2IysQ',
            useHTTPS: true
        });

        var pixelRatio = window.devicePixelRatio || 1;
        var defaultLayers = platform.createDefaultLayers({
            tileSize: pixelRatio === 1 ? 256 : 512,
            ppi: pixelRatio === 1 ? undefined : 320
        });
        
        //Step 2: initialize a map  - not specificing a location will give a whole world view.
        this.map = new window.H.Map(this.binding.current, defaultLayers.normal.map, {pixelRatio: pixelRatio})
        
        //Step 3: make the map interactive
        // MapEvents enables the event system
        // Behavior implements default interactions for pan/zoom (also on mobile touch environments)
        var behavior = new window.H.mapevents.Behavior(new window.H.mapevents.MapEvents(this.map));
        
        // Create the default UI components
        // var ui = window.H.ui.UI.createDefault(this.map, defaultLayers);
        
        // Now use the map as required...
        this.moveMapToSoda(this.map);
        
        this.props.setMap(this.map);

        this.setState({
            mapCreated: true
        })
    }

    moveMapToSoda(map) {
        map.setCenter({lat:37.8756, lng:-122.2588});
        map.setZoom(14);
    }

    createMarker(itemData)  {
        if (this.state.mapCreated) {
            console.log('created marker' + itemData.latitude + ' ' + itemData.longitude);
            return <ItemMarker map={this.map} data={itemData} add={this.props.add} delete={this.props.delete}/>
        }
    }

    render() {
        if (this.props.mode == 'view') {
            return (
                <div id="map" ref={this.binding}>
                    { this.props.caches.map(x => this.createMarker(x))}
                </div>
            )
        } else {
            return (
                <div id="map" ref={this.binding}>
                    <NewPin />
                </div>
            )
        }
    }
}

export default Map;
