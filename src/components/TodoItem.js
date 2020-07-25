import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {

  getStyle = () => { //Dynamic styling
    return {
      background: 'skyblue',
      margin: '2px',
      padding: '5px',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none', //modern if else statement
      borderRadius: '5px'
    }
  }

  render() {

    const { id,title} = this.props.todo; //Destructuring
    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/> {""}
          {title}
          <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
        </p>
      </div>
    )
  }
}

//Proptypes
TodoItem.prototypes = {
  todo: PropTypes.object.isRequired // here todo is an object and not an array
}

//To add style to the delete button
const btnStyle = {
  backgroundColor: 'orangered',
  float: 'right',
  color: 'white',
  padding: '6px 10px',
  borderRadius: '50%',
  border: 'none',
  cursor: 'pointer',
}

export default TodoItem
