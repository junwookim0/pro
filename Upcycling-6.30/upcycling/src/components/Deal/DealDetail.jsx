/* 🥑 거래글 자세히! */

import React, { useState, useContext } from "react";
import AuthContext from "../context/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
import { doc, deleteDoc, query, collection, where, onSnapshot } from "firebase/firestore";
import { ref, deleteObject } from "@firebase/storage";
import { firestore, storage } from "../../firebase";

import styles from './CSS/dealDetail.module.css'

import Nav from "../Nav/Nav";
import SubMainBnnerDeal from "../banner/SubMainBannerDeal";
import CommentWrite from "./CommentWrite";
import DealLike from "./DealLike";

const DealDetail = () => {
    /* 사용자 정보 */
    const { user } = useContext(AuthContext);

    const location = useLocation();
    const dealState = location.state.deal;
    const navigate = useNavigate();

    // 글 삭제
    const deserRef = ref(storage, dealState.attachmentUrl);

    const onDeleteClick = async() => {
        const ok = window.confirm("정말 이 게시글을 삭제하시겠습니까?");
            if (ok) {
                    await deleteDoc(doc(firestore, `/dbDeals/${dealState.id}`));
                    // 삭제 버튼 누르면 /거래(테이블게시판)로 넘어감
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

    // price 천 단위
    let dealPrice = Number(dealState.price).toLocaleString('ko-KR');

    return (
        <section>
            <Nav />
            <SubMainBnnerDeal />
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.userInfo}>
                        <img src={dealState.creatorPhoto}
                        className={styles.userPhoto} />
                        <div className={styles.userInfo_innerContainer}>
                            <h3 className={styles.userName}>{dealState.creatorName}</h3>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.content}>
            <img src={dealState.attachmentUrl} alt="마켓 카테고리 게시글의 사진입니다" />
                <div className={styles.content_container}>                    
                    {/* 정보 */}
                    <div className={styles.title}>
                        <div className={styles.container_title}>
                            <span className={styles.dealTitle}>{dealState.title}</span>
                            <span className={styles.date}>{dealState.date}</span>
                        </div>
                        <div className={styles.tags}>
                            {dealState.hashtagArray[0]&& <span className={styles.hashtags}># {dealState.hashtagArray[0]} </span>}
                            {dealState.hashtagArray[1]&& <span className={styles.hashtags}># {dealState.hashtagArray[1]} </span>}
                            {dealState.hashtagArray[2]&& <span className={styles.hashtags}># {dealState.hashtagArray[2]} </span>}
                        </div>
                        {
                            dealState.price == '' ? (
                                <span className={styles.price}>나눔💚</span>
                            ) : (
                                <span className={styles.price}>&#8361; {dealPrice}</span>
                            )
                        }
                    </div>
                    <p className={styles.description}>{dealState.content}</p>
                </div>
                
                <div className={styles.icon_container}>
                <div className={styles.icon_container_left}>
                    {/* 좋아요 */}
                    <DealLike 
                    isMyLike={dealState.likeUser.includes(user.uid)}
                    dealState={dealState} />
                </div>
                {
                    dealState.creatorId == user.uid ? (
                        <div className={styles.icon_container_right}>
                            <button onClick={() => onReviseClick(dealState)}>수정</button>
                            <button onClick={onDeleteClick}>삭제</button>
                        </div>    
                    ) : (
                        <>
                        </>
                    )
                }
            </div>
            </div>


            {/* 댓글 작성 */}
            <div className={styles.comments_container}>
                <CommentWrite />
            </div>
            
        </section>
    );

};

export default DealDetail;