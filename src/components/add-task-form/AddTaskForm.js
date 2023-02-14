import {useState} from "react";
import styles from './AddTaskForm.module.css'

const AddTaskForm = ({addTask}) => {
    const [titleInput, setTitleInput] = useState('')
    const handleTitleChange = (e) => {
        setTitleInput(e.currentTarget.value)
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSubmit()
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(titleInput)
        resetUserInput()
    }

    const resetUserInput = () => {
        setTitleInput("")
    }

    return (
        <form className={styles.container} onSubmit={handleSubmit}>
            <input className="input-title"
                   type="text"
                   value={titleInput}
                   onChange={handleTitleChange}
                   onKeyDown={handleKeyDown}
                   placeholder="Add new task"/>
        </form>
    )
}

export default AddTaskForm