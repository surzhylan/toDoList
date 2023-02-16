import TodoList from "../todo-list-panel/TodoList";
import styles from "./App.module.css"
import SearchPanel from "../search-panel/SearchPanel";
import Navbar from "../navbar/Navbar";
import RewardsList from "../rewards-panel/RewardsList";
import {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    const savedCoins = localStorage.getItem('coins')
    const [coins, setCoins] = useState(0)

    useEffect(() => {
        setCoins(savedCoins ? Number.parseInt(savedCoins) : 0);
    }, [])

    useEffect(() => {
        localStorage.setItem('coins', JSON.stringify(coins));
    }, [coins])
    console.log(typeof (coins))
    return (
        <div className={styles.appWrapper}>
            <Navbar coins={coins}/>
            {/*<SearchPanel/>*/}
            <div className={styles.lists}>
                <TodoList coins={coins} setCoins={setCoins}/>
                <RewardsList coins={coins} setCoins={setCoins}/>
            </div>
        </div>
    )
}

export default App;
