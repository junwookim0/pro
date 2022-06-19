import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getFirestore , collection, addDoc} from "firebase/firestore"
import { GoogleAuthProvider, signInWithPopup,
    FacebookAuthProvider,createUserWithEmailAndPassword,
    signInWithEmailAndPassword,signOut,getAuth
} from 'firebase/auth';
import { getStorage } from "firebase/storage";

const firebaseConfig = {

    //파이어베이스 인증키랑 지울게요! -지은-
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
/*
const handleGoogleLogin =()=>{
    const gprovider = new GoogleAuthProvider(); // provider를 구글로 설정
    signInWithPopup(auth, gprovider) // popup을 이용한 signup
    .then((data) => {
        setUser(data.user); // user data 설정

        navigate("/home");
        console.log(data.user.displayName);
        console.log(data.user.email);

    })
    .catch((err) => {
        console.log(err);
    });
}
function handleFacebookLogin(){
    const fprovider =new FacebookAuthProvider();
    signInWithPopup(auth, fprovider) // popup을 이용한 signup
    .then((data) => {
        setUser(data.user); // user data 설정
        navigate("/Home");
        console.log(data) // console로 들어온 데이터 표시
    })
    .catch((err) => {
        console.log(err);
    });
}
*/
//회원가입
const signUp = async (email, password, Nickname) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth,email,password);
        const user = userCredential.user;
        await addDoc(collection(firestore, "users"), {
            uid: user.uid,
            email: user.email,
        });
        return true
    } catch (error) {
        return {error: error.message}
    }
};
//로그인
const signIn = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth,email,password);
        const user = userCredential.user;
        return true
    } catch (error) {
        return {error: error.message}
    }
};
//구글로그인
const gprovider = new GoogleAuthProvider();
    gprovider.setCustomParameters({'display': 'popup'});
const signInWithGoogle = () => signInWithPopup(auth, gprovider);

//페이스북 로그인
const fprovider = new FacebookAuthProvider();
    fprovider.setCustomParameters({'display': 'popup'});
    const signInWithFacebook = () => signInWithPopup(auth, fprovider);

const SignOut = async() => {
    try {
        await signOut(auth).then(()=>{
            return true
        })
    } catch (error) {
        return false
    }
};

const storage = getStorage(app);

export { app , auth , db , 
    firestore, storage, signIn, signUp, SignOut, 
    signInWithGoogle, signInWithFacebook};