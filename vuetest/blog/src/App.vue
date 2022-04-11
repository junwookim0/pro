<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
    <v-toolbar-title>blog</v-toolbar-title>
      

      <v-spacer></v-spacer>
      <div v-if="login">
      <v-btn outlined @click="$router.push('/board')">글목록</v-btn>
      <v-btn outlined @click="$router.push(`/user/${user}`)">{{user}}님의 정보</v-btn>
      <v-btn outlined @click="loginOut"> 로그아웃 </v-btn>
      
      </div>
      <v-btn v-else outlined @click="$router.push('/login')">
        <span class="mr-2">로그인</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>



    <v-main>
      <!-- 라우터된 화면이 보이는 공간 -->
      <router-view @login-user="showLogin"/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    user : '',
    login : false,
  }),
  methods : {
    showLogin : function(user){
      this.user = user;
      this.login = true;
    },
    loginOut : function(){
      this.user = '';
      this.login = false;
      //처음화면으로 돌아가기위함
      this.$router.push('/');
    }
  }
};
</script>
