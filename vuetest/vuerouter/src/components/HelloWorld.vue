<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  <p>{{ datas.language[0]}}</p>
  <p v-for="(data, i) in datas.language" :key="i">
    {{ data.name}}
  </p>

  <p v-for="data in datas.students" :key="data.name">
    {{data.name}}
    {{data.age}}
  </p>
  </div>


</template>

<script>
import datas from '@/assets/datas.json'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data : function() {
    return{
      datas : datas,
    }
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
