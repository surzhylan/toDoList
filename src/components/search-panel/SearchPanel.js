import styles from './SearchPanel.module.css'

const SearchPanel = () => {
    return (
        <div className={styles.wrapper}>
            <input type="text"
                   className={styles.input}
                   placeholder={"Search"}/>
        </div>
    );
};

export default SearchPanel;