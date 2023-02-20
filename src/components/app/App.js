import TodoList from "../todo-list-panel/TodoList";
import styles from "./App.module.css"
import SearchPanel from "../search-panel/SearchPanel";
import RewardsList from "../rewards-panel/RewardsList";
import {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../navbar/navbar";
import {v4 as uuidv4} from "uuid";

const App = () => {
    const savedCoins = localStorage.getItem('coins')
    const [coins, setCoins] = useState(0)

    const savedTasks = localStorage.getItem('tasks')
    const [tasks, setTasks] = useState([])

    const savedRewards = localStorage.getItem('rewards')
    const [rewards, setRewards] = useState([])
    const [filterQuery, setFilterQuery] = useState(null)

    useEffect(() => {
        setCoins(savedCoins ? Number.parseInt(savedCoins) : 0);
        setTasks(savedTasks ? JSON.parse(savedTasks) : []);
        setRewards(savedRewards ? JSON.parse(savedRewards) : []);
    }, [])

    useEffect(() => {
        localStorage.setItem('coins', JSON.stringify(coins));
    }, [coins])

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks])

    useEffect(() => {
        localStorage.setItem('rewards', JSON.stringify(rewards));
    }, [rewards])

    //Tasks
    const addTask = (title) => {
        if (title) {
            const newTask = {
                id: uuidv4(),
                title: title,
                isCompleted: false,
                rewardAmount: 10
            }
            setTasks([...tasks, newTask])
            console.log(newTask)
        }
    }

    const changeTask = (newTask) => {
        if (newTask) {
            const index = tasks.findIndex((obj => obj.id === newTask.id))



            if (newTask.isCompleted !== tasks[index]) {

            }

            let newTasks = [...tasks]
            newTasks[index] = newTask
            setTasks(newTasks)
        }
    }

    const checkTask = (task) => {
        if(task) {
            const index = tasks.findIndex((obj => obj.id === task.id))

            //Give reward if check was changed
            console.log("New task:" + task.title + task.isCompleted)
            console.log("Prev task:" + tasks[index].title + tasks[index].isCompleted)

            if (task.isCompleted === true) setCoins(coins + task.rewardAmount)
            else setCoins(coins - task.rewardAmount)
        }
    }

    const deleteTask = (deletedId) => {
        let newTasks = tasks.filter(task => task.id !== deletedId)
        setTasks(newTasks)
    }

    //Reward
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

    //Filter
    const getFilteredTasks = () => {
        if (filterQuery == null) return tasks
        else return tasks.filter((task) => {
            return task.title.toLowerCase().includes(filterQuery.toLowerCase())
        })
    }

    const getFilteredRewards = () => {
        if (filterQuery == null) return rewards
        else return rewards.filter((reward) => {
            return reward.title.toLowerCase().includes(filterQuery.toLowerCase())
        })
    }
    const handleFilterQueryChange = (newQuery) => {
        setFilterQuery(newQuery)
    }

    return (
        <div className={styles.appWrapper}>
            <Navbar coins={coins}/>
            <SearchPanel query={filterQuery} setNewQuery={handleFilterQueryChange}/>
            <div className={styles.lists}>
                <TodoList coins={coins} setCoins={setCoins} tasks={getFilteredTasks()} addTask={addTask}
                          changeTask={changeTask}
                          deleteTask={deleteTask} onCheckTask={checkTask}/>
                <RewardsList coins={coins} setCoins={setCoins} rewards={getFilteredRewards()} addReward={addReward}
                             changeReward={changeReward} deleteReward={deleteReward}/>
            </div>
        </div>
    )
}

export default App;
