<template>
    <v-container>
            <h1 class="display-1 my-1">home page 컨텐츠</h1>
        <v-row>
        <v-col cols="12" sm="6" md="4" lg="3" 
        v-for="(col ,i) in fnGetCollection" :key="i">
            <v-card
            class="mx-auto my-2"
            max-width="374"
            >
                <v-img
                    height="250"
                    :src="col.photoURL"
                ></v-img>
                <v-card-title>{{col.title}}</v-card-title>
                <v-card-text>
                    <div class="my-4 text-subtitle-1">
                        {{col.name}}
                    </div>
                    <div>{{col.content}} </div>
                </v-card-text>
                <v-card-title>Tonight's availability </v-card-title>
                <v-card-actions>
                    <v-btn
                        color="deep-purple lighten-2"
                        text
                        to="/"
                    >
                        관심
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
        </v-row>
    </v-container>
</template>


<script>
import {
    oFirebaseAuth
} from '@/datasources/firebase'
export default {
    computed: {
        fnGetCollection() {
            let oproductInfo = this.$store.getters.fnGetCollection
            return oproductInfo
        },
    },
    methods: {
        fnSendPasswordReset() {
            // 비밀번호 재설정 메일 발송하기
            oFirebaseAuth.sendPasswordResetEmail(this.fnGetUser.email).then(function () {
            console.log("비밀번호 재설정메일을 발송했습니다!")
            alert('비밀번호 변경링크를 보냈습니다 E-MAIL을 확인하세요')
            }).catch(function (error) {
            console.log(error);
            })
        },
    }
}
</script>