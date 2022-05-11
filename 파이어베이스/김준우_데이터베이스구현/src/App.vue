<template>
  <div id="app">
    <nav v-if="!fnGetAuthStatus">
      <router-link to="/">Home</router-link> |
      <router-link to="/register">회원가입</router-link>
    </nav>
    <nav v-else>
      <router-link to="/main">Home</router-link> |
      <a @click="fnDoLogout">로그아웃</a> |
      <a @click="fnDoDelete">회원탈퇴</a>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  computed : {
    fnGetAuthStatus(){
      return this.$store.getters.fnGetAuthStatus
    }
  },
  methods: {
    fnDoDelete(){
        if(confirm("회원 탈퇴 하시겠습니까?") == true){
        this.$store.dispatch('fnDoDelete')
        alert("탈퇴되었습니다")
        }else{
          return;
        }
      },
      fnDoLogout() {
        if(confirm("로그아웃 하시겠습니까?")== true){
          this.$store.dispatch('fnDoLogout')
          alert("로그아웃 되었습니다")
        }else{
          return;
        }
      },
  }
}
</script>

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
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
