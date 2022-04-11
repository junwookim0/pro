<template>
<div class="board">
    <h1>게시글 목록입니다</h1>

    <a v-for="n in 10" :key="n">
        <router-link :to="`/board/${n}`"> {{ n }}</router-link> |
    </a>
    <!-- 위에 작성한 router-link의 컴포넌트가 보임  -->
    <router-view></router-view>
</div>
</template>

<script>

    export default {
        name: 'BoardView',

    }
</script>
