import React, { Component } from "react";
import ToDoList from './Components/Todo/toDoList'
import SignUp from "./Components/Auth/SignUp";
class App extends Component {
  render() {
    return (
      <div className="container">
        <SignUp/>
        <ToDoList/>
      </div>
    )
    ;
  }
}

export default App;