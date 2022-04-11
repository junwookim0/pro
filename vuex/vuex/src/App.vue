<template>
  <div id="app">
    <h1> index.js 카운터에서 직접 가져온 값 입니다 {{$store.state.count}}</h1>
    <h1> coumputed 사용해서 카운터에서 가져온 값 입니다 {{count}}</h1>
    <button @click="$store.commit('addcount')"> 카운트 증가 </button>
    <button @click="$store.commit('removecount')"> 카운트 감소</button>
    <ul>
      <li v-for="list in $store.state.list" :key="list.id">
        {{list.memo}}
      </li>
    </ul>

    <ul>
      <li v-for="name in names" :key="name.index">
        {{ name.n }}
      </li>
    </ul>
    <ul>
      <li v-for="(t,i) in text" :key="i">
        {{t}}
      </li>
    </ul>

    <p> {{ doneTodosCount }}</p>
    <p>{{ doneTodos }} </p>

    <Hello-world/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',
  components : {
    HelloWorld,
  },
  computed : {
    count : function(){
      return this.$store.state.count;
    },
    names : function(){
      return this.$store.state.names;
    },
    text : function(){
      return this.$store.state.text;
    },
    doneTodosCount : function(){
      return this.$store.state.todos.filter(todo => todo.done).length;
    },
    doneTodos : function(){
      return this.$store.getters.doneTodos
    }
  },
}
</script>




<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
