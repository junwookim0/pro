<template>
    <div class="page3">
        <h1>3 페이지 입니다</h1>
        <p>{{data.board[2].memo}}</p>
    </div>
</template>



<script>
import data from '@/assets/data.json'
export default {
    name : 'PageComponent3',
    data : function(){
        return{
        data : data,
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
