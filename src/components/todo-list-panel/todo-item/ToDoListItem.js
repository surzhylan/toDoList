import {useState} from "react";
import styles from "../todo-item/ToDoListItem.module.css"
import {Button} from "react-bootstrap";
import { TbEdit } from "react-icons/tb";
import { MdDelete } from "react-icons/md";

const ToDoListItem = ({task, onDeleteTask, onEditTask, onCheckTask}) => {
    const [isChecked, setChecked] = useState(task.isCompleted)
    const [isEditMode, setEditMode] = useState(false)
    const [title, setTitle] = useState(task.title)
    const [rewardAmount, setRewardAmount] = useState(task.rewardAmount)
    const handleOnCheck = (e) => {
        const newVal = !isChecked
        setChecked(newVal)
        const newTask = task
        newTask.isCompleted = newVal
        onCheckTask(newTask)
    }

    const deleteTask = () => {
        const response = window.confirm("Are sure you want to delete the task?")
        if (response === true) {
            onDeleteTask(task.id)
        }
    }

    const handleEdit = () => {
        if (title && rewardAmount) {
            const newTask = task
            newTask.title = title
            newTask.rewardAmount = rewardAmount
            onEditTask(newTask)
            setEditMode(false)
        } else {
            window.alert("Fields must not be empty!")
        }
    }

    const handleOnCancel = () => {
        setTitle(task.title)
        setRewardAmount(task.rewardAmount)
        setEditMode(false)
    }


    return (
        <div className={styles.showTodo}>
            <div className={styles.taskItem} key={task.id}>
                {isEditMode
                    //On Edit mode
                    ? <form onSubmit={handleEdit}>
                        <div className={styles.editTask}>
                            <div className={styles.editTaskInputs}>
                                <div className={styles.editTaskInput1}>
                                    <input type="text" placeholder="Enter new title" value={title.toString()} onChange={(e) => {
                                        setTitle(e.target.value)
                                    }}/>
                                </div>
                                <div className={styles.editTaskInput2}>
                                    <input type="number" placeholder="0" value={rewardAmount.toString()} onChange={(e) => {
                                        setRewardAmount(Number.parseInt(e.target.value))
                                    }}/>
                                </div>
                            </div>
                            <div className={styles.editTaskBtn}>
                                <Button variant="light" type="button" onClick={handleOnCancel}>cancel</Button>
                                <Button variant="light" type="button" onClick={handleEdit}>save</Button>
                            </div>
                        </div>
                    </form>

                    //On show mode
                    : <div className={styles.showTodo_text}>
                        <div className={styles.showTodo_check}>
                            <input type="checkbox" id="todo-item-isSolved" checked={isChecked} onChange={handleOnCheck}/>
                        </div>
                        <div className={styles.contentText}>
                            <span>{task.title}</span>
                        </div>
                        {/*<TbEdit type="button" onClick={() => setEditModalVisibility(true)}/>*/}
                        <div className={styles.todoButtons}>
                            <Button variant="light" type="button" onClick={() => setEditMode(true)}><TbEdit /></Button>
                            <Button variant="light" type="button" onClick={deleteTask}><MdDelete /></Button>
                        </div>
                    </div>}
            </div>
        </div>
    )
}

export default ToDoListItem