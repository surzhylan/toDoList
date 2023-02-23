import React, {useState} from "react";
import styles from "../TodoList.module.css";
const DefaultRewardItem = ({defaultReward, buyItem}) => {

    return (
        <div className={styles.default_reward1} key={defaultReward.id} onClick={() => buyItem(defaultReward.cost)}>
            <div className={styles.default_reward1_img}>
                <img src={defaultReward.image} height={"68px"} width={"68px"} alt="rewardImg"/>
            </div>
            <div className={styles.default_reward1_text}>
                <div className={styles.default_reward1_title}>
                    <span>{defaultReward.title}</span>
                </div>
                <div className={styles.default_reward1_price}>
                    <span>{defaultReward.cost}</span>
                    <img src="/coin.png" height={"20px"} width={"20px"} alt="coin"/>
                </div>
            </div>
        </div>
    )
}
export default DefaultRewardItem