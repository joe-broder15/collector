import React, { Component } from "react";
import './style.css'

class ItemMarker extends Component {

    constructor(props) {
        super(props)
        this.state = {showsInfo: false}

        this.showInfo = this.showInfo.bind(this)
        this.hideInfo = this.hideInfo.bind(this)
    }

    componentDidMount()
    {
        var pointer = document.createElement('div')
        pointer.className = 'itemMarker'
        var popup = document.createElement('div')
        popup.className = 'infoPopup'
        popup.style.display = 'none'

        pointer.appendChild(popup)

        //create dom icon and add/remove opacity listeners
        var domIcon = new window.H.map.DomIcon(pointer, {
            // the function is called every time marker enters the viewport
            onAttach: (clonedElement, domIcon, domMarker) => {
                clonedElement.addEventListener('mouseover', () => this.showInfo(clonedElement.firstChild));
                clonedElement.addEventListener('mouseout', () => this.hideInfo(clonedElement.firstChild));
            },
            // the function is called every time marker leaves the viewport
            onDetach: (clonedElement, domIcon, domMarker) => {
                clonedElement.removeEventListener('mouseover', () => this.showInfo(clonedElement.firstChild));
                clonedElement.removeEventListener('mouseout', () => this.hideInfo(clonedElement.firstChild));
            }
        });

        this.marker = new window.H.map.DomMarker(
            {lat: this.props.lat, lng: this.props.lng}, 
            {icon: domIcon});
            
        this.props.map.addObject(this.marker);
    }
        
    showInfo(popup) {
        popup.style.display = 'block'
        
        
        // CREATE THE THINGS HERE
        popup.innerHTML = 'HI'



        this.setState({showsInfo: true})
    }

    hideInfo(popup) {
        popup.style.display = 'none'
        this.setState({showsInfo: false})
    }

    componentWillUnmount() {
        this.props.map.removeObject(this.marker)
        this.marker.dispose()
    }

    render() {
        return (
            <div></div>
        )
    }
}

export default ItemMarker;