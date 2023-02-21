import styles from "./TodoList.module.css";
import AddRewardForm from "./add-reward/AddRewardModal";
import RewardItem from "./reward/RewardItem";
import DefaultRewardItem from "./reward/DefaultRewardItem";
import DefaultRewards from "../../utils/default-rewards";

const RewardsList = ({rewards, addReward, deleteReward, changeReward, coins, setCoins}) => {
    const defaultRewards = DefaultRewards
    const butItem = (cost) => {
        if (coins >= cost) {
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
                            <RewardItem reward={reward} onDeleteReward={deleteReward} onEditReward={changeReward}
                                        buyItem={butItem}/>
                        </div>
                    )
                })
                }
                {defaultRewards.map((defaultReward) => {
                    return (
                        <div key={defaultReward.id}>
                            <DefaultRewardItem defaultReward={defaultReward} buyItem={butItem}/>
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}
export default RewardsList