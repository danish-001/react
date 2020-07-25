import React from 'react';
import './App.css';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
import { v4 as uuidv4 } from 'uuid'

class App extends React.Component {
  state = {
    todos: [
      {
        id: uuidv4(),
        title: 'workout today',
        completed: false,
      },
      {
        id: uuidv4(),
        title: 'Dont forget to take protien',
        completed: false,
      },
      {
        id: uuidv4(),
        title: 'have a good sleep',
        completed: false,
      },
    ],
  }

  // To toggle complete
  markComplete = (id) => {
    this.setState({
      //Setting a state for the different states
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      }),
    })
  }

  //Delete a Todo
  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)], // Will filter out the todos which are not deleted
    })
  }

  //Add a Todo
  AddTodo = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    }
    this.setState({ todos: [...this.state.todos, newTodo] })
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo AddTodo={this.AddTodo} />
          <Todos
            todos={this.state.todos}
            markComplete={this.markComplete}
            delTodo={this.delTodo}
          />
        </div>
      </div>
    )
  }
}

export default App;

