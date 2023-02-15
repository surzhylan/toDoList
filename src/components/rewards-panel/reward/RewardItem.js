import React, {useState} from "react";
import EditRewardModal from "../edit-reward-form/EditRewardModal";

const RewardItem = ({reward, onDeleteReward, onEditReward, buyItem}) => {
    const [isEditModalVisible, setEditModalVisibility] = useState(false)
    const handleOnClick = (e) => {
        buyItem(reward.cost)
    }

    const deleteReward = () => {
        const response = window.confirm("Are sure you want to delete the reward?")
        if (response === true) {
            onDeleteReward(reward.id)
        }
    }

    return (
        <div className="reward-item" key={reward.id}>
            <span>{reward.title}</span>
            <div onClick={() => buyItem(reward.cost)}>
                <span>{reward.cost}</span>
                <img src="coin.png" alt="coin"/>
            </div>

            <button type="button" onClick={() => setEditModalVisibility(true)}>change</button>
            <button type="button" onClick={deleteReward}>delete</button>

            <EditRewardModal reward={reward} onEditReward={onEditReward} onDeleteReward={deleteReward}
                             isVisible={isEditModalVisible}
                             setVisibility={setEditModalVisibility}/>
        </div>
    )
}
export default RewardItem