<template>
    <div>
        <h1>시작페이지</h1>
        <a @click="fnDoGoogleLogin_Popup"> 구글 로그인</a> <br>
        <a href="/login"> 이메일 로그인</a>
    </div>
</template>

<script>
export default {
    methods : {
         fnDoGoogleLogin_Popup() { // 스토어에 구글계정 로그인 처리 요청
        this.$store.dispatch("fnDoGoogleLogin_Popup")
        },
    },
    computed: {
        // 시간지연상태 스토어에서 읽어서 반환
        fnGetLoading() {
            return this.$store.getters.fnGetLoading
        }
    },
}
</script>