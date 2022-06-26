import React from 'react';
import { useRef } from 'react';
import styles from './CSS/search.module.css'

//🍎검색컴포넌트
const Search = ({onSearch}) => {

    const inputRef = useRef()

    const onSubmit = () => {

        onSearch(inputRef.current.value)
        inputRef.current.value = ''
    }


    return (
        <div className={styles.container}>
            <span className={styles.title}>해시태그검색</span>
            <input ref={inputRef} type="text" />
            <button
            onClick={onSubmit}
            className={styles.search}
            >
                <i class="fa-solid fa-magnifying-glass"></i>
            </button> 
        </div>
    );
};

export default Search;