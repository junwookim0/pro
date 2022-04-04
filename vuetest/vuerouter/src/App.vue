<template>
  <div id="app">
    
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/show">Show</router-link> |
    </nav>
    <ul>
      <li v-for="(num, i) in 4" :key="i">
        <!-- 주소값을 조합해서 출력하고 싶을 때 -->
        <!-- 바인드를 이용해서 문자열로 바꿔서 넣어서 수정가능 -->
        <router-link :to="`/dynamic/${num}`">
          dynamic {{num}}
        </router-link>
      </li>
    </ul>
    <!-- 새로고침이 일어남 - a, form -->
    <a href="http://">하이퍼링크</a>

    <p>네브다음</p>
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
