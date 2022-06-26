/* 🥑 댓글 작성 */
// 06-20 사용자 정보

import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../context/AuthContext";
import { useLocation } from "react-router-dom";
import { doc, setDoc, collection, onSnapshot } from "firebase/firestore";

import { firestore } from "../../firebase";

import styles from './CSS/dealDetail.module.css'

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

    /* 사용 함수 */
    // 댓글 작성
    const onSubmit = async(e) => {
        e.preventDefault();

        //submit하면 추가할 데이터
        const commentObj = {
            content: dComment, // 댓글
            creatorId: user.uid,
            creatorName: user.displayName, // 생성한 사람 닉 표시
            createdAt: Date.now(),
        };

        // Date.now()를 기준으로 댓글 문서 생성
        await setDoc(doc(collection(firestore, "dbDeals"), `/${dealState.id}`, `dComments/${Date.now()}`), commentObj)

        setDComment("");
    };

    const onChange = (e) => {
        setDComment(e.target.value);
    };

    return (
        <section>
            <div className="styles.comments_container">
                <form onSubmit={onSubmit}>
                    <textarea 
                    onChange={onChange}
                    value={dComment} cols="80" rows="5"></textarea>
                    <input type="submit" value="댓글 작성"/>
                </form>
            </div>
            <div>
                { 
                    dComments.map((dComment) => (
                        <CommentItem 
                        key={dComment.createdAt}
                        commentObj={dComment} />
                    ))
                }
            </div>
        </section>
    );

};

export default CommentWrite;