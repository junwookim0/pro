<!-- 배송지 작성 페이지 -->
<template>
    <v-container>
        <v-row>
        <v-col offset="3" cols="6" class="text-center mt-5">
            <v-radio-group
            v-model="row"
            row
            >
                <v-radio
                    label="address 1"
                    value="radio-1"
                ></v-radio>
                <v-radio
                    label="address 2"
                    value="radio-2"
                ></v-radio>
            </v-radio-group>
            <p>주문자 정보</p>
            <br>
            <v-btn @click="findAddr()" block outlined color="red" large dark>주소찾기1</v-btn>
            <input id="member_post"  type="text" placeholder="우편 번호" readonly>
            <input id="member_addr" type="text" placeholder="기본주소" readonly> <br>
            <input type="text" placeholder="상세주소 및 상제 건물명">
            
            <p class="mt-15">배송지 정보</p>
            <br>
            <v-btn @click="findAddr()" block outlined color="red" large dark class="">주소찾기1</v-btn>
            <input id="member_post"  type="text" placeholder="우편 번호" readonly>
            <input id="member_addr" type="text" placeholder="기본주소" readonly> <br>
            <input type="text" placeholder="상세주소 및 상제 건물명">
            
        </v-col>
        </v-row>
    </v-container>
    <!--기본구조 >> 배송지창 >> 기존배송지(저장) 최근배송지  새배송지창  >> 배송정보창이랑(주문자 정보랑 동일 클릭시 데이터 복붙) 주문자정보창  -->
    <!--배송시 요청사항 배송상품정보 결제창  -->
</template>
<script>
export default {
    data(){
        return{
            addressClick : false,
        }
    },
    methods: {
        findAddr(){
            new daum.Postcode({
                oncomplete: function(data) {
                    console.log(data);
                    // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.
                    // 도로명 주소의 노출 규칙에 따라 주소를 표시한다.
                    // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
                    var roadAddr = data.roadAddress; // 도로명 주소 변수
                    var jibunAddr = data.jibunAddress; // 지번 주소 변수
                    // 우편번호와 주소 정보를 해당 필드에 넣는다.
                    document.getElementById('member_post').value = data.zonecode;
                    if(roadAddr !== ''){
                        document.getElementById("member_addr").value = roadAddr;
                    } 
                    else if(jibunAddr !== ''){
                        document.getElementById("member_addr").value = jibunAddr;
                    }
                }
            }).open();
        },
    }
}
</script>