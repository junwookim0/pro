<template>
    <div>
        <!-- 동적라우팅을 통해 id값에 맞는 memo 출력 -->
        <!-- id : params.id 에 저장 -->
        <!-- Vuex의 getters를 사용해서 id값을 이용하여 가져오기 -->

        <p>{{getmemo}}</p>
    </div>
</template>

<script>
export default {
    name : 'PageView',
    computed : {
        getmemo : function() {
            return this.$store.state.board[this.$route.params.id-1].memo
        },
    }
}
</script>