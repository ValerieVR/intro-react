import React from 'react';

const Todo = ({todo, toggleTodo}) => {
    
    const handleTodoClick = () => {
        toggleTodo(todo.id);
    }

    return (
        <li>
            <input type="checkbox" checked={todo.complete} onChange={handleTodoClick}/> {todo.name}
        </li>
    );
}

export default Todo;
