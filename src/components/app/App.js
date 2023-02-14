import AppHeader from "../todo-header/AppHeader";
import TodoList from "../todo-list/TodoList";
import styles from "./App.module.css"


const App = () => {
    return (
        <div className={styles.wrapper}>
            <AppHeader/>
            <TodoList/>
        </div>
    )
}

export default App;
