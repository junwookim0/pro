/* 🥑 댓글 작성 */
// 06-20 사용자 정보
import styles from './CSS/commentWrite.module.css'

import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../context/AuthContext";
import { useLocation } from "react-router-dom";
import { doc, setDoc, collection, onSnapshot } from "firebase/firestore";
import { firestore } from "../../firebase";
import { format } from "date-fns";
import CommentItem from './CommentItem';

const CommentWrite = () => {
    /* 사용자 정보 */
    const { user } = useContext(AuthContext);

    /* 유저 정보, 작성 날짜, 작성한 댓글 firestroe에 저장 */
    const [dComment, setDComment] = useState('');
    /* fitestore에 저장한 댓글 가져오기 */
    const [dComments, setDComments] = useState([]);

    const location = useLocation();
    const dealState = location.state.deal;

    useEffect(() => {

        const subColRef = collection(firestore, "dbDeals", `${dealState.id}`, "dComments");

        onSnapshot(subColRef, (querySnapshot) => {
            const commentArray = querySnapshot.docs.map(doc => ({
                id: doc.id, ...doc.data()
            }));
            setDComments(commentArray);
        });    
    }, []);
    let date = new Date();

    /* 사용 함수 */
    // 댓글 작성
    const onSubmit = async(e) => {
        e.preventDefault();

        //submit하면 추가할 데이터
        const commentObj = {
            dealTitle: dealState.title,
            content: dComment, // 댓글
            creatorId: user.uid,
            creatorName: user.displayName,
            creatorPhoto: user.photoURL,
            createdAt: Date.now(),
            date : format(date, "yyyy.MM.dd HH:mm"),
            dealAddress: dealState.createdAt,
            attachmentUrl: dealState.attachmentUrl
        };

        // Date.now()를 기준으로 댓글 문서 생성
        await setDoc(doc(collection(firestore, "dbDeals"), `/${dealState.id}`, `dComments/${Date.now()}`), commentObj)

        setDComment("");
    };

    const onChange = (e) => {
        setDComment(e.target.value);
    };

    return (
        <>
            <div className={styles.container}>
                <h3 className={styles.user}>{user.displayName}</h3>
                <form onSubmit={onSubmit}
                className={styles.comment_form}>
                    <textarea 
                    onChange={onChange}
                    value={dComment} 
                    placeholder='댓글을 남겨 주세요'
                    className={styles.textarea}></textarea>
                    <input 
                    type="submit" value="댓글 작성"
                    className={styles.button} />
                </form>
            </div>
            <div className={styles.comments_container}>
                <h2 style={{marginLeft: '0.8rem'}}>댓글</h2>
                { 
                    dComments.map((dComment) => (
                        <CommentItem 
                        key={dComment.createdAt}
                        commentObj={dComment} />
                    ))
                }
            </div>
        </>
    );

};

export default CommentWrite;