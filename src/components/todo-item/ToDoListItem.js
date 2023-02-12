
const ToDoListItem = ({task, onDeleteTask, onEditTask}) => {
    return (
        <div className='todo-item' key={task.id}>
            <span>{task.isCompleted}</span>
            <span>{task.title}</span>
        </div>
    )
}

export default ToDoListItem