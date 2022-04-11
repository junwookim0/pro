<template>
  <div class="hello">

        <h3> {{ doneTodos }} 헬로월드에서</h3>

        <h3> {{ doneTodosR }}  헬로월드에서</h3>

        <h3> {{ getTodoById(1) }}  헬로월드에서 </h3>

        <button @click="addcount"> 헬로월드 카운트 증가 </button>
        <button @click="removecount"> 카운트 감소</button>
  </div>
</template>

<script> 
import { mapGetters , mapMutations } from 'vuex'

export default {
  name: 'HelloWorld',
  computed : {
    ...mapGetters([
      'doneTodos',
      'doneTodosR',
      'getTodoById'
    ]),
  },
  methods : {
    ...mapMutations([
      'addcount',
      'removecount'
    ])
  }
}
</script>






<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
