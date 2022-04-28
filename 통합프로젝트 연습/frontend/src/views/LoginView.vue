<template>
<v-container class="pa-10">
    <v-card>
        <!-- 뷰티파이를 이용해서 입력창 디자인  -->
        <v-text-field label="아아디" v-model="user"></v-text-field>
        <v-text-field label="패스워드" type="password" v-model="password"></v-text-field>
        <v-card-actions>
            <!-- 로그인 버튼을 누르면 loginUser메소드 호출 -->
            <v-btn @click="loginUser">로그인</v-btn>
            <v-btn @click="$router.push('/')">취소</v-btn>
        </v-card-actions>
    </v-card>
</v-container>
</template>

<script>
export default {
    name: 'LoginView',
    data : ()=>({
        user : '',
        password : '',
    }),
    methods : {
        //login-user 이벤트를 보내고 , this.user 값을 전달
        loginUser : function(){
            if(this.user == 'jun'){
                if(this.password == 1){
                    this.$emit('login-user',this.user)
                }
                else{
                    alert('비밀번호가 틀렸습니다')
                }
            }
            else{
                alert('틀렸습니다');
            }
        }
    }
}
</script>
