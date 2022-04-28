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
        <!--title을 클릭 했을 때 pageview 화면으로 넘어감 -->
        <!-- 보여지는 화면은 vue의 화면이기에 뷰컴포넌트와 라우터가 존재해야함 -->
        <tr @click="$router.push(`/about/${memo.id}`)">{{memo.title}}</tr>
      </td>
    </table>
  </div>
</template>

<script>
/*
  [2] about링크를 눌렀을 때 AboutView 컴포넌트 호풀
  [3] axios를 통해서 백엔드(/api/memo)에  http 객체로 request 보냄
*/
export default {
  //11. created() : 뷰 컴포넌트가 실행될때 (생성) 마다 아래 함수를 실행하기 위함
  created() { 
    // 메모값을 vue가 생성될때 들고옴 -axios는  fetch와 사용법 유사
    // 주소 '/api/memo'로 get메소드로 request를 보냄
    this.$http.get('/api/memo')
    .then((response)=>{
      console.log(response.data)
      //12. response 값을 memo에 저장 
      this.memo = response.data
    })

    /*
      [6] memo.js 에서 보내준 emomos의 값을 response를 통해 전달받음
    */
  },
  data() {
    return {
      memo :[]
    }
  }
}
</script>