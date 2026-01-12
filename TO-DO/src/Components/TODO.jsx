import React, { useState } from 'react'

const TODO = () => {
    const [task, setTask] = useState("")
    const [todos, setTodos] = useState([])

    return (
        <div className='todo-container'>
            <h1>TODO LIST</h1>

            <input
                type="text"
                placeholder='Enter a task'
                value={task}
                onChange={(e) => {
                    console.log(e.target.value)
                    setTask(e.target.value);
                }
                }
            />

            <button onClick={() => {
                console.log("Before:", todos);
                setTodos([...todos, task])
                console.log("After", todos)
                setTask("")
            }}>ADD</button>

            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        <span>{todo}</span>

                        <button
                            className="delete-btn"
                            onClick={() => {
                                setTodos(prev => prev.filter((_, i) => i !== index));
                            }}
                        >
                            ❌
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TODO
