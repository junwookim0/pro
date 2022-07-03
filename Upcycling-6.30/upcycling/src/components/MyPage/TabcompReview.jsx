//마이페이지 tab 메뉴에 리뷰 하위 내용
import React from 'react';
import MyReview from './myReview/MyReview'

const TabcompReview = ({reviewRepository}) => {
    return (
        <div>
            <MyReview reviewRepository={reviewRepository}/>
        </div>
    );
};

export default TabcompReview;