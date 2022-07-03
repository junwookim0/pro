import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './CommentList.module.css'


const CommentList = ({onReviews, onMyComments}) => {
    const navigate = useNavigate();


    const goDetail = (reviewId) => {
        console.log(reviewId)
        onReviews.map(review => {
            if(review.id === reviewId) {
                navigate(`/reviews/${review.id}`, {state : {review}})
            }
        })
    }
    return (
        <>
        <div className={styles.titleBox}>   
            <h2 className={styles.title}>내가 작성한 댓글</h2>
        </div>
        {onMyComments.length !== 0? (
                    onMyComments.map(comment => (
                        onReviews.map(review => {
                            if(review.id === comment.reviewId) {
                                return (
                                <section key={comment.id} onClick={()=>goDetail(comment.reviewId)} className={styles.commentList}>
                                    <img className={styles.img} src={comment.reviewIMG} alt="" />
                                    <div className={styles.comment_container}>
                                        <p className={styles.comment}>{comment.comment}</p>
                                        <div className={styles.commten_info}>
                                            <p className={styles.date}>{comment.date}</p>
                                            <p className={styles.reviewTitle}> 게시물 제목 : {comment.reviewTitle}</p>
                                        </div>
                                    </div>
                                </section>
                                )
                            } 
                        })
                    ))
                    
                    ):(
            <div className="contents_empty">
            <h3>게시글에 댓글을 쓰고 함께 소통해보세요!</h3>
        </div>)}
        </>

    );
};

export default CommentList;