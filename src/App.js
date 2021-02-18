import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';

// Components
import Header from './components/Header';
import Form from './components/Form';
import TodoList from './components/TodoList';

// Set unique key for app
const LSKEY = "MyTodoApp.todos";

function App() {
  // Inititialize the state
  const [todos, setTodos] = useState([]);

  const inputRef = useRef();

  // Load todos
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LSKEY))
    if (storedTodos) setTodos(storedTodos);
  }, []);

  // Save todos to localStorage
  useEffect(() => {
    localStorage.setItem(LSKEY, JSON.stringify(todos));
  }, [todos]);

  // check/uncheck chexkboxes
  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find(todo => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  }

  // Update the state
  const clickHandler = (e) => {
    const name = inputRef.current.value;
    if (name === "") return;
    setTodos(prevTodos => {
      return [...prevTodos, {id: uuidv4(), name: name, complete: false}]
    })
    inputRef.current.value = null; 
  }

  return (
    <div className="App">
      <Header/>
      <Form inputRef={inputRef} clickHandler={clickHandler}/>
      <TodoList todos={todos} toggleTodo={toggleTodo}/>
    </div>
  );

}

export default App;
