<template>
<v-container class="pa-10">
    <v-card>
        <v-text-field label="아아디" v-model="user"></v-text-field>
        <v-text-field label="패스워드" type="password" v-model="password"></v-text-field>
        <v-card-actions>
            <v-btn @click="loginUser">로그인</v-btn>
            <v-btn @click="$router.push('/signup')">회원가입</v-btn>
            <v-btn @click="$router.push('/')">취소</v-btn>
        </v-card-actions>
    </v-card>
</v-container>
</template>

<script>
export default {
    name: 'LoginView',
    data() {
        return{
            user : '',
            password : '',
            ex : [],
        }
    },
    created(){
        this.$http.get('/api/login')
            .then((response) => {
            this.ex = response.data
        })
    },
    methods : {
        loginUser : function(){
            if(this.user == this.ex.user){
                if( this.password == this.ex.password){
                    this.$emit('login-user', this.user)
                    alert("로그인 성공");
                }else{
                    alert("비밀번호가 틀렸습니다");
                }
            }
            else{
                alert("잘못 입력하셨습니다");
            }
            this.$router.push('/login');
        }
    },
}
</script>
