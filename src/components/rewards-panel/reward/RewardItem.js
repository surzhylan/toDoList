import React, {useState} from "react";
import {Button} from "react-bootstrap";
import styles from "../TodoList.module.css";
import { TbEdit } from "react-icons/tb";
import { MdDelete } from "react-icons/md";

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

    const handleOnCancel = () => {
        setEditMode(false)
        setTitle(reward.title)
        setCost(reward.cost)
    }

    return (
        <div className={styles.rewardItem} key={reward.id}>
            {isEditMode
                //On Edit mode
                ? <div className={styles.editRewardForm}>
                    <form onSubmit={handleEdit}>
                        <div className={styles.editReward}>
                            <div className={styles.editRewardInputs}>
                                <div className={styles.editRewardInput1}>
                                    <input type="text" placeholder="Enter new title" value={title.toString()} onChange={(e) => {
                                        setTitle(e.target.value)
                                    }}/>
                                </div>
                                <div className={styles.editRewardInput2}>
                                    <input type="number" placeholder="0" value={cost.toString()} onChange={(e) => {
                                        setCost(Number.parseInt(e.target.value))
                                    }}/>
                                </div>
                            </div>
                            <div className={styles.editRewardBtn}>
                                <Button variant="light" className="btn-sm" type="button" onClick={handleOnCancel}>cancel</Button>
                                <Button variant="light" className="btn-sm" type="button" onClick={handleEdit}>save</Button>
                            </div>
                        </div>
                    </form>
                </div>
                : <div className={styles.rewardItem1}>
                    <div className={styles.rewardItem1_text} onClick={() => buyItem(reward.cost)}>
                        <div className={styles.reward1Title}>
                            <span>{reward.title}</span>
                        </div>
                        <div className={styles.rewardCoin}>
                            <span>{reward.cost}</span>
                            <img src="/coin.png" height={"20px"} width={"20px"} alt="coin"/>
                        </div>
                    </div>
                    <div className={styles.btnReward}>
                        <Button variant="light" className="btn-sm" type="button" onClick={() => setEditMode(true)}><TbEdit /></Button>
                        <Button variant="light"  className="btn-sm" type="button" onClick={handleDelete}><MdDelete /></Button>
                    </div>
                </div>
            }
        </div>
    )
}
export default RewardItem