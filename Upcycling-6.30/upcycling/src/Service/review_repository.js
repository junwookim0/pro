import { getDatabase, onValue,off, ref, set, remove} from 'firebase/database'


class ReviewRepository {

    constructor(app) {
        this.db = getDatabase();
    }

    syncReviews(onUpdate){
        const query = ref(this.db, 'reviews/review');
        onValue(query, (snapshot) => {
            const value = snapshot.val();
            value && onUpdate(value);
        })
        return () => off(query);
    }

    syncMyReviewsById(onUpdate, userId){
        const query = ref(this.db, `${userId}/reviews`);
        onValue(query, (snapshot) => {
            const value = snapshot.val();
            value && onUpdate(value);
        })
        return () => off(query);
    }

    syncMyLikeById(onUpdate,userId){
        const query = ref(this.db, `${userId}/likes`);
        onValue(query, (snapshot) => {
            const value = snapshot.val();
            value && onUpdate(value);
        })
        return () => off(query);
    }

    syncMyCommentsById(onUpdate,userId){
        const query = ref(this.db, `${userId}/comments`);
        onValue(query, (snapshot) => {
            const value = snapshot.val();
            value && onUpdate(value);
        })
        return () => off(query);
    }


    saveReview(userId, review){
        set(ref(this.db, `${userId}/reviews/${review.id}`), review);
        console.log(' user 저장성공!')
        set(ref(this.db, `reviews/review/${review.id}`), review);
        console.log(' reviews 저장성공!')
    }

    
    //⭐⭐⭐리뷰 삭제할때 안에있는 코멘트랑 리뷰도 같이 삭제될것!
    removeReview(userId, review) {
        console.log(userId)
        remove(ref(this.db, `${userId}/reviews/${review.id}`));
        console.log(' user 삭제성공!')
        remove(ref(this.db, `reviews/review/${review.id}`));
        console.log(' reviews 삭제성공!')

    }
}

export default ReviewRepository;