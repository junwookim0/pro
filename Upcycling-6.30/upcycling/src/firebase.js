import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getFirestore , collection, addDoc} from "firebase/firestore"
import { GoogleAuthProvider, signInWithPopup,
    FacebookAuthProvider,createUserWithEmailAndPassword,
    signInWithEmailAndPassword,signOut,getAuth,GithubAuthProvider,updateProfile
} from 'firebase/auth';
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyBg-siU5D0pRcjFzkFvco6QkhN1L_sdYMc",
    authDomain: "upcycling-cfaac.firebaseapp.com",
    databaseURL: "https://upcycling-cfaac-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "upcycling-cfaac",
    storageBucket: "upcycling-cfaac.appspot.com",
    messagingSenderId: "315903748780",
    appId: "1:315903748780:web:860f4e1d3059a71db78d09",
    measurementId: "G-BNTPVWJ575"
};

// Initialize Firebase 
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);
const firestore = getFirestore(app);

//회원가입 
const signUp = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(
            auth,email,password);
        const user = userCredential.user;
        await addDoc(collection(firestore, "users"), {
            uid: user.uid,
            email: user.email,
        });
        return true
    } catch(error) {
        return {error: error.code}
    }
};
//로그인
const signIn = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password
        );
        const user = userCredential.user;
        return true
    } catch (error) {
        return {error: error.message}
    }
};
//프로필설정

const ProfileUpdate = async ( displayName, photoURL ) => {
    await updateProfile(auth.currentUser, {
        displayName , photoURL
    }).then(() => {
        console.log("프로필 업데이트");
    }).catch((error) => {
        console.log(error);
    });
}
//구글로그인
const gprovider = new GoogleAuthProvider();
    gprovider.setCustomParameters({'display': 'popup'});
    const signInWithGoogle = () => signInWithPopup(auth, gprovider);
    

//페이스북 로그인
const fprovider = new FacebookAuthProvider();
    fprovider.setCustomParameters({'display': 'popup'});
    const signInWithFacebook = () => signInWithPopup(auth, fprovider);

//github 로그인
const gitprovider = new GithubAuthProvider();
    gitprovider.setCustomParameters({'display': 'popup'});
    const signInWithGithub = () => signInWithPopup(auth, gitprovider);

const SignOut = async() => {
    try {
        await signOut(auth)
        return true
    } catch (error) {
        return false
    }
};

const storage = getStorage(app);

export { app , auth , db , 
    firestore ,storage, signIn , signUp, SignOut,
    signInWithGoogle, signInWithFacebook ,signInWithGithub, ProfileUpdate};
