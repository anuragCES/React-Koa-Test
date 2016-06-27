import React from 'react';

const TodoItem = ({todo}) => {
    return (
        <li>
            <h3> {todo.value} </h3>
        </li>    
    );
}

export default TodoItem;