Vue.component('review-list', {
    props : ['reviews'],
    template : `
    <div class="review-container">
        <ul>
        <li v-for="review in reviews" >
            <h3>Reviews:</h3>
            {{ review.name }} 님이 {{ review.rating }} 별점을 주었습니다
            <br>
            "{{ review.review }}"
            <br>
            추천: {{ review.recommend }}
            </li>
        </ul>
    </div>
    `
})