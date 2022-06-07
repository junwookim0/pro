import { useParams } from "react-router-dom";

const data = {
  MyLike: {
    name: "내 좋아요 페이지",
    src : "../images/main001.jpg"
  },
  MyReview: {
    name: "내 리뷰 페이지",
    src : "../images/main002.jpg"
  },
  MySale: {
    name: "내 거래글 페이지",
    src : "../images/main003.jpg"
  },
};


const MainBanner = () => {
  const params = useParams();
  const profile = data[params.username];
    return (
    <div className="MainBanner">
        {/* 메인배너(슬라이드 O) 
        화살표 추가*/}
          <ul>
            <li>
                <img src={profile.src}/>
            </li>
          </ul>
          </div>
    )
};

export default MainBanner;