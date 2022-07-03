import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './CSS/reviewDetail.module.css'
import Like from './like';

import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import Nav from '../Nav/Nav';
import SubMainBannerReviews from '../banner/SubMainBannerReviews';
import Search from './Search';
import CommentForm from './commentForm';
import CommentReviseForm from './commentReviseForm';
import WriteButton from './writeButton';
import Menu from './menu';
import { useRef } from 'react';



//🍎 reviewPage에서 item의 이미지를 클릭했을 때 이동하는 컴포넌트
//Reivew의 전체적인 내용을 출력

const ReviewDetail = ({ deleteReview, reviewRepository, createAndUpdateComment, deleteComment, clickLike, removeLike}) => {
    const location = useLocation();
    const navigation = useNavigate();
    const { user } = useContext(AuthContext);
    //🍎user정보
    const userId = user.uid;

    //현재 review관련 useState
    const [reviewId] = useState(location.state.review.id)
    const [reviewState] = useState(location.state.review)
    const [reviews, setReviews] = useState([])

    //🍎firebase에 저장된 코멘트 받아오기
    const [currentReview, setCurrentReview] = useState()
    const [comments,setComments] = useState([])
    const [currentComment, setCurrentComment] = useState()

    const [showCommentForm, setShowCommentForm] = useState(false);

    const divRef = useRef();

    //🍎firebase에 저장된 review받아오기
    useEffect(()=> {
    const stopSync =  reviewRepository.syncReviews(reviews => {
        setReviews(reviews);
    })
    return () => stopSync();
    },[userId, reviewRepository])


    //🍎현재 review를 담는 useEffect ->코드가 이상..?
    useEffect(()=> {
        let reviewArray = Object.entries(reviews)
        reviewArray.map(item => {
            if(item[0]===reviewId) {
                setCurrentReview(item)
            }
            return console.log('')
        })
    },[reviews,reviewId])

    
    
    //🍎현재 comment담는 useEffect
    useEffect(()=>{
        if(currentReview !== undefined) {
            if(currentReview[1].comment !== undefined) {
                let commentArray = Object.values(currentReview[1].comment)
            setComments(commentArray)
            }
        }
    },[reviews,currentReview,reviewRepository])
    
    //🍎Reivew수정하기
    const goRevise = (review) =>{
        navigation(`/review/revise/${review.id}`, {state : {review}})
    }

    //🍎코멘트 ADD
    const getComment = (newComment) => {
        let Id = currentReview[1].id;
        createAndUpdateComment(newComment,Id,userId)
    }

    //🍎Comment Delete
    const onDeleteComment = (id) => {
        let delComment = {};
        comments.map(comment => {
            if(comment.id === id) {
                return delComment = comment;
            }
        })
        console.log(deleteComment)
        deleteComment(delComment,reviewState.id, userId)
    }

    //🍎comment 수정누르면 코멘트 보내기
    const onReviseComment = (id) => {
        let updatedComment = {};
        comments.map(comment => {
            if(comment.id === id) {
                return updatedComment = comment;
            }
        })
        setCurrentComment(updatedComment)
        setFormState(true)
        setFormId(id)
    }

    const [formState, setFormState] = useState(false)
    const [formId, setFormId] = useState(null)


    //🍎코멘트 작성창 클릭하면 보여주는 함수
    const onShowCommentWriteForm = () => {
        setShowCommentForm(!showCommentForm)
    }




    return (
        <section >
            <Nav/>
            <SubMainBannerReviews/>
            <div className={styles.container}>
                    <div className={styles.header}> 
                    <div className={styles.userInfo}>
                        <img className={styles.userPhoto} src={reviewState.profileIMG} alt="profile" />
                        <div className={styles.userInfo_innerContainer}>
                            <h3 className={styles.useName}>{reviewState.nickname}</h3>
                            <p className={styles.userEmail}>({reviewState.email && reviewState.email})</p>
                        </div>
                    </div>
                    <div className={styles.container_inner}>
                        <WriteButton/>
                    </div>
                </div>
                <div className={styles.content}>
                    <img src={reviewState.reviewIMG} alt="review" />
                    <div className={styles.content_container}>
                        <div className={styles.title}>
                            <div className={styles.container_title}>
                                <span className={styles.reviewTitle}>{reviewState.reviewTitle}</span> 
                                <span className={styles.date}>{reviewState.reviewDate}</span>
                            </div>
                            <div className={styles.tags}>
                                {reviewState.reviewHashtags[0] && <span className={styles.hashtags}># {reviewState.reviewHashtags[0]}</span> }
                                {reviewState.reviewHashtags[1] && <span className={styles.hashtags}># {reviewState.reviewHashtags[1]}</span> }
                                {reviewState.reviewHashtags[2] && <span className={styles.hashtags}># {reviewState.reviewHashtags[2]}</span> }
                            </div>

                        </div>
                        <p className={styles.description}>{reviewState.reviewDescription}</p>
                    </div>
                </div>

                <div className={styles.icon_container}>
                    <div className={styles.icon_container_left}>
                    <Like reviewRepository={reviewRepository} review={reviewState} userId={user} clickLike={clickLike} removeLike={removeLike}/>
                        <button onClick={()=>onShowCommentWriteForm()} className={styles.comment_button}><i className="fa-solid fa-comment-dots"></i></button>
                    </div>
                    { userId === reviewState.userId && (<div className={styles.icon_container_right}>
                        <button className={styles.buttons} onClick={()=>goRevise(reviewState)}>글 수정</button>
                        <button className={styles.buttons} onClick={()=>deleteReview(reviewState)}>글 삭제</button>
                    </div>)}
                </div>
                <div className={styles.comments_container}>
                    <h2>댓글</h2>
                    <div ref={divRef} className={styles.comments_list}>
                        { comments && (
                            comments.map((item,index)=> (
                                <div key={item.id} className={styles.comments_item}>
                                    <div className={styles.comment_userInfo}>
                                    <img className={styles.comment_userPhoto} src={item.userPhoto} alt="user" />
                                        <div className={styles.comment_boxContainer}>
                                            <div className={styles.comment_userInfo_container}>
                                                <span className={styles.comments_name}>{item.userName}</span>
                                                <span className={styles.comments_email}>({item.userEmail})</span>
                                            </div>
                                        </div>
                                    </div>
                                    {userId === item.userId && (<Menu
                                        onDeleteComment={onDeleteComment}
                                        onReviseComment={onReviseComment}
                                        key={item.id}
                                        id={item.id}
                                        name={item.name}
                                        isToggle={item.isToggle}
                                        divRef={divRef}
                                    >
                                    </Menu>)}
                                    <p className={styles.comments_text}>{item.comment}</p>
                                    <span className={styles.comments_date}>{item.date}</span>

                                    <CommentReviseForm 
                                    reviewRepository={reviewRepository}
                                        review={reviewState} 
                                        getComment={getComment} 
                                        key={index}
                                        id={item.id}
                                        name={item.name}
                                        isForm={item.isForm}
                                        formState={formState}
                                        formId={formId}
                                        setFormState={setFormState}
                                        currentComment={currentComment}
                                    />

                                </div>
                                
                                )
                            ))
                        }
                        <CommentForm review={reviewState}  getComment={getComment}/>
                    </div>
                </div>                      
            </div>
        </section>
    );
};

export default ReviewDetail;

