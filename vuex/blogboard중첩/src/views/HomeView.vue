<template>
  <div class="home">

      <router-link v-for="board in $store.state.board"
      :key="board.id" :to="`/board/${board.id}`">
        {{board.id}}
      </router-link>
  <router-view></router-view>
<!--
    <div 
    v-for="board in $store.state.board"
    :key="board.id">
      <p>{{board.id}}</p>
      <p>{{board.memo}}</p>
    </div>
-->
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'HomeView',
}
</script>