import styles from './SearchPanel.module.css'
import {useState} from "react";

//Показывает список результатов, при нажатии на каждой открывает модальное окно изменения
const SearchPanel = ({query, setNewQuery}) => {
    const [queryInput, setQueryInput] = useState(query == null ? '' : query)
    const handleSubmit = () => {
        //If queryInput is not empty or null
        if (queryInput !== '' && queryInput) {
            setNewQuery(queryInput)
        } else {
            setQueryInput(null)
        }
    }

    const handleClear = (e) => {
        setQueryInput('')
        setNewQuery(null)
    }

    return (
        <form className={styles.searchDiv}>
            <input type="text"
                   id="search"
                   className={styles.input}
                   value={queryInput}
                   onChange={(e) => setQueryInput(e.target.value)}
                   placeholder={"Search"}/>
            <button type={"button"} onClick={handleSubmit}>Search</button>
            <button type={"button"} onClick={handleClear}>Clear</button>
        </form>
    );
};

export default SearchPanel;