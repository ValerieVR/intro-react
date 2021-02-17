import React from "react";

const ToDoList = ({todos}) => {
    return (
        <div className="todolist">
            <h3>Todos</h3>
            <ul>
                {todos.map((todo)=>(
                    <li key={todo.id}>
                        <input type="checkbox" checked={todo.complete}/> {todo.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ToDoList;