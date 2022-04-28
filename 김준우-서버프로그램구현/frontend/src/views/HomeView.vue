<template>
  <div class="home">
      <h1>메모</h1>
      <table v-for="(memo, i) in memo" :key="i">
        <tr>
          <td>{{memo.id}}</td>
          <td>{{memo.writer}}</td>
          <td @click="$router.push(`/${memo.id}`)">{{memo.title}}</td>
        </tr>
      </table>
    
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  created() { 

    this.$http.get('/api/memo')
    .then((response)=>{
      console.log(response.data)
      this.memo = response.data
    })

  },
  data() {
    return {
      memo :[]
    }
  }
}
</script>
