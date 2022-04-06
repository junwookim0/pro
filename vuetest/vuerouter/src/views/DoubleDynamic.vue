<template>
    <div>
        <h1>중첩라우터와 동적라우터입니다</h1>
        <p>한 개의 컴포넌트를 동적라우팅합니다</p>
        <nav>
            <router-link to='/doubledynamic/1'>1</router-link>
            <router-link to='/doubledynamic/2'>2</router-link>
        </nav>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name :"DoubleDynamic"
}
</script>