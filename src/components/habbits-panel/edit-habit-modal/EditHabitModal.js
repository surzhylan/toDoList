import styles from './EditHabitModal.css'
import {useState} from "react";

const EditHabitModal = ({habit, onDeleteHabit, onEditHabit, isVisible, setVisibility}) => {
    const [titleInput, setTitleInput] = useState(habit.title);

    const handleSubmit = (e) => {
        e.preventDefault();
        let newHabit = habit
        newHabit.title = titleInput
        onEditHabit(newHabit)
        setVisibility(false);
    }

    const handleCancel = () => {
        setVisibility(false)
    }

    return (
        <div className={isVisible ? styles.editHabitModal : styles.editHabitModalHidden}
             onClick={() => setVisibility(false)}>
            <form className={styles.editHabitModalContent} onClick={e => e.stopPropagation()}
                  onSubmit={handleSubmit}>
                <input
                    className="input-title"
                    type="text"
                    value={titleInput.toString()}
                    onChange={(e) => setTitleInput(e.target.value)}
                    placeholder="Title"/>
                <div>
                    <input type="button" value="Cancel" onClick={handleCancel}/>
                    <input type="button" value="Delete" onClick={onDeleteHabit}/>
                    <input type="submit" value="Save"/>
                </div>
            </form>
        </div>
    )
}

export default EditHabitModal