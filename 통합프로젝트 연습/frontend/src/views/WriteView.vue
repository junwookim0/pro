<template>
    <div class="write">
        <h1>글을 작성하는 공간 입니다</h1>
        <form action="">
            작성자 : <input v-model="writer" type="text" size="28"> <br>
            제목 : <input  v-model="title" type="text" size="28"> <br>
            내용 : <textarea v-model="memo" cols="30" rows="10"></textarea> <br>
        </form>
        <button @click="addmemo"> 완료 </button>
        
    </div>
</template>

<script>
    export default {
        data : function(){
            return{
                writer: '',
                title : '',
                memo: '',
            }
        },
        methods : {
            addmemo : function(){
                //서버와 통신 해서 , 값을 보내줌
                this.$http.post('/api/memo/',{
                    data : {
                        title : this.title,
                        memo : this.memo,
                        writer : this.writer
                    }
                }).then(response => console.log(response.data))
                //vue-router를 통해서 / 으로 이동
                this.$router.push('/')
            },
        },
    }
</script>