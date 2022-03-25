new Vue({
    el : '#app',
    data : {
        reviews : []
    },
    methods : {
        addReview : function(review){
            this.reviews.push(review);
        }
    }
})