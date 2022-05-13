<template>
<v-container>
<h1>a</h1>
    <div id="addedproductlist">
        <div>
        <div>
            <div
            v-if="$store.getters.getcartProducts.length === 0"
            class="shopped-item"
            >
            장바구니에 담은 상품이 없습니다.
            </div>
            <div
            v-else
            class="shopped-item"
            :key="index"
            v-for="(cartproduct, index) in $store.getters.getcartProducts"
            >
            <div class="shopped-imgtitle">
                <img src="../assets/honey.jpg" />
                <div class="shopped-title">{{ cartproduct.title }}</div>
            </div>
            <div id="editquantity">
                <button @click="subOrder(cartproduct)">-</button>
                <div>
                {{ cartproduct.quantity }}
                </div>
                <button @click="addOrder(cartproduct)">+</button>
            </div>
            <div class="shopped-price">
                {{ cartproduct.itemtotalprice }}원
            </div>
            </div>
            <div class="shopped-total">
            총 가격 :  {{ $store.getters.cartTotal }}원
            </div>
        </div>
        </div>
    </div>
    </v-container>
</template>

<script>
    export default {
    methods: {
        addOrder(cartproduct) {
        this.$store.dispatch("addOrder", cartproduct);
        },
        subOrder(cartproduct) {
        this.$store.dispatch("subOrder", cartproduct);
        }
    },
};
</script>