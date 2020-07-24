import React from 'react';
import './App.css';
import Todos from './components/Todos';

class App extends React.Component {
  
  state = {
    todos: [
      {
        id: 1,
        title: 'workout today',
        completed: false,
      },
      {
        id: 2,
        title: 'Dont forget to take protien',
        completed: false,
      },
      {
        id: 3,
        title: 'have a good sleep',
        completed: false,
      },
    ]
  }

  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos}/>
      </div>
    )
  }
}

export default App

