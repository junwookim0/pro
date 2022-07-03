import { getDatabase, ref, set, remove} from 'firebase/database'

class CommentRepository {

    constructor(app) {
        this.db = getDatabase();
    }

    saveComment(userId,reviewId, comment){
        set(ref(this.db, `${userId}/comments/${comment.id}`), comment);
        console.log(' user코멘트 저장성공!')
        set(ref(this.db, `reviews/review/${reviewId}/comment/${comment.id}`), comment);
        console.log(' rirews코멘트 저장성공!')
    }

    removeComment(userId, reviewId, comment) {
        remove(ref(this.db, `${userId}/comments/${comment.id}`));
        console.log(' user코멘트 삭제성공!')
        remove(ref(this.db, `reviews/review/${reviewId}/comment/${comment.id}`));
        console.log(' rirews코멘트 삭제성공!')
    }
}

export default CommentRepository;