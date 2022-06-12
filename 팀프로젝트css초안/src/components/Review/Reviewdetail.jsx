import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './CSS/reviewDetail.module.css'


//🍎 reviewPage에서 item의 이미지를 클릭했을 때 이동하는 컴포넌트
//Reivew의 전체적인 내용을 출력

const ReviewDetail = ({deleteReview}) => {
    const location = useLocation();
    const navigation = useNavigate();
    const reviewState = location.state.review;

    const goRevise = (review) =>{
        navigation(`/review/revise/${review.id}`, {state : {review}})
    }
    
    return (
        <section>
            <div className={styles.header}> 
                <div className={styles.userInfo}>
                    <img src={reviewState.profileIMG} alt="profile" />
                    <h3>{reviewState.nickname}</h3>
                </div>
                <div className={styles.searchInput}>
                    <input type="text" />
                    <button>Search</button>
                </div>
            </div>
            
            <div className={styles.content}>
                <img src={reviewState.reviewIMG} alt="review" />
                <div className={styles.container}>
                    <select name="" id="">
                        <option value="">숨기기</option>
                        <option value="">신고하기</option>
                        <option value="">삭제</option>
                        <option value="">수정</option>
                    </select>
                    <div className={styles.title}>
                        <h3>{reviewState.reviewTitle}</h3>
                        <p>{reviewState.reviewHashtags}</p>
                    </div>
                    <p className={styles.description}>{reviewState.reviewDescription}</p>
                </div>
                
            </div>

            <hr />
            <div className={styles.icon_container}>
                <div className={styles.icon_container_left}>
                    <p className={styles.heart}>👍</p>
                    <p className={styles.comment}>💌</p>
                </div>
                <div className={styles.icon_container_right}>
                    <button onClick={()=>goRevise(reviewState)}>수정</button>
                    <button onClick={()=>deleteReview(reviewState)}>삭제</button>
                </div>
            </div>

            <textarea className={styles.comment_write} name="comment" id="" cols="30" rows="10"></textarea>
        </section>
    );
};

export default ReviewDetail;