<template>
<v-container class="pa-10">
    <v-card>
        <v-text-field label="아아디" v-model="user"></v-text-field>
        <v-text-field label="패스워드" type="password" v-model="password"></v-text-field>
        <v-card-actions>
            <v-btn @click="loginUser">로그인</v-btn>
            <v-btn @click="SignUp">회원가입</v-btn>
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
        ex : []
    }),
    created(){
        this.$http.get('/api/login/',{
            })
            .then((response) => {
            this.ex = response.data
        })
    },
    methods : {
        SignUp : function(){
            this.$http.post('/api/login/',{
                data : {
                    user : this.user,
                    password : this.password
                }
            }).then(response => console.log(response.data))
            this.$router.push('/');
            alert("가입을 환영합니다");
        },
        loginUser : function(){
            if(this.ex.user == this.user){
                if(this.ex.password == this.password){
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
