import React, {useState} from "react";
const DefaultRewardItem = ({defaultReward, buyItem}) => {

    return (
        <div key={defaultReward.id} onClick={() => buyItem(defaultReward.cost)}>
            <img src={defaultReward.image} height={"50px"} width={"50px"} alt="rewardImg"/>
            <div>
                <span>{defaultReward.title}</span>
                <div >
                    <span>{defaultReward.cost}</span>
                    <img src="/coin.png" height={"20px"} width={"20px"} alt="coin"/>
                </div>
            </div>
        </div>
    )
}
export default DefaultRewardItem