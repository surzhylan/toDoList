import {useState} from "react";

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
        <div className="add-task-section">
            <form className="add-task-content" onSubmit={handleSubmit}>
                <input className="input-title"
                       type="text"
                       value={titleInput}
                       onChange={handleTitleChange}
                       onKeyDown={handleKeyDown}
                       placeholder="Add new task"/>
            </form>
        </div>
    )
}

export default AddTaskForm