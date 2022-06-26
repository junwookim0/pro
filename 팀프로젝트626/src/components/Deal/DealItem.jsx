/* 🥑 deal 목록의 개체 */
// 06-20 사용자 정보

import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const DealItem = ({deal}) => {
    /* 사용자 정보 */
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    // dealDetail로 이동
    const onClick = () => {
        navigate(`/deals/${deal.createdAt}`, {state: {deal}})
    };

    return (
        <div>
            <img
            width="150px"
            src={deal.attachmentUrl}
            onClick={onClick} />
            <h3>{deal.title}</h3>
            {/* 작성자가 가격 입력했으면 작성된 가격 뜸
                작성자가 가격 입력 안 했으면 나눔🧡 뜸 */}
            {
                deal.price == '' ? (
                    <p>나눔🧡</p>
                ) : (
                    <p>{deal.price}원</p>
                )
            }
            <p>{user.displayName}</p>
        </div>
    );
};

export default DealItem;