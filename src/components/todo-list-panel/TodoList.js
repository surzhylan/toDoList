import ToDoListItem from "./todo-item/ToDoListItem";
import AddTaskForm from "./add-task-form/AddTaskForm";
import styles from "./TodoList.module.css"

const TodoList = ({tasks, addTask, deleteTask, changeTask, onCheckTask}) => {
    return (
        <div className={styles.appWrapper}>
            <h5 className={styles.header}>Tasks: </h5>
            <div className={styles.todolist}>
                <AddTaskForm addTask={addTask}/>
                <div >
                    {tasks.map((task) => {
                        return (
                            <div key={task.id}>
                                <ToDoListItem task={task} onDeleteTask={deleteTask} onEditTask={changeTask} onCheckTask={onCheckTask}/>
                            </div>
                        )
                    })
                    }
                </div>
            </div>
        </div>
    )
}
export default TodoList