import React from 'react';

const AddTodo = ({todo, addTodo, onChange}) => {
    return (
        <div>
            <input type="text" name="value" value={todo.value} onChange={onChange}/>
            <button onClick={addTodo}> Add </button>
        </div>    
    );
}

export default AddTodo;