<template>
    <div>
        <h1>회원가입 페이지 입니다</h1>
        <form @submit.prevent="fnRegisterUser">
            <label for="">이메일</label>
            <input type="text" v-model="sEmall" required> <br>
            <label for="">비밀번호</label>
            <input type="password" v-model="sPassword" required> <br>
            <input type="submit" value="회원가입">
        </form>
    </div>
</template>
<script>
    export default {
        data() {
        return {
            bAlert : false, // 오류 메시지 표시 여부
            sEmall : '', // 이메일 입력값 임시 저장
            sPassword : '', // 비밀번호 입력값 임시 저장
        }
        },
        computed: {
        // 오류메시지 스토어에서 읽어서 반환
        fnGetErrMsg() {
            return this.$store.getters.fnGetErrorMessage
        },
        // 시간지연상태 스토어에서 읽어서 반환
        fnGetLoading() {
            return this.$store.getters.fnGetLoading
        }
        },
        methods: {
        // 스토어에 이메일 회원가입 처리 요청
            fnRegisterUser() {
                this.$store.dispatch('fnRegisterUser', {
                    pEmail: this.sEmall,
                    pPassword: this.sPassword
                })   
            }
        },
        watch: {
        // fnGetErrMsg 함수가 오류메시지를 반환하면 오류 메시지 표시
        fnGetErrMsg(pMsg) {
            if (pMsg) this.bAlert = true
        },
        // bAlert 값이 false로 바뀌면 에러메시지 초기화
        bAlert(pValue) {
            if (pValue == false) this.$store.commit('fnSetErrorMessage', '')
        }
        }
    }
</script>