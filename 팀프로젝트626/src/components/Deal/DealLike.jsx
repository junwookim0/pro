/* 🥑 06-17 좋아요 */
// 06-21 dbDeals에 좋아요 수/ 좋아요 누른 유저 값 업데이트

import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../context/AuthContext";
import { firestore } from "../../firebase";
import { doc, updateDoc, increment, arrayUnion, arrayRemove } from "firebase/firestore";

const DealLike = ({dealState}) => {

    /* 사용자 정보 */
    const { user } = useContext(AuthContext);
    
    const isMyLike = dealState.likeUser.includes(`${user.uid}`);

    // like 버튼이 눌렸는지 안 눌렸는지
    const [likeAction, setLikeAction] = useState(isMyLike); // 기본적으로 안 눌려져 있는 상태

    /* 사용 함수 */
    const toggleLike = async () => {
        const dLikeRef = doc(firestore, "dbDeals", dealState.id);

        if(likeAction === false) {
            await updateDoc(dLikeRef, {
                likeCount: increment(1),
                likeUser: arrayUnion(`${user.uid}`)
            });
            setLikeAction(true);
        } else {
            await updateDoc(dLikeRef, {
                likeCount: increment(-1),
                likeUser: arrayRemove(`${user.uid}`)
            });
            setLikeAction(false);
        };
        
    };

    
    return(
            likeAction ? (
                <div>
                    <button 
                    onClick={toggleLike}
                    className="material-icons">
                        favorite
                    </button>
                    <span>
                        {dealState.likeCount}
                    </span>
                </div>
            ) : (
                <div>
                    <button 
                    onClick={toggleLike}
                    className="material-icons">
                        favorite_border
                    </button>
                    <span>
                        {dealState.likeCount}
                    </span>
                </div>
            ) 
    );
};

export default DealLike;