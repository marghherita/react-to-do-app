import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import PlsTitle from "./components/PlsTitle";


function App() {
  //State
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  //RUN ONCE when the app start
  useEffect(() => {
    getLocalTodos();
  }, []);

  //useEffect
  useEffect(() => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    };

    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos, status]);

  //Functions
  // const filteredHandler = () => {
  //   switch (status) {
  //     case "completed":
  //       setFilteredTodos(todos.filter((todo) => todo.completed === true));
  //       break;
  //     case "uncompleted":
  //       setFilteredTodos(todos.filter((todo) => todo.completed === false));
  //       break;
  //     default:
  //       setFilteredTodos(todos);
  //       break;
  //   }
  // };

  //Local storage
  // const saveLocalTodos = () => {
  //     localStorage.setItem("todos", JSON.stringify(todos));
  // };

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLocal);
    }
  };

  return (
    <div className="App">

      <div id="text"> 

      </div>
      
      <header>
        < PlsTitle  />
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
