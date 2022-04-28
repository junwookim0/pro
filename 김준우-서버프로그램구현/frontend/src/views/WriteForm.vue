<template>
  <div class="writeform">
      
    <h1>글을 작성하는 공간입니다</h1>

    <input type="text" v-model="title"> <br>
    <textarea v-model="memo" cols="30" rows="10"></textarea> <br>
    <button @click="add"> 전송 </button>

  </div>
</template>


<script>
export default {
  data : function(){
    return{
        title : '',
        memo : '',
    }
  },
  methods : {
    add : function(){
      this.$http.post('/api/memo/',{
                data : {
                    title : this.title,
                    memo : this.memo,
                }
            }).then( response => console.log(response.data))

            this.$router.push('/');
    }
  }
}
</script>
