/* 🥑 deal 목록의 개체 */
// 06-20 사용자 정보
// css 완

import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import styles from './CSS/dealItem.module.css';

const DealItem = ({deal}) => {
    /* 사용자 정보 */
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    // price 천 단위로 표현
    let dealPrice = Number(deal.price).toLocaleString('ko-KR');
    
    /* 사용 함수 */
    // dealDetail로 이동
    const onClick = () => {
        navigate(`/deals/${deal.createdAt}`, {state: {deal}})
    };
    return (
        <section className={styles.container}>
            <img
            src={deal.attachmentUrl}
            onClick={onClick}
            className={styles.dealImg} />
            <h3>{deal.title}</h3>
            {/* 작성자가 가격 입력했으면 작성된 가격 뜸
                작성자가 가격 입력 안 했으면 나눔💚 뜸 */}
            {
                deal.price == '' ? (
                    <h3>나눔 💚</h3>
                ) : (
                    <h3>&#8361; {dealPrice}</h3>
                )
            }
            <p className={styles.name}>{deal.creatorName}</p>
            <div className={styles.likeBox}>
                <div className={styles.icon}>
                    <i className="fa-solid fa-heart"></i>
                </div>
                <p className={styles.amount}>{deal.likeCount}</p>
            </div>
        </section>
    );
};

export default DealItem;