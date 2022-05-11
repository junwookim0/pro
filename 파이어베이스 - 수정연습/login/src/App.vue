<template>
  <v-app>
    <!-- 반응형 중단점이 데스크톱(lg) 이상일 때 탐색 서랍이 툴바 아래에 표시되도록 함 clipped
    app속성은 반드시 설정해야 함
    v-app엘리먼트 안의 내용이 적절히 표시되도로 도움 -->
    <v-navigation-drawer clipped v-model="drawer" app>
      <v-list>
        <v-list-item v-if="fnGetAuthStatus">
            <v-list-item-avatar>
                <img v-if="fnGetUser.photoURL" :src="fnGetUser.photoURL" class="avatar_style" alt="">
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="title">{{ fnGetUser.name }}</v-list-item-title>
                <v-list-item-subtitle>로그인</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        <!-- items 배열을 읽어와서 차례로 메뉴로 바인딩 하여 표시함 -->
        <v-list-item value="true" v-for="(item, i) in fnGetMenuItems" :to="item.to" :key="i">
          <v-list-item-action>
            <!-- html 엘리먼트의 값으로 바인딩할 때는 v-html 디렉티브 사용
							-->
            <v-icon v-html="item.icon"></v-icon>
          </v-list-item-action>
          <v-list-item-title v-text="item.title"></v-list-item-title>
        </v-list-item>
        
      </v-list>

    </v-navigation-drawer>
    <!-- 탑색서랍이 툴바 아래에 위치할 때 메뉴 아이콘이 적절히 좌측에 배치되도록 app과 clipped-left 어트리뷰트 지정 -->
    <v-app-bar app clipped-left color="primary" dark>
      <!-- 햄버거 아이콘은 반응형 크기가 sm 이상일 때 숨김 -->
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="hidden-sm-and-up"></v-app-bar-nav-icon>

      <router-link to="/ct" style="cursor: pointer">
        <v-icon class="hidden-xs-only" large v-if="fnGetAuthStatus"> mdi-home </v-icon>
      </router-link>
      <v-toolbar-title class="headline">
        이름
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <!-- 툴바의 메뉴명을 표시할 때 xs일 때는 숨기고 나머지 크기에는 보이게
				함 -->
      <v-toolbar-items class="hidden-xs-only">
        <v-btn text v-for="item in fnGetMenuItems" :key="item.title" :to="item.to">
          <v-icon left>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
        

      </v-toolbar-items>

    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>

    <v-footer app>
      <div class="mx-auto">&copy; CODE-DESIGN.web.app</div>
    </v-footer>
  </v-app>

</template>
<script>
  export default {
    data() {
      return {
        drawer: false
      }
    },
    computed: {
      fnGetUser() {
        let oUserInfo = this.$store.getters.fnGetUser
        return oUserInfo
      },
      // 스토어에서 현재 인증 상태인지 반환
      fnGetAuthStatus() {
        return this.$store.getters.fnGetAuthStatus
      },
      // 로그인 여부에 따라 다르게 탐색서랍과 툴바 메뉴명 항목 배열 반환
      fnGetMenuItems() {
        if (!this.fnGetAuthStatus) {
          return [
            {
              title: '로그인',
              to: '/',
              icon: 'mdi-home'
            },
            {
              title: '회원가입',
              to: '/register',
              icon: 'mdi-lock-open-outline'
            },
            
          ]
        } else {
          return [
            {
              title: '홈',
              to: '/ct',
              icon: 'mdi-home'
            },
            {
              title: '내 정보',
              to: '/main',
              icon: 'mdi-account'
            },
          ]
        }
      }
    },
    name: 'App'
  }
</script>