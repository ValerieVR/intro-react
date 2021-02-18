import React, { useState, useRef } from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';

//components
import Header from './components/Header';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef();

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
      <TodoList todos={todos}/>
    </div>
  );
}

export default App;
