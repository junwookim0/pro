new Vue({
    el : '#app',
    data : {
        reviews : [],
    },
    methods : {
        addReview : function(review){
            this.reviews.push(review);
    
        },
        deletReview : function(id) {
            let index=0;
            this.reviews.splice(index,1);
        },
    }
})