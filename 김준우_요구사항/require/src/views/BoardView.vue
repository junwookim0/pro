<template>
<div class="board">
    <h1>게시글 목록입니다</h1>

        <router-link to="/page"> 1 </router-link> |
        <router-link to="/page2"> 2 </router-link> |
        <router-link to="/page3"> 3 </router-link> |
    
    <!-- 위에 작성한 router-link의 컴포넌트가 보임  -->
    <router-view></router-view>
</div>
</template>

<script>

    export default {
        name: 'BoardView',

    }
</script>
