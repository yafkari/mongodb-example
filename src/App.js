import {Component} from "react"

import TodoItem from "./components/TodoItem"

import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          text: "Finir cette presentation",
          done: false
        }
      ],
    };
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
        </main>
      </>
    );
  }
}
