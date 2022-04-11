<template>
   <form class="review-form" v-on:submit.prevent="onSubmit">
    <h3>리뷰를 남기세요</h3>
    <label for="name">이름 :</label>
    <input v-model="name">

    <label for="review">리뷰 :</label>      
    <textarea v-model="review"></textarea>

    <label for="rating">별점</label>
    <select v-model.number="rating">
        <optgroup label="- Rating">
        <option>5</option>
        <option>4</option>
        <option>3</option>
        <option>2</option>
        <option>1</option>
        </optgroup>
    </select>

    <label for="recommend">이 물건을 추천하나요?</label>
    <select v-model="recommend">
        <optgroup label="- Recommned">
        <option>Yes</option>
        <option>No</option>
        </optgroup>
    </select>
    <input class="button" type="submit" value="Submit">      
</form>
</template>

<script>
export default {
    name : 'ReviewForm',
    data : function () {
    return {
        name : '',
        review : "",
        id:0,
        rating :null,
        recommend : null,
    }
},
methods : {
    onSubmit : function () {
        
        let productReview = {
            id : this.id,
            name :this.name,
            review : this.review,
            rating : this.rating,
            recommend : this.recommend,
            
        }
        this.$emit('submit-review', productReview)
    }
},
}
</script>