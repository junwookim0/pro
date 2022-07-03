/* 🥑 좋아요 */

import React, { useState, useContext } from "react";
import AuthContext from "../context/AuthContext";
import { firestore } from "../../firebase";
import { doc, updateDoc, increment, arrayUnion, arrayRemove } from "firebase/firestore";
import styles from './CSS/dealLike.module.css'

const DealLike = ({dealState, isMyLike}) => {

    /* 사용자 정보 */
    const { user } = useContext(AuthContext);

    // like 버튼이 눌렸는지 안 눌렸는지
    const [likeAction, setLikeAction] = useState(isMyLike);
    console.log(isMyLike)

    /* 사용 함수 */
    async function toggleLike(e) {
        e.preventDefault();
        const dLikeRef = doc(firestore, "dbDeals", dealState.id);

        if (likeAction === false) {
            await updateDoc(dLikeRef, {
                likeCount: increment(1),
                likeUser: arrayUnion(user.uid)
            });
            setLikeAction(true);
        } else {
            await updateDoc(dLikeRef, {
                likeCount: increment(-1),
                likeUser: arrayRemove(user.uid)
            });
            setLikeAction(false);
        };
    }

    return(
        user.uid != dealState.creatorId ? (
            <>
                <p onClick={toggleLike}
                className={styles.like}>
                    {likeAction ? '❤️' : '🤍'}
                </p>
            </>
        ) : (
            <>
                <p disabled
                className={styles.like}>🤍</p>
            </>
        )
    );
};

export default DealLike;