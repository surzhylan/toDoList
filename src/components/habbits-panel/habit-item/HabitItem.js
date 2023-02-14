import {useState} from "react";
import EditHabitModal from "../edit-habit-modal/EditHabitModal";

const HabitListItem = ({habit, onDeleteTask, onEditTask}) => {
    const [isEditModalVisible, setEditModalVisibility] = useState(false)

    

    const deleteTask = () => {
        const response = window.confirm("Are sure you want to delete the task?")
        if (response === true) {
            onDeleteTask(habit.id)
        }
    }

    return (
        <div key={habit.id}>
            <span>{habit.title}</span>

            <button type="button" onClick={() => setEditModalVisibility(true)}>change</button>
            <button type="button" onClick={deleteTask}>delete</button>

            <EditHabitModal task={habit} onEditTask={onEditTask} onDeleteTask={deleteTask} isVisible={isEditModalVisible}
                           setVisibility={setEditModalVisibility}/>
        </div>
    )
}

export default HabitListItem