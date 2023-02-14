import ToDoListItem from "./todo-item/ToDoListItem";
import {useState} from "react";
import AddTaskForm from "../add-task-form/AddTaskForm";
import styles from "./TodoList.module.css"
import EditTaskModal from "./edit-task-modal/EditTaskModal";

const TodoList = () => {
    const [tasks, setTasks] = useState([])
    const addTask = (title) => {
        if (title) {
            const newTask = {
                id: Math.random().toString(36).substring(2, 9),
                title: title,
                isCompleted: false
            }
            setTasks([...tasks, newTask])
        }
    }

    const onDeleteTask = (deletedId) => {
        let newTasks = tasks.filter(task => task.id !== deletedId)
        setTasks(newTasks)
    }

    const onTaskChanged = (changedTask) => {
        if (changedTask) {
            const index = tasks.findIndex((obj => obj.id === changedTask.id))
            let newTasks = [...tasks]
            newTasks[index] = changedTask
            setTasks(newTasks)
        }
    }

    return (
        <div className={styles.wrapper}>
            <h5 className={styles.header}>List: </h5>
            <AddTaskForm addTask={addTask}/>
            {/*Search?*/}
            {tasks.map((task) => {
                return (
                    <ToDoListItem task={task} onDeleteTask={onDeleteTask} onEditTask={onTaskChanged}/>
                )
            })
            }
        </div>
    )
}
export default TodoList