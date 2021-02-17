import React from 'react';

const ToDoList = () => {
    return (
        <div className="todolist">
            <h3>Todos</h3>
            <input type="checkbox"/>Learn HTML<br></br>
            <input type="checkbox"/>Learn CSS<br></br>
            <input type="checkbox"/>Learn JavaScript
        </div>
    );
}

export default ToDoList;