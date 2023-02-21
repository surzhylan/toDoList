import styles from './SearchPanel.module.css'
import {useState} from "react";
import { Button } from 'react-bootstrap';

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
        <form className={styles.searchWrapper}>
            <div className={styles.searchInput}>
                <input type="text"
                    id="search"
                    className={styles.input}
                    value={queryInput}
                    onChange={(e) => setQueryInput(e.target.value)}
                    placeholder={"Search"}/>
            </div>
            <div className={styles.searchButton}>
                <Button variant="dark" type={"button"} onClick={handleSubmit}>Search</Button>
                <Button variant="dark" type={"button"} onClick={handleClear}>Clear</Button>
            </div>
        </form>
    );
};

export default SearchPanel;