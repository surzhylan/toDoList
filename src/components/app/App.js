import AppHeader from "../app-header/AppHeader";
import TodoList from "../todo-list-panel/TodoList";
import styles from "./App.module.css"
import SearchPanel from "../search-panel/SearchPanel";


const App = () => {
    return (
        <div className={styles.appWrapper}>
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
