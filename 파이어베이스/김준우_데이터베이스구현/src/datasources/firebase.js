// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoX4JqMqLdCoJM7g0EiZor0VcdiqTcDwo",
  authDomain: "fir-test-login-85c6c.firebaseapp.com",
  databaseURL: "gs://login-8cffa.appspot.com",
  storageBucket: "login-8cffa.appspot.com",
};

// Initialize Firebase
// 파이어베이스를 다른 자바스크립트파일에 작성했기에 모듈로 쓰기위함
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
