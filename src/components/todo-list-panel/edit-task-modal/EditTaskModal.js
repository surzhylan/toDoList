import styles from "./EditTaskModal.module.css"
import {useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const EditTaskModal = ({task, onDeleteTask, onEditTask, isVisible, setVisibility}) => {
    const [titleInput, setTitleInput] = useState(task.title);

    const handleTitleChange = (e) => {
        setTitleInput(e.currentTarget.value)
    }
    const handleSubmit = (e) => {
        let newTask = task
        newTask.title = titleInput
        onEditTask(newTask)
        setVisibility(false);
    }

    const handleCancel = () => {
        setVisibility(false)
    }

    return (
        <div className={isVisible ? styles.editTaskModal : styles.editTaskModalHidden} onClick={()=>setVisibility(false)}>
            <form className={styles.editTaskModalContent} onClick={e => e.stopPropagation()}
                  onSubmit={handleSubmit}>
                <input
                    className={styles.inputTitle}
                    type="text"
                    value={titleInput.toString()}
                    onChange={handleTitleChange}
                    placeholder="Title"/>
                <div className={styles.modalButtons}>
                    <input type="button" value="Cancel" onClick={handleCancel}/>
                    <input type="button" value="Delete" onClick={onDeleteTask}/>
                    <input type="submit" value="Save"/>
                </div>
            </form>
        </div>
    )
}

export default EditTaskModal