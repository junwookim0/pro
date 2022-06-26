import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './CSS/reviewItem.module.css'

//🍎 ReviewPage에서 map으로 사용되는 item 컴포넌트

const ReviewItem = ({review, keyword}) => {
    const navigate = useNavigate()

    const [likeAmount, setLikeAmout] =useState('')

    useEffect(()=>{
        if(review.likes === undefined) {
            return setLikeAmout('0')
        } else if ((review.likes !==undefined)) {
            let amount = Object.keys(review.likes)
            setLikeAmout(amount.length);
        }   
    })



    return (
        <section className={styles.container}>
            <img className={styles.reviewImg} src={review.reviewIMG} alt="review"
                onClick={()=>{
                    navigate(`/reviews/${review.id}`, {state : {review, keyword}})
                }}
            />
            <h3>{review.reviewTitle}</h3>
            <p>{review.nickname}</p>
            <div>
                <span>👍</span>
                <p>{likeAmount}</p>
            </div>
        </section>
    );
};

export default ReviewItem;