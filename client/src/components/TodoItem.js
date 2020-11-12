import React, { useState } from "react";

import '../styles/TodoItem.css'

export default function TodoItem(props) {
    const [todo, setTodo] = useState(props.item);

    const handleChange = (e) => {
        e.preventDefault()
        todo.done = e.target.checked
        setTodo(todo)
        props.updateTodo(todo)
    }

    return (
        <li className="TodoItem">
            <input type="checkbox" name="isDone" id="isDone" checked={todo.done} onChange={handleChange}/>
            <p>{todo.text}</p>
            <button onClick={_ => props.deleteTodo(todo._id)}>X</button>
        </li>
    )
}