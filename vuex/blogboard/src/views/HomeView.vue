<template>
  <div class="home">

    <a 
      v-for="board in $store.state.board"
      :key="board.id">
      <router-link :to="`/board/${board.id}`">
        {{board.id}}
      </router-link>
    </a>

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