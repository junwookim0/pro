import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './CSS/writeButton.module.css'

const WriteButton = () => {
    const navigator = useNavigate()

    return (
        <button className={styles.button_write}
            onClick={()=>{
                navigator('/reviews/write')
            }}> 글 작성하기
        </button>
    );
};

export default WriteButton;