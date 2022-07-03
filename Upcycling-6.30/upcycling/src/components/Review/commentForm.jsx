import React from 'react';
import { useRef } from 'react';
import styles from './CSS/commentForm.module.css'
import { format } from "date-fns";

import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { useState } from 'react';

const CommentForm = ({ getComment, review }) => {
    const textareaRef = useRef();
    const [text, setText] = useState('')    


    const { user } = useContext(AuthContext);
    const userId = user.uid
    const userName = user.displayName;
    const userEmail = user.email;
    const userPhoto = user.photoURL


    let date = new Date();

    const onChange = (event) => {
        if(event.currentTarget == null) {
            return;
        }
        event.preventDefault();
        setText(event.target.value)

    }

    //🍎props로 comment보내주기
    const onSubmit = (event)=> {
        event.preventDefault();
        getComment(newComment)
        textareaRef.current.reset()
    }


    const newComment = {
        id : 'C' + Date.now(),
        userName : userName,
        userEmail: userEmail,
        userPhoto : userPhoto,
        comment : text || '',
        isToggle : false,
        isForm : false,
        date : format(date, "yyyy.MM.dd HH:mm"),
        reviewTitle : review.reviewTitle,
        reviewId : review.id,
        reviewIMG : review.reviewIMG,
        userId : userId,
    }

    return (
        <div className={styles.container}>
            <h3 className={styles.user}>{userName}<span>({userEmail})</span></h3>
            <form className={styles.comment_form} ref={textareaRef}>
                <textarea placeholder='댓글을 남겨보세요'  onChange={onChange} className={styles.textarea} name="comment" id="" cols="30" rows="10"></textarea>
                <button className={styles.button} onClick={onSubmit}>댓글 등록</button>
            </form>
        </div>
    );
};

export default CommentForm;