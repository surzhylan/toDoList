import AppHeader from "../app-header/AppHeader";
import TodoList from "../todo-list-panel/TodoList";
import styles from "./App.module.css"
import SearchPanel from "../search-panel/SearchPanel";
import HabitList from "../habbits-panel/HabitList";
import Navbar from "../navbar/navbar";


const App = () => {
    return (
        <div className={styles.appWrapper}>
            <Navbar/>
            <SearchPanel />
            <div className={styles.lists}>
                <TodoList/>
                {/*<HabitList/>*/}
            </div>
        </div>
    )
}

export default App;
