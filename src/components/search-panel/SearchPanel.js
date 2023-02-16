import styles from './SearchPanel.module.css'

const SearchPanel = () => {
    return (
        <div className={styles.searchDiv}>
            <div className={styles.wrapper}>
                <input type="text"
                    className={styles.input}
                    placeholder={"Search"}/>
            </div>
        </div>
    );
};

export default SearchPanel;