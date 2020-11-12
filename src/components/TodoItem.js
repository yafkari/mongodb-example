import React, { Component } from "react";

import '../styles/TodoItem.css'

export default class TodoItem extends Component {
    constructor(props) {
        super(props);
    
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.item.done = event.target.checked
    }

    render() {
        return (
            <li className="TodoItem">
                <input type="checkbox" name="isDone" id="isDone" onChange={this.handleChange}/>
                <p>{this.props.item.text}</p>
                <button onClick={_ => {this.props.deleteTodo(this.props.item.id); this.forceUpdate();}}>X</button>
            </li>
        )
    }
}