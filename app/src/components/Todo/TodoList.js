import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({todos}) => {
    console.log(todos);
    return (
        <ul>
            {todos.map(todo =>
                <TodoItem key={todo.id} todo={todo} />
            )}
        </ul>
    );
}

export default TodoList;