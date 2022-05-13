<template>
    <v-container>
        <div id="productpage">
            <div id="productsimple">
            <div class="product-img">
                <img src="../assets/honey.jpg">
            </div>
            <div class="product-simpleinfo">
                <ul>
                <li class="title" v-text="product.title"></li>
                <li class="des" v-text="product.description"></li>
                <li class="price">{{ product.price }}원</li>
                </ul>
                <div>남은 수량 : {{ product.inventory }}개</div>
                <div id="editquantity">
                <button @click="subOrder(product)">-</button>
                <div>
                    {{ $store.getters.getcartProductsthis(product).quantity }}
                </div>
                <button @click="addOrder(product)">+</button>
                </div>
                <div class="total">
                    총합계 : {{ $store.getters.getcartProductsthis(product).itemtotalprice }}원
                </div>
            </div>
            </div>

            <div id="productdetail"></div>
        </div>
    </v-container>
</template>

<script>
    export default {
    name: "ProductPage",
    data() {
        const index = this.$route.params.contentId;
        return {
        product: this.$store.state.products[index]
        };
    },
    methods: {
        addOrder(product) {
        this.$store.dispatch("addOrder", product);
        },
        subOrder(product) {
        this.$store.dispatch("subOrder", product);
        },
    },
};
</script>