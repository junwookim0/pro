import { getDatabase, ref, set, remove} from 'firebase/database'

class LikeRepository {

    constructor(app) {
        this.db = getDatabase();
    }

    saveLike(userId,review){
        set(ref(this.db, `${userId}/reviews/likes/${review.id}`), review);
        console.log(' user like 저장성공!')
        set(ref(this.db, `reviews/review/${review.id}/likes`), userId);
        console.log(' reviews like  저장성공!')
        console.log('like repository')
    }

    // removeLike(userId, reviewId) {
    //     remove(ref(this.db, `${userId}/reviews/${reviewId}/comment/${comment.id}`));
    //     console.log(' user like 삭제성공!')
    //     remove(ref(this.db, `reviews/review/${reviewId}/comment/${comment.id}`));
    //     console.log(' reviews like 삭제성공!')
    // }
}

export default LikeRepository;