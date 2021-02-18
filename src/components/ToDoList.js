import React from "react";
import Todo from "./Todo";

const TodoList = ({todos}) => {
    return (
        <div className="todolist">
            <h3>Todos</h3>
            <ul>
                {todos.map((todo)=>(
                    <Todo key={todo.id} todo={todo} />
                ))}
            </ul>
        </div>
    );
}

export default TodoList;