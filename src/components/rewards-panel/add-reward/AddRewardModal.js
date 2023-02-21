import {useState} from "react";
import styles from './AddTaskForm.module.css'

const AddRewardForm = ({addReward}) => {
    const [titleInput, setTitleInput] = useState("")

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSubmit()
        }
    }
    const handleSubmit = (e) => {
        addReward(titleInput)
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
                   onChange={(e) => setTitleInput(e.target.value)}
                   onKeyDown={handleKeyDown}
                   placeholder="Add new reward"/>
        </form>
    )
}

export default AddRewardForm