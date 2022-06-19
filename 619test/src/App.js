import './App.css';
import { Route, Routes, useNavigate } from "react-router-dom";
import IntroList from './components/Intro/IntroList';
import Home from './page/HomePage';
import FirstMain from './page/FirstMain/FirstMain';
import EventIntro from './components/Intro/EventIntro';
import SignIn from './components/login/SignIn';
import SignUp from './components/login/SignUp';
import Profile from './components/login/Profile';
/*🍎 지은 import*/
import ReviewWrite from './components/Review/reviewWrite';
import ReviewPage from './components/Review/reviewPage';
import ReviewDetail from './components/Review/reviewDetail';
import ReviewRevise from './components/Review/reviewRevise';
/* 🥑 박선주 import 시작 */
import DealWrite from './components/Deal/DealWrite';
import DealPage from './components/Deal/DealPage';
import DealDetail from './components/Deal/DealDetail';
import DealRevise from './components/Deal/DealRevise';
/* 🥑 박선주 import 끝 */
import NotFound from './page/NotFound';
import {useState, useEffect} from 'react';
// 🥑 06-15 현재 로그인한 사용자 가져오기
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import { firestore } from './firebase';
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";

function App({reviewRepository, commentRepository, imageUploader, likeRepository}) {
  
  //🍎 /home으로부터 받아온 user의 uid값
  const [userId, setUserId] = useState(null)
  const [reviews, setReviews] = useState([])
  const navigator = useNavigate();

  // 🥑 06-15 현재 로그인한 사용자 가져오기 시작 
  const [userObj, setUserObj] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid)
      }
    });
  }, [userId])
  // 🥑 06-15 현재 로그인한 사용자 가져오기 끝



//🍎firebase에 저장된 review받아오기
useEffect(()=> {
  const stopSync =  reviewRepository.syncReviews(reviews => {
    setReviews(reviews);
  })
  return () => stopSync();
},[userId, reviewRepository])



//🍎지은 : create & update review 
const createAndUpdateReview = (review,userId) => {
  // setReviews([...reviews, review]);
  reviewRepository.saveReview(userId, review);
}

//🍎지은 : delete review 
const deleteReview = (deletedItem) => {

  if(window.confirm("게시글을 정말 삭제 하시겠습니까?")){
    reviewRepository.removeReview(userId,deletedItem)
    imageUploader.delete(deletedItem.reviewIMG)
    alert('게시글을 삭제했습니다.');
    navigator('/reviews')
  }
  console.log(deletedItem.reviewIMG)
}



//🍎지은 : delete Comment 
const deleteComment = (comment,reviewId,userId) => {

  if(window.confirm("확인을 누르시면 댓글이 삭제됩니다. ")){
    commentRepository.removeComment(userId,reviewId, comment)
    alert('댓글을 삭제했습니다.');
  }
}


//🍎지은 : create Comment 
const createAndUpdateComment = (comment,reviewId,userId) => {
  // setReviews([...reviews, review]);
  commentRepository.saveComment(userId,reviewId, comment);
}

//🍎지은 : likes누르는 기능()
const clickLike = (userId, review) => {
  likeRepository.saveLike(userId, review)
  console.log('like앱으로 넘김')
}

  const [deals, setDeals] = useState([]);
  // 🥑 렌더링 시 콜백 함수 실행
  useEffect(() => {
    // dbDeals 콜렉션 레퍼런스 가져옴
    // 생성 일자 내림차순(최근 순서)으로 정렬
    const dq = query(
      collection(firestore, "dbDeals"),
      orderBy("createdAt", "desc")
    );
    // 수정, 삭제 실시간 반영
    // snapshot -> 각각의 docs에 접근하기 위해서 사용
    onSnapshot(dq, (snapshot) => {
      const dealArray = snapshot.docs.map(doc => ({
      // 각각의 객체에 고유 id를 만들어 할당
        id: doc.id, ...doc.data()
      }));
      // 거래글 객체 리스트를 setDeals에 할당
        setDeals(dealArray);
      })
  }, []);

  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<FirstMain/>}></Route>
          <Route path="/Home" element={<Home/>}></Route>
          <Route path="/intro" element={<IntroList />}></Route>
          <Route path="/event" element={<EventIntro />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          
          {/* 🍎윤지은 router */}
          <Route path='/reviews'  element={<ReviewPage reviews={reviews} />}/>
          <Route path='/reviews/:id' element={<ReviewDetail clickLike={clickLike} userId={userId} reviews={reviews}  createAndUpdateComment={createAndUpdateComment} deleteReview={deleteReview} deleteComment={deleteComment}/>}/>
          <Route path='/reviews/write' element={<ReviewWrite imageUploader={imageUploader} userId={userId} createAndUpdateReview={createAndUpdateReview}/>}/>
          <Route path='/review/revise/:id' element={<ReviewRevise userId={userId}  imageUploader={imageUploader} createAndUpdateReview={createAndUpdateReview} />}/>

          {/* 🥑 박선주 route 시작 */}
          <Route path='/deals' element={<DealPage deals={deals}/>} />
          <Route path='/deals/:createdAt' element={<DealDetail />} />
          <Route path='/deals/write' element={<DealWrite />} />
          <Route path='/deals/revise/:id' element={<DealRevise />} />
          {/* 🥑 박선주 route 끝 */}
          <Route path="/not-found" element={<NotFound />}></Route>
        </Routes>
        <footer>푸터</footer>
    </div>
  );
}

export default App;
