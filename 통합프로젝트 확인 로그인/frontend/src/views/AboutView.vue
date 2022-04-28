<template>
  <div class="about">
    <h1>메모</h1>

    <table>
      <td>
        <tr>번호</tr>
        <tr>작성자</tr>
        <tr>제목</tr>
      </td>
      <td v-for="(memo, i) in memo" :key="i">
        <tr>{{memo.id}}</tr>
        <tr>{{memo.writer}}</tr>
        <tr @click="$router.push(`/about/${memo.id}`)">{{memo.title}}</tr>
      </td> 
    </table>
  </div>
</template>

<script>

export default {
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