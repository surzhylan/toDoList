import {useState} from "react";
import styles from "./EditRewardModal.module.css"
import AddRewardForm from "../add-reward/AddRewardModal";

const EditRewardModal = ({reward, onDeleteReward, onEditReward, isVisible, setVisibility}) => {
    const [titleInput, setTitleInput] = useState(reward.title);
    const [costInput, setCostInput] = useState(reward.cost);

    const handleTitleChange = (e) => {
        setTitleInput(e.currentTarget.value)
    }
    const handleSubmit = (e) => {
        let newReward = reward
        newReward.title = titleInput
        onEditReward(newReward)
        setVisibility(false);
    }

    const handleCancel = () => {
        setVisibility(false)
    }

    return (
        <div className={isVisible ? styles.editRewardModal : styles.editRewardModalHidden}
             onClick={() => setVisibility(false)}>
            <form className={styles.editRewardModalContent} onClick={e => e.stopPropagation()}
                  onSubmit={handleSubmit}>
                <input
                    className="input-title"
                    type="text"
                    value={titleInput.toString()}
                    onChange={handleTitleChange}
                    placeholder="Title"/>

                <input
                    className="input-cost"
                    type="number"
                    value={costInput.toString()}
                    onChange={(e) => setCostInput(Number.parseInt(e.currentTarget.value))}
                    placeholder="Cost"/>
                <div>
                    <input type="button" value="Cancel" onClick={handleCancel}/>
                    <input type="button" value="Delete" onClick={onDeleteReward}/>
                    <input type="submit" value="Save"/>
                </div>
            </form>
        </div>
    )
}

export default EditRewardModal