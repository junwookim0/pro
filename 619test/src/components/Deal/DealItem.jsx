/* 🥑 deal 목록의 개체 */

import React, { useState, useEffect } from "react";
import { async } from "@firebase/util";
import { useNavigate } from "react-router-dom";

const DealItem = ({deal}) => {
    // title 누르면 게시글 내용 볼 수 있도록
    const navigate = useNavigate();

    // dealDetail로 이동
    const onClick = () => {
        navigate(`/deals/${deal.createdAt}`, {state: {deal}})
    };

    return (
        <div>
            <img
            src={deal.attachmentUrl}
            onClick={onClick} />
            <h3>{deal.title}</h3>
            <p>{deal.price}</p>
            <p>작성자</p>
        </div>
    );
};

export default DealItem;