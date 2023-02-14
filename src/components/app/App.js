import AppHeader from "../todo-header/AppHeader";
import TodoList from "../todo-list/TodoList";
import styles from "./App.module.css"
import SearchPanel from "../search-panel/SearchPanel";


const App = () => {
    return (
        <div className={styles.wrapper}>
            <AppHeader/>
            <SearchPanel />
            <div className={styles.lists}>
                <TodoList/>
                <TodoList/>
            </div>
        </div>
    )
}

export default App;
