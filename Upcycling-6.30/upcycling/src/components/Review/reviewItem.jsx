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
            <h3 className={styles.title}>{review.reviewTitle}</h3>
            <p className={styles.name}>{review.nickname}</p>
            <p className={styles.email}>({review.email})</p>
            <div className={styles.hashtags}>
                <span>#{review.reviewHashtags[0]&& review.reviewHashtags[0]}</span>
                <span>#{review.reviewHashtags[1]&& review.reviewHashtags[1]}</span>
                <span>#{review.reviewHashtags[2]&& review.reviewHashtags[2]}</span>
            </div>
            <div className={styles.likeBox}>
                <div className={styles.icon}>
                    <i className="fa-solid fa-heart"></i>
                </div>
                <p className={styles.amount}>{likeAmount}</p>
            </div>
        </section>
    );
};

export default ReviewItem;