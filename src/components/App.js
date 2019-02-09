import React, { Component } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import Footer from './Footer';

const todos = [
  {
    id: 1,
    text: "learn react",
    completed: true
  },
  {
    id: 2,
    text: "learn redux",
    completed: false
  }
];
const filter = "all";

class App extends Component {
  render() {
    return (
      <div>
        <AddTodo />
        <TodoList todos={todos} />
        <Footer filter={filter} />
      </div>
    );
  }
}

export default App;
