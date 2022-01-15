import React from 'react'

const ToDoList = (props) => {

    return (
        <li className='p-2'>
            <i class="bi bi-x-circle mx-3" onClick={() => {
                props.onSelect(props.id)
            }} ></i>
            {props.myItem}
        </li>
    )
}

export default ToDoList
