/* 06-17 좋아요 */
// 좋아요 누른 유저 정보를 컬렉션에 담아야 하나 ?? 

import { useState } from "react";

const DealLike = () => {
    // like 버튼이 눌렸는지 안 눌렸는지
    const [likeAction, setLikeAction] = useState(false);

    /* 사용 함수 */
    const toggleLike = () => setLikeAction((prev) => !prev);

    return(
            likeAction ? (
                <div>
                    <span 
                    onClick={toggleLike}
                    class="material-icons">
                        favorite
                    </span>
                </div>
            ) : (
                <div>
                    <span 
                    onClick={toggleLike}
                    class="material-icons">
                        favorite_border
                    </span>
                </div>
            ) 
    );
};

export default DealLike;