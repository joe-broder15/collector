import React, { Component } from "react";

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
        this.map = new window.H.Map(this.binding.current, defaultLayers.normal.map, {pixelRatio: pixelRatio});
        
        //Step 3: make the map interactive
        // MapEvents enables the event system
        // Behavior implements default interactions for pan/zoom (also on mobile touch environments)
        var behavior = new window.H.mapevents.Behavior(new window.H.mapevents.MapEvents(this.map));
        
        // Create the default UI components
        var ui = window.H.ui.UI.createDefault(this.map, defaultLayers);
        
        // Now use the map as required...
        this.moveMapToBerlin(this.map);

        this.setState({
            mapCreated: true
        })

    }

    moveMapToBerlin(map) {
        map.setCenter({lat:52.5159, lng:13.3777});
        map.setZoom(14);
    }

    render() {
        return (
            <div id="map" style={{width: "100%", height: "400px", background: "grey"}} ref={this.binding}></div>
        )
    }
}

export default Map;
