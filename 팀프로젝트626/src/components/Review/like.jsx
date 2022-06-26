import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import styles from './CSS/like.module.css'

import { useContext } from "react";
import AuthContext from "../context/AuthContext";


function Like({reviewRepository, review, clickLike, removeLike}) {

        const [reviews, setReviews] = useState([])
        const [currentReview, setCurrentReview] = useState([])
        const [likeState, setLikeState] =useState('🤍')

        const { user } = useContext(AuthContext);
        const userId = user.uid

        let currentReviewId = review.id

        // console.log(currentReview)
        useEffect(()=> {
            const stopSync = reviewRepository.syncReviews(reviews => {
            setReviews(reviews);
        })
            return () => stopSync();
        },[userId, reviewRepository])
        
        useEffect(()=> {
            let reviewArray = Object.keys(reviews)
            reviewArray.map(item=> {
                if(item === currentReviewId) {
                    setCurrentReview(reviews[item])
                    
                }
            })
        })

        useEffect(()=>{
            setLikeState('🤍')
            if(currentReview.likes !== undefined) {
                let likesArray = Object.keys(currentReview.likes)

                likesArray.map(item=>{
                    if(item ===userId) {
                        setLikeState('❤️')
                    }
                })
            }
        })

        //🍎like 누르기
        const onClickLike = () => {

            if(currentReview.likes === undefined) {
                clickLike(userId, currentReview)

                setLikeState('❤️')
                
            } else if (currentReview.likes !== undefined) {
                let likesArray = Object.keys(currentReview.likes)
                likesArray.map(item=>{
                    if(item !==userId) {
                        clickLike(userId, currentReview)

                        setLikeState('❤️')
                    } else {
                        removeLike(userId, currentReview)
                        setLikeState('🤍')
                    }
                })
            }
        }

    return (
            <p 
            className={styles.like}
            onClick={onClickLike}
            >{likeState}</p>)
}

export default Like
