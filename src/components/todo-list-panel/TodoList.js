import ToDoListItem from "./todo-item/ToDoListItem";
import {useEffect, useState} from "react";
import AddTaskForm from "./add-task-form/AddTaskForm";
import styles from "./TodoList.module.css"
import {v4 as uuidv4} from 'uuid';

const TodoList = ({coins, setCoins, tasks, addTask, deleteTask, changeTask, setReward}) => {


    return (
        <div className={styles.appWrapper}>
            <h5 className={styles.header}>Tasks: </h5>
            <div className={styles.todolist}>
                <AddTaskForm addTask={addTask}/>
                <div >
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