import React, { Component } from "react";

class AddTodo extends Component {
  render() {
    return (
      <div>
        <input value={this.props.text} onChange={this.handleChange} />
        <button onClick={this.handleClick}>Add</button>
      </div>
    );
  }
  handleChange = e => {
    this.props.setTodoText(e.target.value);
  };
  handleClick = () => {
    if (this.props.text!==""){
      this.props.addTodo(this.props.text);
      this.props.setTodoText("");
    }
  };
}

export default AddTodo;
