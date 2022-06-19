/* 🥑 거래글 자세히! */
// 게시글(댓글(해야 됨), 파일(했음)) 삭제, 수정(revise 페이지로 이동)
// commentWrite 연결
// dealLike 연결
// 댓글 개수 세기 해야 됨

import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { doc, deleteDoc } from "firebase/firestore";
import { ref, deleteObject } from "@firebase/storage";
import { firestore, storage } from "../../firebase";

import styles from './CSS/dealDetail.module.css'

import CommentWrite from "./CommentWrite";
import DealLike from "./DealLike";

const DealDetail = () => {
    /* 유저 정보, 작성 날짜, 작성한 댓글 firestroe에 저장 */
    const [dComments, setdComments] = useState('');

    const location = useLocation();
    const navigate = useNavigate();
    const dealState = location.state.deal;

    /* 사용 함수 */
    // 글 삭제
    const deserRef = ref(storage, dealState.attachmentUrl);

    const onDeleteClick = async () => {
        const ok = window.confirm("정말 이 게시글을 삭제하시겠습니까?");
            if (ok) {
                    //해당하는 게시글 파이어스토어에서 삭제
                    await deleteDoc(doc(firestore, `/dbDeals/${dealState.id}`));
                    // 삭제 버튼 누르면 /거래(테이블게시판)로 넘어감
                    // 06-16 글 삭제할 때 하위 컬렉션(댓글), 참조파일 삭제해야 함
                    deleteObject(deserRef).then(() => {
                        console.log('파일 삭제 완');
                    }).catch((err) => {
                        console.log('파일 삭제 안 됨')
                    })
                    navigate('/deals');
                }
            };
    
    // 글 수정
    const onReviseClick = (deal) => {
        navigate(`/deals/revise/${deal.createdAt}`, {state: {deal}})
    }

    return (
        <section>
            <div className={styles.header}>
                <div className={styles.userInfo}>
                    <p>프로필 이미지</p>
                    <h3>닉네임</h3>
                </div>

                <div className={styles.searchInput}>
                    <input type="text" />
                    <button>Search</button>
                </div>
            </div>

            <div className={styles.content}>
                <p>이미지</p>
                <div className={styles.container}>
                    <select className="" id="">
                        <option value="">숨기기</option>
                        <option value="">신고하기</option>
                        <option value="">삭제</option>
                        <option value="">수정</option>
                    </select>
                    <div className={styles.title}>
                        <h3>{dealState.title}</h3>
                        <p>{dealState.hashtag}</p>
                    </div>
                    <img src={dealState.attachmentUrl} width="100px" height="100px" />
                    <p className={styles.description}>{dealState.content}</p>
                </div>
            </div>

            <hr />
            <div className={styles.icon_container}>
                <div className={styles.icon_container_left}>
                    {/* 좋아요 */}
                    <DealLike />
                    <p className={styles.comment}>💌댓글개수</p>
                </div>
                <div className={styles.icon_container_right}>
                    <button onClick={() => onReviseClick(dealState)}>수정</button>
                    <button onClick={onDeleteClick}>삭제</button>
                </div>
            </div>
            {/* 댓글 작성 */}
            <div>
                <CommentWrite />
            </div>
            
        </section>
    );

};

export default DealDetail;