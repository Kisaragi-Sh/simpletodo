import React from 'react'

const TodoList = (props) => {
    return (
        <li>
            <input type="checkbox" />
            <button>Delete</button>
            <span>{props.text}</span>
        </li>
    )
}



export default TodoList;