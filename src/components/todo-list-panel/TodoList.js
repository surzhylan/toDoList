import ToDoListItem from "./todo-item/ToDoListItem";
import {useEffect, useState} from "react";
import AddTaskForm from "./add-task-form/AddTaskForm";
import styles from "./TodoList.module.css"
import {v4 as uuidv4} from 'uuid';

const TodoList = () => {
    const savedTasks = localStorage.getItem('tasks')
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        setTasks(savedTasks ? JSON.parse(savedTasks) : []);
    }, [])

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks])

    const addTask = (title) => {
        if (title) {
            const newTask = {
                id: uuidv4(),
                title: title,
                isCompleted: false
            }
            setTasks([...tasks, newTask])
            console.log(newTask)
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
        <div className={styles.appWrapper}>
            <h5 className={styles.header}>List: </h5>
            <AddTaskForm addTask={addTask}/>
            {tasks.map((task) => {
                return (
                    <div key={task.id}>
                        <ToDoListItem task={task} onDeleteTask={onDeleteTask} onEditTask={onTaskChanged}/>
                    </div>
                )
            })
            }
        </div>
    )
}
export default TodoList