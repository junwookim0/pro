import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router'
// 초기화한 파이어베이스 불러옴
import "@/datasources/firebase"
//9버전을 사용한 방법
import { 
  getAuth, 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  deleteUser,
} from "firebase/auth";
//파이어베이스 인증을 위한 객체
const auth = getAuth();


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    oUser : null //사용자 정보를 담을 객체
  },
  getters: {
    // 사용자 객체를 반환
    fnGetUser(state) {
      return state.oUser
    },
    // 사용자 객체의 값의 유무로 로그인 여부 반환
    fnGetAuthStatus(state) {
      return (state.oUser != null)
    }
  },
  mutations: {
    // 사용자 객체를 저장
    fnSetUser(state, payload) {
      state.oUser = payload
    }
  },
  actions: {
    //파이어베이스의 인증을 이용하여 이메일 회원 생성및 저장
    fnRegisterUser({
      commit
    }, payload) {
      commit('fnSetLoading', true) // 스토어에 시간걸림으로 상태 변경
      // 파이어베이스에 이메일 회원 생성 및 저장
      createUserWithEmailAndPassword(auth, payload.pEmail,
          payload.pPassword)
        .then(pUserInfo => {
          // 신규 회원 이메일 정보를 스토어에 저장
          commit('fnSetUser', {
            email: pUserInfo.user.email  // <-- 파이어베이스 v9 마이그레이션 : user 추가
          })
          commit('fnSetLoading', false) // 스토어에 시간완료 상태 변경
          commit('fnSetErrorMessage', '') // 스토어 에러메시지 초기화
          router.push('/') // 로그인 후 첫 화면으로 이동
        })
        .catch(err => {
          commit('fnSetErrorMessage', err.message)
          commit('fnSetLoading', false)
        })
    },
    //파이어베이스의 인증을 이용하여 이메일 회원 로그인
    fnDoLogin({
      commit
    }, payload) {
      commit('fnSetLoading', true) // 스토어에 시간걸림으로 상태 변경
      // 파이어베이스에 이메일 회원 로그인 인증 처리 요청
      signInWithEmailAndPassword( auth, payload.pEmail,
          payload.pPassword)
        .then(pUserInfo => {
          // 로그인이 성공하면 스토어에 계정정보 저장
          commit('fnSetUser', {
            id: pUserInfo.user.uid,           // <-- 파이어베이스 v9 마이그레이션 : user 추가
            name: pUserInfo.user.displayName, // <-- 파이어베이스 v9 마이그레이션 : user 추가
            email: pUserInfo.user.email,      // <-- 파이어베이스 v9 마이그레이션 : user 추가
            photoURL: pUserInfo.user.photoURL // <-- 파이어베이스 v9 마이그레이션 : user 추가
          })
          commit('fnSetLoading', false) // 시간걸림 상태 해제
          commit('fnSetErrorMessage', '') // 에러메세지 초기화
          router.push('/main') // 로그인 후 화면으로 이동
        })
        .catch(err => {
          commit('fnSetErrorMessage', err.message)
          commit('fnSetLoading', false)
        })
    },
    //구글로그인창 팝업
    fnDoGoogleLogin_Popup({
      commit
    }) {
      commit('fnSetLoading', true) // 스토어에 시간걸림으로 상태 변경
      // 파이어베이스에 구글 회원 로그인 인증 처리 요청
      // 로그인제공자객체를 생성
      const oProvider = new GoogleAuthProvider();
      // 오픈 계정의 범위를 설정합니다. 
      // https://developers.google.com/identity/protocols/googlescopes
      oProvider.addScope('profile');
      oProvider.addScope('email');
      signInWithPopup(auth , oProvider)
        .then(pUserInfo => {
          // 로그인이 성공하면 스토어에 계정정보 저장
          commit('fnSetUser', {
            id: pUserInfo.user.uid,            // <-- 파이어베이스 v9 마이그레이션 : user 추가
            name: pUserInfo.user.displayName,  // <-- 파이어베이스 v9 마이그레이션 : user 추가
            email: pUserInfo.user.email,       // <-- 파이어베이스 v9 마이그레이션 : user 추가
            photoURL: pUserInfo.user.photoURL  // <-- 파이어베이스 v9 마이그레이션 : user 추가
          })
          commit('fnSetLoading', false) // 시간걸림 상태 해제
          commit('fnSetErrorMessage', '') // 에러메세지 초기화
          router.push('/main') // 로그인 후 화면으로 이동
        })
        .catch(err => {
          commit('fnSetErrorMessage', err.message)
          commit('fnSetLoading', false)
        })
    },


    // 자동 로그인 처리
    fnDoLoginAuto({
      commit
    }, pUserInfo) {
      // 자동 로그인 시 스토어에 계정정보 저장
      commit('fnSetUser', {
        id: pUserInfo.uid,
        name: pUserInfo.displayName,
        email: pUserInfo.email,
        photoURL: pUserInfo.photoURL
      })
      commit('fnSetLoading', false) // 시간걸림 상태 해제
      commit('fnSetErrorMessage', '') // 에러메세지 초기화  
    },
    // 로그아웃 처리
    fnDoLogout({
      commit
    }) {
      // 파이어베이스에 로그아웃 요청
      signOut(auth).then(()=>{
        commit('fnSetUser', null) // 스토어에 계정정보 초기화
        router.push('/') // 첫 화면으로 이동
      })
    },
    //회원탈퇴
    fnDoDelete({
      commit
    }){
      const user = auth.currentUser;
      deleteUser(user)
        .then(()=>{
          //스토어의 회원에 빈값을 넣음
          commit("fnSetUser", null);
          router.push("/");
      }).catch((err)=>{
        console.log(err)
      })
    },
  },

  
  modules: {
  }
})
