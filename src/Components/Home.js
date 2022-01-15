import React, { useState } from 'react'
import ToDoList from './ToDoList';

const Home = ({ setLoginUser }) => {
    const [input, setInput] = useState();
    const [items, setItems] = useState([]);

    const addNewItem = (e) => {
        setInput(e.target.value)
    }

    const updateToDoList = () => {
        if (input) {
            setItems((oldItems) => {
                return [...oldItems, input]
            })
        }
        setInput('')
    }

    const removeItem = (id) => {
        setItems((oldItems) => {
            return oldItems.filter((element, index) => {
                return index !== id
            })
        })
    }

    return (
        <div className='vh-100'>
            <nav className='d-flex justify-content-between m-auto p-2'>
                <div className="logo">Todo List</div>
                <button className='btn btn-outline-danger' onClick={() => { setLoginUser({}) }}>Logout</button>
            </nav>
            <div className='Home d-flex align-items-center justify-content-center m-auto p-3'>
                <div className="ToDo_Div d-flex flex-column align-items-center p-4">
                    <h1>ToDo List</h1>
                    <div className="inItem text-center p-2">
                        <input className='px-2' type="text" placeholder="Add an item" value={input} onChange={addNewItem} />
                        <i className="bi bi-plus-circle mx-3" onClick={updateToDoList}></i>
                    </div>
                    <div className="mainList me-auto">
                        <ul className='me-auto ToDo_List'>
                            {
                                items.map((item, idx) => {
                                    return (
                                        <ToDoList key={idx} id={idx} myItem={item} onSelect={removeItem} />
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
