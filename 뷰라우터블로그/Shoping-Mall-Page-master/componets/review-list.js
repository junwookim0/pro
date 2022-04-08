Vue.component('review-list', {
    props : ['reviews','id'],
    template : `
    <div class="review-container" >
        <ul>
        <li v-for="review in reviews" >
            <h3>Reviews <span><button @click="deletereview">x</button></span></h3>
            {{ review.name }} 님이 {{ review.rating }} 별점을 주었습니다
            <br>
            "{{ review.review }}"
            <br>
            추천: {{ review.recommend }}
            </li>
        </ul>
    </div>
    `,
    methods : {
        deletereview : function(){
            this.$emit("delete", this.id );
        },
        
    },
})