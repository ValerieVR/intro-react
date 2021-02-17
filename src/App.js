import React, { useState } from 'react';
import './App.css';

//components
import Header from './components/Header';
import Form from './components/Form';
import ToDoList from './components/ToDoList';

function App() {
  const initialTodos = [
    {id: 1, name: "Learn HTML", complete: false},
    {id: 2, name: "Learn CSS", complete: true},
    {id: 3, name: "Learn JavaScript", complete: false}
  ];
  const [todos, setTodos] = useState(initialTodos);

  return (
    <div className="App">
      <Header/>
      <Form/>
      <ToDoList todos={todos}/>
    </div>
  );
}

export default App;
