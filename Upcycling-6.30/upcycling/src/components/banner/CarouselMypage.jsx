// 🥑 선주 import 
import MyDeal from '../MyPage/MyDeal';
import MyReview from '../MyPage/MyReview';

const Carousel_mypage = ({reviewRepository, deals}) => {

    return (
        <div>
            <MyReview reviewRepository={reviewRepository}/>
        </div>
    );
}

export default Carousel_mypage;
