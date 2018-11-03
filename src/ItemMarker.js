import React, { Component } from "react";
import './style.css'

class ItemMarker extends Component {

    constructor(props) {
        super(props)
        this.element = React.createRef()
    }

    componentDidMount()
    {
        function changeOpacity(event) {
            event.target.style.opacity = 0.6;
        };
    
        function changeOpacityToOne(event) {
            event.target.style.opacity = 1;
        };
    
        //create dom icon and add/remove opacity listeners
        var domIcon = new window.H.map.DomIcon(this.element.current, {
            // the function is called every time marker enters the viewport
            onAttach: (clonedElement, domIcon, domMarker) => {
                clonedElement.addEventListener('mouseover', changeOpacity);
                clonedElement.addEventListener('mouseout', changeOpacityToOne);
            },
            // the function is called every time marker leaves the viewport
            onDetach: (clonedElement, domIcon, domMarker) => {
                clonedElement.removeEventListener('mouseover', changeOpacity);
                clonedElement.removeEventListener('mouseout', changeOpacityToOne);
            }
        });
    
        // Marker for Chicago Bears home
        this.marker = new window.H.map.DomMarker(
            {lat: this.props.lat, lng: this.props.lng}, 
            {icon: domIcon});

        this.props.map.addObject(this.marker);
    }

    componentWillUnmount() {
        this.props.map.removeObject(this.marker)
        this.marker.dispose()
    }

    render() {
        return (<div className='itemMarker' ref={this.element}></div>)
    }
}

export default ItemMarker;