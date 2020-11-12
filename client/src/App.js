import React, { useState, useEffect } from "react";

import TodoItem from "./components/TodoItem"
import todoService from './services/todoService';
import './App.css';

export default function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    if(todos.length === 0) {
      getTodos()
    }
  })

  const getTodos = async () => {
    let res = await todoService.findAll()
    setTodos(res)
  }

  const onAdd = async (e) => {
    e.preventDefault()
    let res = await todoService.createOne({
    // await todoService.createOne({
      text: document.getElementById("todo-text").value
    });

    setTodos([...todos, res])
    // getTodos()
  }

  const updateTodo = async (item) => {
    await todoService.updateOne(item)

    getTodos()
  }

  const deleteTodo = async (id) => {
    await todoService.deleteOne(id)

    getTodos()
  }

  return (
    <>
      <header>Todo App</header>
      <main>
        {
           (todos && todos.length > 0) ?
            <ul>
              {todos.map(todo => <TodoItem key={todo._id} item={todo} updateTodo={updateTodo} deleteTodo={deleteTodo} />)}
            </ul> :
            <p>No todos yet!</p>
        }
        
        <div id="add-form">
          <input type="text" name="text" id="todo-text"/>
          <button id="add-btn" type="button" onClick={onAdd}>
            <img src={process.env.PUBLIC_URL + '/plus.svg'} width="20" alt="plus button"/>
            <span>New</span>
          </button>
        </div>
      </main>
    </>
  );
}
