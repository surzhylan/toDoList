import React, { useState } from "react";

function ToDoList ({ todo, setToDo }) {
    
    function deleteTodo(id) {
        let newTodo = [...todo].filter(item => item.id!==id)
        setToDo(newTodo)
    }

    function statusToDo(id){
        let newTodo = [...todo].filter(item => {
            if(item.id===id){
                item.status = !item.status
            }
            return item
        })
        setToDo(newTodo)
    }

    const [edit, setEdit] = useState(null)
    const [value,setValue] = useState('')
    function editTodo(id, title){
        setEdit(id)
        setValue(title)
    }

    function updateTodo(id){
        let newTodo = [...todo].map(item => {
            if(item.id === id) {
                item.title=value
            }
            return item
        })
        setToDo(newTodo)
        setEdit(null)
    }
    
    return(
        <div>
            {
                todo.map( item => (
                    <div key = {item.id}>
                        {
                            edit === item.id ? 
                                <div>
                                    <input type="text" value={value} onChange={ (e) => setValue(e.target.value) } />
                                </div> : 
                                    <div>{item.title}</div>
                        }

                        {
                            edit === item.id ? 
                                <div>
                                    <button onClick={ () => updateTodo(item.id)}>Save</button>
                                </div> : 
                                    <div>
                                        <button onClick={ () => deleteTodo(item.id) }>Delete</button>
                                        <button onClick={ () => editTodo(item.id, item.title) } >Edit</button>
                                        <button onClick={ () => statusToDo(item.id) }>Close / Open</button>
                                    </div>
                        }
                        
                    </div>
                ))
            }
        </div>
    )
}

export default ToDoList