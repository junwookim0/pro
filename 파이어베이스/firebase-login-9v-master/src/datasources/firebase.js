// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: /* 본인의 파이어 베이스 키값 */,
  authDomain:/* 본인의 파이어 베이스 도메인값 */,
};

// Initialize Firebase
// 파이어베이스를 다른 자바스크립트파일에 작성했기에 모듈로 쓰기위함
export const app = initializeApp(firebaseConfig);
