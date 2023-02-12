import ToDoListItem from "../todo-item/ToDoListItem";
import {useState} from "react";
import AddTaskForm from "../AddTaskForm";

const TodoList = () => {
    const [tasks, setTask] = useState([])

    const addTask = (title) => {
        if (title) {
            const newTask = {
                id: Math.random().toString(36).substring(2, 9),
                title: title,
                isCompleted: false
            }
            setTask([...tasks, newTask])
        }
    }

    const deleteTask = () => {

    }

    const editTask = () => {

    }

    return (
        <div className="tasks-section">
            <AddTaskForm addTask={addTask}/>
            {/*Search?*/}
            {tasks.map((task) => {
                return (
                    <ToDoListItem task={task} onDeleteTask={deleteTask} onEditTask={editTask}/>
                )
            })
            }
        </div>
    )
}
export default TodoList