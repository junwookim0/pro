<template>
    <div>
        <h1>로그인 페이지 입니다</h1>
        <form @submit.prevent="fnDoLogin">
            <label for="">이메일</label>
            <input type="text" v-model="sEmall" required> <br>
            <label for="">비밀번호</label>
            <input type="password" v-model="sPassword" required>
            <input type="submit" value="로그인">
        </form>
    </div>
</template>

<script>
export default {
    data(){
        return{
            sEmail: '', // 이메일 입력값 임시 저장
            sPassword: '' // 비밀번호 입력값 임시 저장
        }
    },
    methods: {
        // 스토어에 이메일 로그인 처리 요청
        fnDoLogin() {
            this.$store.dispatch('fnDoLogin', {
                pEmail: this.sEmail,
                pPassword: this.sPassword
            })
        }
    },
}
</script>