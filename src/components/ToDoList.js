import React, {useState} from "react";

const ToDoList = () => {
    const initialTodos = [
        {id: 1, name: "Learn HTML", complete: false},
        {id: 2, name: "Learn CSS", complete: true},
        {id: 3, name: "Learn JavaScript", complete: false}
    ];
    const [todos, setTodos] = useState(initialTodos);
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