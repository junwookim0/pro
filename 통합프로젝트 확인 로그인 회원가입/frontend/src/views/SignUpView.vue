<template>
    <v-stepper v-model="e1">
        <v-stepper-header>
        <v-stepper-step
            :complete="e1 > 1"
            step="1"
        >
            아아디
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step
            :complete="e1 > 2"
            step="2"
        >
            비밀번호
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step step="3">
            확인절차 
        </v-stepper-step>
        </v-stepper-header>

        <v-stepper-items>
        <v-stepper-content step="1">
            <v-card
            class="mb-12"
            color="grey lighten-1"
            height="200px"
            >
                <v-text-field label="아아디" v-model="user"></v-text-field>
                <v-text-field label="아아디 중복 확인" v-model="user2"></v-text-field>
            </v-card>

            <v-btn
            color="primary"
            @click="signupid"
            >
            Continue
            </v-btn>

            <v-btn text @click="$router.push('/')">
            Cancel
            </v-btn>
        </v-stepper-content>

        <v-stepper-content step="2">
            <v-card
            class="mb-12"
            color="grey lighten-1"
            height="200px"
            >
                <v-text-field label="패스워드" type="password" v-model="password"></v-text-field>
                <v-text-field label="패스워드" type="password" v-model="password2"></v-text-field>
            </v-card>

            <v-btn
            color="primary"
            @click="signuppassword"
            >
            Continue
            </v-btn>

            <v-btn text @click="e1 = 1">
            Cancel
            </v-btn>
        </v-stepper-content>

        <v-stepper-content step="3">
            <v-card
            class="mb-12"
            color="grey lighten-1"
            height="200px"
            >
                <v-text-field label="아아디" v-model="user"></v-text-field>
                <v-text-field label="패스워드" type="password" v-model="password"></v-text-field>
            </v-card>

            <v-btn
            color="primary"
            @click="SignUp"
            >
            SignUp
            </v-btn>

            <v-btn text  @click="e1 = 2">
            Cancel
            </v-btn>
        </v-stepper-content>
        </v-stepper-items>
    </v-stepper>
</template>

<script>
    export default {
        data () {
            return {
                e1: 1,
                user : '',
                user2 : '',
                password : '',
                password2 : '',
            }
        },
        methods : {
            signupid : function(){
                if(this.user == this.user2){
                    this.e1 = 2
                }else{
                    this.e1 =1
                    alert('틀렸습니다')
                }
            },
            signuppassword : function(){
                if(this.password == this.password2){
                    this.e1 = 3
                }else{
                    this.e1 =2
                    alert('틀렸습니다')
                }
            },
            SignUp : function(){
                this.$http.post('/api/login/',{
                    data : {
                        user : this.user,
                        password : this.password
                    }
                }).then(response => console.log(response.data))
                    this.$router.push('/login');
                    alert("가입을 환영합니다");
            }
        },
    }
</script>