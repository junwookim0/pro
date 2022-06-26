import { useEffect } from 'react';
import { useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './CSS/reviewDetail.module.css'
import Like from './like';

import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import Nav from '../Nav/Nav';
import SubMainBannerReviews from '../banner/SubMainBannerReviews';
import Search from './Search';


//🍎 reviewPage에서 item의 이미지를 클릭했을 때 이동하는 컴포넌트
//Reivew의 전체적인 내용을 출력

const ReviewDetail = ({ deleteReview, reviewRepository, createAndUpdateComment, deleteComment, clickLike, removeLike}) => {
    const location = useLocation();
    const navigation = useNavigate();
    const { user } = useContext(AuthContext);
    //🍎user정보
    const userId = user.uid;
    const userName = user.displayName;
    const userEmail = user.email;
    const userPhoto = user.photoURL


    //코멘트 관련 useState
    const [text, setText] = useState('')    

    //현재 review관련 useState
    const [reviewId] = useState(location.state.review.id)
    const [reviewState] = useState(location.state.review)
    const [reviews, setReviews] = useState([])



    //🍎firebase에 저장된 review받아오기
    useEffect(()=> {
    const stopSync =  reviewRepository.syncReviews(reviews => {
        setReviews(reviews);
    })
    return () => stopSync();
    },[userId, reviewRepository])


    //🍎firebase에 저장된 코멘트 받아오기
    const [currentReview, setCurrentReview] = useState()
    const [comments,setComments] = useState([])


    //🍎현재 review를 담는 useEffect ->코드가 이상..?
    useEffect(()=> {
        let reviewArray = Object.entries(reviews)
        reviewArray.map(item => {
            if(item[0]===reviewId) {
                setCurrentReview(item)
            }
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
    },[reviews,currentReview])
    
//🍎Reivew수정하기
    const goRevise = (review) =>{
        navigation(`/review/revise/${review.id}`, {state : {review}})
        
    }

    const textareaRef = useRef()

    const onChange = (event) => {
        if(event.currentTarget == null) {
            return;
        }
        event.preventDefault();
        setText(event.target.value)

    }

    const now = new Date();

    const newComment = {
        id : 'C' + Date.now(),
        userName : userName,
        userEmail: userEmail,
        userPhoto : userPhoto,
        comment : text || '',
        date : Date.now()
    }


    //🍎코멘트 ADD
    //console.log(newComment)
    const onSubmit = (event) => {
        event.preventDefault();

        const review = {...reviewState}
        createAndUpdateComment(newComment,review.id,userId)
        textareaRef.current.reset()
    }

    //🍎Comment Delete
    const onDeleteComment = (comment) => {
        deleteComment(comment,reviewState.id, userId)
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
                    <Search/>
                </div>
                
                <div className={styles.content}>
                    <img src={reviewState.reviewIMG} alt="review" />
                    <div className={styles.content_container}>
                        {/* <select name="" id="">
                            <option value="">숨기기</option>
                            <option value="">신고하기</option>
                            <option value="">삭제</option>
                            <option value="">수정</option>
                        </select> */}
                        <div className={styles.title}>
                            <h1>{reviewState.reviewTitle}</h1> <br/>
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
                        <button className={styles.comment_button}><i class="fa-solid fa-comment-dots"></i></button>
                    </div>
                    <div className={styles.icon_container_right}>
                        <button onClick={()=>goRevise(reviewState)}>글 수정</button>
                        <button onClick={()=>deleteReview(reviewState)}>글 삭제</button>
                    </div>
                </div>
                <div className={styles.comments_container}>
                    <h2>댓글</h2>
                    <div className={styles.comments_list}>
                        { comments && (
                                comments.map((item)=> (
                                    <div key={item.id} className={styles.comments_item}>
                                        <img src={item.userPhoto} alt="user" />
                                            <span className={styles.comments_user}>{item.userName}</span>
                                            <span>{item.userEmail}</span>
                                            <span className={styles.comments_date}>{item.date}</span>
                                            <p className={styles.comments_text}>{item.comment}</p>
                                        <button onClick={()=>onDeleteComment(item)}>삭제</button>
                                    </div>)
                            ))
                        }
                    </div>

                </div>
                <form className={styles.comment_form} ref={textareaRef}>
                    <textarea  onChange={onChange} className={styles.comment_write} name="comment" id="" cols="30" rows="10"></textarea>
                    <button onClick={onSubmit}>Comment Add</button>
                </form>
                    </div>
        </section>
    );
};

export default ReviewDetail;