import {useState} from "react";

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
        <form onSubmit={handleSubmit}>
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