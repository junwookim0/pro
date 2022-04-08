Vue.component('product-display',{
    data : function(){
        return {
            brand : 'Green',
            product : '마스크',
            pay : 15000,
            details : [ '폴리프로필렌 부직포' ,
                        '플라스틱(코편)' ,
                        '나일론끈' ],
            variants : [
                {color : 'white', image : './images/mask_white.jpg' , stock : 10},
                {color : 'black', image : './images/mask_black.jpg' , stock : 0},
            ],
            //선택한 상품
            selction : 0,
        }
    },
    methods : {
        updateVariant : function(index){
            this.selction  =index;
        }
    },
    computed : {
        title : function() {
            return this.brand + " "+this.product;
        },
        image : function(){
            //배열에서 이미지값 들고오기
            return this.variants[this.selction].image;
        },
        isStock : function(){
            //배열에서 재고 값 들고오기
            return this.variants[this.selction].stock;
        }
    },
    template : 
    `
    <div class="product-display">
        <div class="product-container">
            <!--상품 이미지추가-->
            <div class="product-image">
                <img v-bind:src="image" alt="">
            </div>
            <!--상품 설명-->
            <div class="product-info">
                <h1> {{title}} </h1>
                <p v-if="isStock">수량이 남아있습니다</p>
                <p v-else> 남은수량이 없습니다</p>
                <p>금액 : {{ pay }}</p>
                <!--상품 세부설명-->
                <ul>
                    <!-- 배열로 들고와서 출력 -->
                    <li v-for="detail in details"> {{ detail }}</li>
                </ul>
                <!--색상 바꾸기 -->
                <!--값을 들고오면 뒤에 오는 값은 배열의 index 값 -->

                <div
                class="color-circle" 
                v-for="(variant, index) in variants"
                v-bind:style="{ backgroundColor : variant.color}"
                v-on:mouseover="updateVariant(index)"
                >
                </div>

                <!--버튼-->
                <button class="button" v-bind:class="{disabledButton : !isStock}"> 장바구니에 추가 </button>

            </div>
        </div>
    </div>
    `
})