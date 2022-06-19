import React from 'react'
import styles from './CSS/like.modules.css'

function Like({review, userId, clickLike}) {
        //🍎like 누르기
        const onClickLike = (event) => {
            event.preventDefault();
            clickLike(userId, review)
        }


    return (
            <button 
            className={styles.like}
            onClick={onClickLike}
            >👍</button>)
}

export default Like
