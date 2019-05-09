import React, { Component } from "react";
import ToDoList from './Components/Todo/toDoList'
import SignUp from "./Components/Auth/SignUp";
import SignIn from "./Components/Auth/SignIn";
import SignOut from "./Components/Auth/SignOut";
import TodoList from "./Components/Todo/toDoList.1";
class App extends Component {
  render() {
    return (
      <div className="container">
        <SignUp/>
        <SignIn/>
        <SignOut/>
        <ToDoList/>
        <TodoList/>
      </div>
    )
    ;
  }
}

export default App;