import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import About from "./components/pages/About";

import "./App.scss";
import axios from "axios";

class App extends Component {
  state = {
    todos: []
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=7")
      .then(res => this.setState({ todos: res.data }));
  }

  //custom delay for last todo being added
  componentDidUpdate(prevProps, prevState) {
    let todos = Array.from(document.querySelectorAll(".item-wrapper"));
    let lastEl = todos[prevState.todos.length];
    if (lastEl && prevState.todos.length !== 0) {
      lastEl.style.transitionDelay = 0 + "s";
      lastEl.style.transitionDuration = 0.3 + "s";
    }
  }

  //toggle complete
  markComplete = (id, e) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
          axios.put(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            completed: todo.completed
          });
        }
        return todo;
      })
    });
  };

  //update text in state when user  types in
  editText = (id, e) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.title = e.target.value;
        }
        return todo;
      })
    });
  };

  //save user edited text when user clicks outside the item row
  saveText = (id, e) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          axios.put(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            title: todo.title
          });
        }
        return todo;
      })
    });
  };

  //delete todo
  delTodo = id => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res =>
      this.setState({
        todos: [...this.state.todos.filter(todo => todo.id !== id)]
      })
    );
  };

  //create new todo
  addTodo = title => {
    axios
      .post("https://jsonplaceholder.typicode.com/todos/", {
        title,
        completed: false
      })
      .then(res =>
        this.setState({
          todos: [...this.state.todos, res.data]
        })
      );
  };

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              exact
              path="/"
              render={props => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />

                  <div className="todos-wrapper">
                    <Todos
                      todos={this.state.todos}
                      markComplete={this.markComplete}
                      delTodo={this.delTodo}
                      editText={this.editText}
                      saveText={this.saveText}
                    />
                  </div>
                </React.Fragment>
              )}
            />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
