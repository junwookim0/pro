import './App.css';
import { auth } from './firebase';
import { GoogleAuthProvider, signInWithPopup,
          FacebookAuthProvider,getAuth, signOut
} from 'firebase/auth';
import { useState } from 'react';

import { firestore } from './firebase'
import { useEffect } from 'react'

import { collection, getDocs } from "firebase/firestore";

function App() {
  useEffect(() => {
    console.log(firestore);

    const querySnapshot = getDocs(collection(db,"post"));
    querySnapshot.forEach((doc) => {
      // document의 데이터를 가져옴
      console.log(`${doc.id} => ${doc.data()}`);
    });
  });


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
  function DoLogout(){
    const auth = getAuth();
    signOut(auth).then(()=>{
      setUserData(null); 
    }).catch((err)=>{
      console.log(err);
    })
    
  }

  return (
    <div className="App">
      <header className="App-header">
        {/* <button onClick={col}> call버튼</button>*/}
      <button onClick={handleGoogleLogin}>구글 Login</button>
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
      <button onClick={DoLogout}>로그아웃</button>
      
      </header>
    </div>
  );
}

export default App;
