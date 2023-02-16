import {useState} from "react";
import styles from "../todo-item/ToDoListItem.module.css"
import {Button} from "react-bootstrap";

const ToDoListItem = ({task, onDeleteTask, onEditTask, onCheckTask}) => {
    const [isChecked, setChecked] = useState(task.isCompleted)
    const [isEditMode, setEditMode] = useState(false)
    const [title, setTitle] = useState(task.title)
    const [rewardAmount, setRewardAmount] = useState(task.rewardAmount)
    const handleOnCheck = (e) => {
        const newVal = !isChecked
        setChecked(newVal)

        if (newVal === true) onCheckTask(task.rewardAmount)
        else onCheckTask(-task.rewardAmount)

        let newTask = task
        newTask.isCompleted = newVal
        onEditTask(newTask)
    }

    const handleEdit = () => {
        if(title && rewardAmount) {
            const newTask = task
            newTask.title = title
            newTask.rewardAmount = rewardAmount
            onEditTask(newTask)
            setEditMode(false)
        } else {
            window.alert("Fields must not be empty!")
        }
    }

    const handleDelete = () => {
        const response = window.confirm("Are sure you want to delete the task?")
        if (response === true) {
            onDeleteTask(task.id)
        }
    }

    return (
        <div className={styles.showTodo}>
            <div className={styles.taskItem} key={task.id}>
                {isEditMode
                    //On Edit mode
                    ? <form onSubmit={handleEdit}>
                        <input type="text" placeholder="Enter new title" value={title.toString()} onChange={(e) => {
                            setTitle(e.target.value)
                        }}/>
                        <input type="number" placeholder="0" value={rewardAmount.toString()} onChange={(e) => {
                            setRewardAmount(Number.parseInt(e.target.value))
                        }}/>
                        <Button type="button" onClick={() => setEditMode(false)}>cancel</Button>
                        <Button type="button" onClick={handleEdit}>save</Button>
                    </form>

                    //On show mode
                    : <div className={styles.showTodo_text}>
                        <div className={styles.showTodo_check}>
                            <input type="checkbox" id="todo-item-isSolved" checked={isChecked}
                                   onChange={handleOnCheck}/>
                        </div>
                        <div className={styles.contentText}>
                            <span>{task.title}</span>
                        </div>
                        {/*<TbEdit type="button" onClick={() => setEditModalVisibility(true)}/>*/}
                        <div className={styles.todoButtons}>
                            <Button type="button" onClick={() => setEditMode(true)}>change</Button>
                            <Button type="button" onClick={handleDelete}>delete</Button>
                        </div>
                    </div>}

            </div>
        </div>
    )
}

export default ToDoListItem