import {useState} from "react";
import EditTaskModal from "../edit-task-modal/EditTaskModal";

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
        <div className='todo-item' key={task.id}>
            <input type="checkbox" id="todo-item-isSolved" checked={isChecked} onChange={handleOnCheck}/>
            <span>{task.title}</span>
            <button type="button" onClick={() => setEditModalVisibility(true)}>change</button>
            <button type="button" onClick={deleteTask}>delete</button>

            <EditTaskModal task={task} onEditTask={onEditTask} onDeleteTask={deleteTask} isVisible={isEditModalVisible}
                           setVisibility={setEditModalVisibility}/>
        </div>
    )
}

export default ToDoListItem