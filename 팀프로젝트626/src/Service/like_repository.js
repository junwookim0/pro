import { getDatabase, ref, set, remove} from 'firebase/database'

class LikeRepository {

    constructor(app) {
        this.db = getDatabase();
    }

    saveLike(userId,review){
        set(ref(this.db, `${userId}/likes/${review.id}`), review);
        console.log(' user like 저장성공!')
        set(ref(this.db, `reviews/review/${review.id}/likes/${userId}`), userId);
        console.log(' reviews like  저장성공!')
        console.log('like repository')
    }

    removeLike(userId, review) {
        remove(ref(this.db, `${userId}/likes/${review.id}`));
        console.log(' user like 삭제성공!')
        remove(ref(this.db, `reviews/review/${review.id}/likes/${userId}`));
        console.log(' reviews like 삭제성공!')
    }
}

export default LikeRepository;