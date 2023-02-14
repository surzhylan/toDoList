import styles from './AppHeader.module.css'

const AppHeader = () => {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.message}>Welcome to your To-do List</h1>
        </div>
    )
}

export default AppHeader