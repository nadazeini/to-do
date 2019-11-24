import React, {Component} from "react";
import Header from "./components/layout/Header";
import "./App.css";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import uuid from 'uuid';
class App extends Component {
  //states
  state = {
    todos: [
    ]
  };
  markComplete = id => {
    //to test console.log
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed; //whatever the opposite is
        }
        return todo;
      })
    });
  };
  deleteTodo = id => {
    //to test
    //console.log(id)
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  };
  //Add to do
  addTodo = (title) => {
    console.log(title);
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    };
    this.setState({
      todos: [
        ...this.state.todos,
        newTodo
      ]
    });
  };
  render() {
    // console.log(this.state.todos);
    //pass array as property
    return (<div className="App">
      {" "}
      <div className="container">
        {" "}
        <Header/>
        <AddTodo addTodo={this.addTodo}/>{" "}
        <Todos todos={this.state.todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo}/>{" "}
      </div>{" "}
    </div>);
  }
}

export default App;
