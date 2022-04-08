<template>
    <div class="review-container" >
        <ul>
        <li v-for="(review , i) in reviews" v-bind:key="i">
            <h3>Reviews <span><button @click="deletereview">x</button></span></h3>
            {{ review.name }} 님이 {{ review.rating }} 별점을 주었습니다
            <br>
            "{{ review.review }}"
            <br>
            추천: {{ review.recommend }}
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:'ReviewList',
    methods : {
        deletereview : function(){
            this.$emit("delete", this.id );
        },
        
    },
}
</script>