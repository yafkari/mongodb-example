import {Component} from "react"

import TodoItem from "./components/TodoItem"

import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    }
  }

  onAdd = (e) => {
    e.preventDefault()

    this.setState({
      todos: [
        ...this.state.todos, 
        {
          id: this.state.todos.length > 0 ? this.state.todos[this.state.todos.length - 1].id + 1 : 0,
          text: document.getElementById("todo-text").value,
          done: false
        }
      ]
    })
  }
  
  deleteTodo = (id) => {
    this.setState(({todos}) => ({
        todos: todos.filter(todo => todo.id !== id)
      })
    )
  }

  render() {
    return (
      <>
        <header>Todo App</header>
        <main>
          <ul>
            {
              this.state.todos.map(todo => <TodoItem key={todo.id} item={todo} deleteTodo={this.deleteTodo} />)
            }
          </ul>
          <div id="add-form">
            <input type="text" name="text" id="todo-text"/>
            <button id="add-btn" type="button" onClick={this.onAdd}>
              <img src={process.env.PUBLIC_URL + '/plus.svg'} width="20" alt="plus button"/>
              <span>New</span>
            </button>
          </div>
        </main>
      </>
    );
  }
}
