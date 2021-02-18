import React from 'react';

const Todo = ({todo}) => {
    return (
        <li>
            <input type="checkbox" checked={todo.complete}/> {todo.name}
        </li>
    );
}

export default Todo;
