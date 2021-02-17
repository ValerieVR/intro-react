import React from 'react';
import './App.css';

//components
import Header from './components/Header';
import Form from './components/Form';
import ToDoList from './components/ToDoList';

function App() {
  return (
    <div className="App">
      <Header/>
      <Form/>
      <ToDoList/>
    </div>
  );
}

export default App;
