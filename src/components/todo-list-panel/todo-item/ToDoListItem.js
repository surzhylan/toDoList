import {useState} from "react";
import EditTaskModal from "../edit-task-modal/EditTaskModal";
import styles from "../todo-item/ToDoListItem.module.css"
import { TbEdit } from 'react-icons/tb'
import { Button } from "react-bootstrap";

const ToDoListItem = ({task, onDeleteTask, onEditTask}) => {
    const [isChecked, setChecked] = useState(task.isCompleted)
    const [isEditModalVisible, setEditModalVisibility] = useState(false)
    const handleOnCheck = (e) => {
        const newVal = !isChecked
        setChecked(newVal)

        const newTask = task
        newTask.isCompleted = newVal
        onEditTask(newTask)
    }

    const deleteTask = () => {
        const response = window.confirm("Are sure you want to delete the task?")
        if (response === true) {
            onDeleteTask(task.id)
        }
    }

    return (
        <div className={styles.showTodo}>
            <div className={styles.taskItem} key={task.id}>
                <div className={styles.showTodo_check}>
                    <input type="checkbox" id="todo-item-isSolved" checked={isChecked} onChange={handleOnCheck}/>
                </div>
                <div className={styles.showTodo_text}>
                    <div className={styles.contentText}>
                        <span>{task.title}</span>
                    </div>
                    {/*<TbEdit type="button" onClick={() => setEditModalVisibility(true)}/>*/}
                    <div className={styles.todoButtons}>
                        <Button type="button" onClick={() => setEditModalVisibility(true)}>change</Button>
                        <Button type="button" onClick={deleteTask}>delete</Button>
                    </div>
                </div>

                <EditTaskModal task={task} onEditTask={onEditTask} onDeleteTask={deleteTask} isVisible={isEditModalVisible}
                            setVisibility={setEditModalVisibility}/>
            </div>
        </div>
    )
}

export default ToDoListItem