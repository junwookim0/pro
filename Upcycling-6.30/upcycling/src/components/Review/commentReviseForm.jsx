import React from 'react';
import styles from './CSS/commentReviseForm.module.css'
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

const CommentReviseForm = ({ reviewRepository, id,  isForm, currentComment, getComment, formState, setFormState }) => {

    const [changedComment, setChangedComment] = useState({}) 
    const [comment, setCommet] = useState({})
    const textareaRef = useRef();

    const [toggle, setToggle] = useState(isForm);

    useEffect(()=>{
        if(formState && currentComment) {
            if(currentComment.id === id) {
                return setToggle(true);
            }
        }
    },[formState,toggle])


    useEffect(()=> {
        setCommet(currentComment)
    },[currentComment,reviewRepository])

    const onChange = event => {
        if(event.currentTarget === null) {
            return;
        }
        event.preventDefault();
        setChangedComment( {
            ...comment,
            [event.currentTarget.name] : event.currentTarget.value,
        });
    };

    //🍎props로 comment보내주기
    const onSubmit = ()=> {
        getComment(changedComment)
        textareaRef.current.value = ''
        setToggle(false);
        setFormState(false)
    }

    //🍎창 취소
    const onCancle = () =>{
        setToggle(false);
        setFormState(false)
    }

    const canSave = Boolean(Object.keys(changedComment).length !== 0) 

    return (
        <>
        {currentComment!==undefined && (
            <div 
                id={id} 
                className={toggle ? `${styles.container}`: `${styles.container_none}`}
            >
            <h3 className={styles.user}>{currentComment.userName}<span>({currentComment.userEmail})</span></h3>
                <div className={styles.comment_form} name='comment'>
                    <textarea 
                    onChange={onChange} 
                    className={styles.textarea} 
                    name="comment" 
                    ref={textareaRef}
                    ></textarea>
                    <div className={styles.buttons}>
                        <button className={styles.button} onClick={()=>onCancle()} >취소</button>
                        <button  className={styles.button_ok} onClick={()=>onSubmit()}>댓글 수정</button>
                    </div>
                </div>
            </div>
            )} 
        </>
    );
};

export default CommentReviseForm;