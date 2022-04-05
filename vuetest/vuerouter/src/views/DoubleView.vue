<template>
    <div>
        <h1>중첩라우터입니다</h1>
        <h1>두개의 컴포넌트를 라우팅합니다</h1>
        <nav>
            <router-link to='/doubledynamic/1'>1</router-link>
            <router-link to='/doubledynamic/2'>2</router-link>
        </nav>
        <router-view/>
    </div>
</template>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    }

    nav {
    padding: 30px;
    }

    nav a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    }

    nav a.router-link-exact-active {
    color: #42b983;
    }
</style>

<script>
export default {
    name : 'DoubleView'
}
</script>