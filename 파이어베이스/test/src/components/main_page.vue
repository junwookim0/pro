<template>
    <div>
        <h1>메인 페이지 입니다</h1>
        <img v-if="fnGetUser.photoURL" :src="fnGetUser.photoURL" class="avatar_style" alt="">
        <h3>{{ fnGetUser.name }}</h3>
        <p>{{fnGetUser.email}}</p>
        <button @click="fnSendPasswordReset">
            비밀번호 재설정
        </button>
    </div>
</template>

<script>
    // 파이어베이스에서 oFirebaseAuth 객체 변수 가져옴
    import "@/datasources/firebase"
    import { 
    getAuth, 
    sendPasswordResetEmail

} from "firebase/auth";

//파이어베이스 인증을 위한 객체
const auth = getAuth();
    export default {
        computed: {
        // 스토어에서 로그인된 계정 정보 반환
        fnGetUser() {
            let oUserInfo = this.$store.getters.fnGetUser
            return oUserInfo
        }
        },
        
        methods: {
            fnSendPasswordReset() {
                // 비밀번호 재설정 메일 발송하기
                sendPasswordResetEmail(auth, this.fnGetUser.email).then(function () {
                console.log("비밀번호 재설정메일을 발송했습니다!")
                alert('비밀번호 변경링크를 보냈습니다 E-MAIL을 확인하세요')
                }).catch(function (error) {
                console.log(error);
                })
            }
        }
        
    }
</script>

<style>
  /* 사진 이미지표시할 때 원 모양으로 스타일 표시 */
    .avatar_style {
        width: 100px;
        height: 100px;
        border-radius: 50%;
    }
</style>