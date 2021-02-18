import React from "react";
import Todo from "./Todo";

const TodoList = ({todos, toggleTodo}) => {
    return (
        <div className="todolist">
            <h3>Todos</h3>
            <ul>
                {todos.map((todo)=>(
                    <Todo key={todo.id} toggleTodo={toggleTodo} todo={todo} />
                ))}
            </ul>
        </div>
    );
}

export default TodoList;