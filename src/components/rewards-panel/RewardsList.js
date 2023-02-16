import {useEffect, useState} from "react";
import {v4 as uuidv4} from "uuid";
import styles from "./TodoList.module.css";
import AddRewardForm from "./add-reward/AddRewardModal";
import RewardItem from "./reward/RewardItem";

const RewardsList = ({coins, setCoins}) => {
    const savedRewards = localStorage.getItem('rewards')
    const [rewards, setRewards] = useState([])

    useEffect(() => {
        setRewards(savedRewards ? JSON.parse(savedRewards) : []);
    }, [])

    useEffect(() => {
        localStorage.setItem('rewards', JSON.stringify(rewards));
    }, [rewards])

    const addReward = (title) => {
        if (title) {
            const newReward = {
                id: uuidv4(),
                title: title,
                cost: 5
            }
            setRewards([...rewards, newReward])
            console.log(newReward)
        }
    }

    const deleteReward = (deletedId) => {
        let newReward = rewards.filter(reward => reward.id !== deletedId)
        setRewards(newReward)
    }

    const changeReward = (changedReward) => {
        if (changedReward) {
            const index = rewards.findIndex((obj => obj.id === changedReward.id))
            let newReward = [...rewards]
            newReward[index] = changedReward
            setRewards(newReward)
        }
    }

    const butItem = (cost) => {
        if(coins >= cost) {
            setCoins(coins - cost)
        } else {
            window.alert("Not enough money")
        }
    }

    return (
        <div className={styles.rewardListWrapper}>
            <h5 className={styles.header}>Rewards: </h5>
            <div className={styles.rewardlistTable}>
                <AddRewardForm addReward={addReward}/>
                {rewards.map((reward) => {
                    return (
                        <div key={reward.id}>
                            <RewardItem reward={reward} onDeleteReward={deleteReward} onEditReward={changeReward} buyItem={butItem}/>
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}
export default RewardsList