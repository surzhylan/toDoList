import ToDoListItem from "./todo-item/ToDoListItem";
import {useEffect, useState} from "react";
import AddTaskForm from "./add-task-form/AddTaskForm";
import styles from "./TodoList.module.css"
import {v4 as uuidv4} from 'uuid';

const TodoList = ({coins, setCoins}) => {
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
                isCompleted: false,
                rewardAmount: 10
            }
            setTasks([...tasks, newTask])
            console.log(newTask)
        }
    }

    const changeTask = (task) => {
        if (task) {
            const index = tasks.findIndex((obj => obj.id === task.id))
            let newTasks = [...tasks]
            newTasks[index] = task
            setTasks(newTasks)
        }
    }

    const setReward = (rewardAmount) => {
        setCoins(coins + rewardAmount)
    }

    const deleteTask = (deletedId) => {
        let newTasks = tasks.filter(task => task.id !== deletedId)
        setTasks(newTasks)
    }

    return (
        <div className={styles.appWrapper}>
            <h5 className={styles.header}>Tasks: </h5>
            <div className={styles.todolist}>
                <AddTaskForm addTask={addTask}/>
                <div className={styles.todoTask}>
                    {tasks.map((task) => {
                        return (
                            <div key={task.id}>
                                <ToDoListItem task={task} onDeleteTask={deleteTask} onEditTask={changeTask} onCheckTask={setReward}/>
                            </div>
                        )
                    })
                    }
                </div>
            </div>
        </div>
    )
}
export default TodoList