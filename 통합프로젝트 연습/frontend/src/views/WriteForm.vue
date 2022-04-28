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
      
    }
  }
}
</script>
