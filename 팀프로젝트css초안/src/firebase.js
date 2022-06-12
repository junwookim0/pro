import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyBoX4JqMqLdCoJM7g0EiZor0VcdiqTcDwo",
    authDomain: "fir-test-login-85c6c.firebaseapp.com",
    projectId: "fir-test-login-85c6c",
    storageBucket: "fir-test-login-85c6c.appspot.com",
    messagingSenderId: "366758576094",
    appId: "1:366758576094:web:ed6d85b8de98363efa674f"
};
// Initialize Firebase 

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app , auth , db , firestore , storage};