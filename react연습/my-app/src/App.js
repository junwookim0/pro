import './App.css';
import { auth } from './firebase';
import { GoogleAuthProvider, signInWithPopup,
          FacebookAuthProvider
} from 'firebase/auth';
import { useState } from 'react';
import {firestore} from './firebase';

function App() {

  const [userData, setUserData] = useState(null);

  function handleGoogleLogin() {
    const gprovider = new GoogleAuthProvider(); // provider를 구글로 설정
    signInWithPopup(auth, gprovider) // popup을 이용한 signup
      .then((data) => {
        setUserData(data.user); // user data 설정
        console.log(data) // console로 들어온 데이터 표시
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function handleFacebookLogin(){
    const fprovider =new FacebookAuthProvider();
    signInWithPopup(auth, fprovider) // popup을 이용한 signup
      .then((data) => {
        setUserData(data.user); // user data 설정
        console.log(data) // console로 들어온 데이터 표시
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function col(){
    post.get()
      .then((docs) => {
        let bucket_data = [];
        docs.forEach((doc) => {
          // 도큐먼트 객체를 확인해보자!
          console.log(doc);
          // 도큐먼트 데이터 가져오기
          console.log(doc.data());
          // 도큐먼트 id 가져오기
          console.log(doc.id);

          if (doc.exists) {
            bucket_data = [...bucket_data, { id: doc.id, ...doc.data() }];
          }
        });
        console.log(bucket_data);
  });
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={col}> call버튼</button>
      <button onClick={handleGoogleLogin}>구글 Login</button>
      <p>
      {userData ? userData.displayName : null}
      </p>
      <p>
      {userData ? userData.email : null}
      </p>
      <p>
          {userData ? <img src={userData.photoURL}/>  : null}
      </p>

      
      <button onClick={handleFacebookLogin}>facebook Login</button>
      <p>
      {userData ? userData.displayName : null}
      </p>
      <p>
      {userData ? userData.email : null}
      </p>
      <p>
          {userData ? <img src={userData.photoURL}/>  : null}
      </p>
      
      </header>
    </div>
  );
}}

export default App;
