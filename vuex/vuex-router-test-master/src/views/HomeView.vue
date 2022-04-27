<template>
  <div class="home">
    <table>
      <tr>
        <td>번호</td>
        <td>게시글</td>
        <td>클릭횟수(조회수)</td>
      </tr>

      <tr 
      v-for="board in $store.state.boardlist"
      :key="board.id">
        <td>{{board.id}}</td>
        <!-- 클릭했을때 /board/board.id 위치로 이동하기 -->
        <!-- router-link를 사용하게되면 클릭이벤트가 사용되지않는다 -->
        <td @click="addcount(board.id)">{{board.title}}</td>
        <td>{{board.count}}</td>
      </tr>

    </table>

    <!-- 값을 사용하기전에 값이 제대로 출력되는지 확인하기-->
    <!--
    <h3>{{$store.state.boardlist}}</h3>
    -->
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'HomeView',
  methods : {
    addcount(id) {
      // store에 있는 mutations사용
      this.$store.commit('addcount', id);
      this.$router.push(`/board/${id}`);
    }
  }
}
</script>
