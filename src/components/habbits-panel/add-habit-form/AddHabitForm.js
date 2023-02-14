import {useState} from "react";
import styles from './AddHabitForm.module.css'

const HabitTypes = {GOOD: "Good", BAD: "Bad"}

const AddHabitForm = ({addHabit}) => {
    const [titleInput, setTitleInput] = useState('')
    const [typeInput, setTypeInput] = useState(HabitTypes.GOOD)

    const handleTitleChange = (e) => {
        setTitleInput(e.currentTarget.value)
    }
    const handleTypeChange = () => {
        if (typeInput === HabitTypes.GOOD) {
            setTypeInput(HabitTypes.BAD)
        } else {
            setTypeInput(HabitTypes.GOOD)

        }
    }
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSubmit()
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        addHabit(titleInput, typeInput)
        resetUserInput()
    }

    const resetUserInput = () => {
        setTitleInput("")
        setTypeInput(HabitTypes.GOOD)
    }

    return (
        <form className={styles.container} onSubmit={handleSubmit}>
            <input className="input-title"
                   type="text"
                   value={titleInput}
                   onChange={handleTitleChange}
                   onKeyDown={handleKeyDown}
                   placeholder="Add new habit">
            </input>
            <button onClick={handleTypeChange}>{typeInput}</button>

        </form>
    )
}

export default AddHabitForm