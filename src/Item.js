import React, { Component } from "react";

class Item extends Component {
    render() {
        return (
            <li className='todo-item'>
                <button className='todo-item-check'>done</button> {this.props.text}
            </li>
        )
    }
}

export default Item;
