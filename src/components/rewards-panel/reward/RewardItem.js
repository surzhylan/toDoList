import React, {useState} from "react";
import {Button} from "react-bootstrap";

const RewardItem = ({reward, onDeleteReward, onEditReward, buyItem}) => {
    const [isEditMode, setEditMode] = useState(false)

    const [title, setTitle] = useState(reward.title)
    const [cost, setCost] = useState(reward.cost)

    const handleDelete = () => {
        const response = window.confirm("Are sure you want to delete the reward?")
        if (response === true) {
            onDeleteReward(reward.id)
        }
    }

    const handleEdit = () => {
        if(title && cost) {
            const newReward = reward
            newReward.title = title
            newReward.cost = cost
            onEditReward(newReward)
            setEditMode(false)
        } else {
            window.alert("Fields must not be empty!")
        }
    }

    return (
        <div className="reward-item" key={reward.id}>
            {isEditMode
                //On Edit mode
                ? <form onSubmit={handleEdit}>
                    <input type="text" placeholder="Enter new title" value={title.toString()} onChange={(e) => {
                        setTitle(e.target.value)
                    }}/>
                    <input type="number" placeholder="0" value={cost.toString()} onChange={(e) => {
                        setCost(Number.parseInt(e.target.value))
                    }}/>
                    <Button type="button" onClick={() => setEditMode(false)}>cancel</Button>
                    <Button type="button" onClick={handleEdit}>save</Button>
                </form>
                : <div>
                    <span>{reward.title}</span>
                    <div onClick={() => buyItem(reward.cost)}>
                        <span>{reward.cost}</span>
                        <img src="coin.png" height={"20px"} width={"20px"} alt="coin"/>
                    </div>

                    <button type="button" onClick={() => setEditMode(true)}>change</button>
                    <button type="button" onClick={handleDelete}>delete</button>
                </div>
            }
        </div>
    )
}
export default RewardItem