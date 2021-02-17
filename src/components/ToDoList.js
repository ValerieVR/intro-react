import React from 'react';

const ToDoList = () => {
    return (
        <div className="todolist">
            <h3>Todos</h3>
            <ul>
                <li>
                    <input type="checkbox"/>Learn HTML<br></br>
                </li>
                <li>
                    <input type="checkbox"/>Learn CSS<br></br>
                </li>
                <li>
                    <input type="checkbox"/>Learn JavaScript
                </li>
            </ul>
        </div>
    );
}

export default ToDoList;