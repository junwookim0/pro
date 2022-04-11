<template>
  <div id="app">
    
    <nav>
    <!-- 컴포넌트 채로 바꿈, 새로고침x -->
      <!-- 주소의 URL을 바로 넣어줌-->
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/show">Show</router-link> |
      <router-link to="/double">중첩</router-link> |
      <router-link to="/doubledynamic">사용자페이지</router-link>
    </nav>
      <button @click=" $router.push({name: 'show'}) ">show</button>
      <button @click=" $router.push('/double') ">중첩</button><br>
      
      <button 
      v-for="(num,i) in 4"
      :key="i"
      @click="$router.push(`/doubledynamic/${num}`)"
      >
        {{num}}
      </button>
      <br>
      
      <button 
      v-for="(num,i) in 4"
      :key="i"
      @click="$router.push({name: 'doubledynamicid', params : {id : num}})"
      >
        {{num}}
      </button>
      <br>

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
