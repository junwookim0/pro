<template>
  <div class="home">
    <label for="">유저이름</label> <br>
    <input type="text" v-model="user"> 
    <button @click="loginuser">확인</button>
    <p>{{$store.state.user}}</p>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
  },
  data() {
    return {
      user : ""
    }
  },
  methods : {
    loginuser () {
      this.$store.commit('loginuser', this.user);
      // /list로 이동
      this.$router.push('/list');
    }
  }
}
</script>
