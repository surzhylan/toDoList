import styles from './SearchPanel.module.css'
import {useEffect, useRef, useState} from "react";

//Показывает список результатов, при нажатии на каждой открывает модальное окно изменения
const SearchPanel = () => {
    const [query, setQuery] = useState('');

    return (
        <form className={styles.searchDiv}>
            <input type="text"
                   id="search"
                   className={styles.input}
                   value={query}
                   onChange={(e) => setQuery(e.target.value)}
                   placeholder={"Search"}/>
            <button type={"button"} onClick={() => setQuery('')}>Clear</button>
        </form>
    );
};

export default SearchPanel;