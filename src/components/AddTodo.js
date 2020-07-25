import React, { Component } from 'react'

export class AddTodo extends Component {

  state = {
    title: ''
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.AddTodo(this.state.title);
    this.setState({ title: '' });
  }

  //To get the title in the textfield
  onChange = (e) => this.setState({ title: e.target.value });

  render() {
    return (
      <div style={{display:'flex' , justifyContent: 'center', margin:'5px'}}>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Add a Todo !!!"
            style={{ flex: '1', padding: '5px' }}
            value={this.state.title}
            onChange={this.onChange}
          />
          <input
            type="submit"
            value="submit"
            className="btn"
            style={{flex:'1'}}
          />
        </form>
      </div>
    )
  }
}

export default AddTodo;
