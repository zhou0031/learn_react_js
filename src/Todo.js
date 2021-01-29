import React from 'react'

export default function Todo({todo, toggleTodo}) {
    
    function handleTodoClick(){
        toggleTodo(todo.id)
    }

    return (
        <div>
            <input type="checkbox" checked={todo.complete} onChange={handleTodoClick}></input>
            <label>{todo.name}</label>
        </div>
    )
}
