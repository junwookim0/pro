import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

//🍎 Review를 작성하는 페이지

const ReviewWrite = ({addReview}) => {
    const formRef = useRef();
    const reviewCategoryRef = useRef();
    const reviewTitleRef = useRef();
    const reviewHashtagsRef = useRef();
    const reviewDescriptionRef = useRef();
    const reviewIMGRef = useRef();

    const navigate = useNavigate();

    const onSubmit = event => {
        event.preventDefault();

        const review = {
            id :Date.now(),
            nickname : 'GREEN 관리자',
            profileIMG : 'https://image.shutterstock.com/image-vector/default-avatar-profile-icon-social-260nw-1677509740.jpg',
            reviewIMG : 'https://dnvefa72aowie.cloudfront.net/origin/article/202206/aab8f307bc7c31a2a6016cd1cec6f585cae06bfe99398f8fe26de5633f85a980.webp?q=82&s=300x300&t=crop',
            reviewTitle : reviewTitleRef.current.value,
            reviewDescription : reviewDescriptionRef.current.value,
            reviewHashtags : reviewHashtagsRef.current.value,
            reviewCategory : reviewCategoryRef.current.value,
        }; 
        formRef.current.reset();
        addReview(review)
        navigate('/reviews');
    }



    

    return (
        <form ref={formRef}>
            <select ref={reviewCategoryRef} name="reviewCategory" id="">
                <option value="">말머리1</option>
                <option value="">말머리2</option>
                <option value="">말머리3</option>
            </select>
                <label htmlFor="reviewTitle">
                    <input ref={reviewTitleRef} name='reviewTitle' type="text" placeholder='제목' />
                </label>
                <br/>
                <label htmlFor="reviewHashtags">
                    <input ref={reviewHashtagsRef} name='reviewHashtags' type="text" placeholder='해시태그' />
                </label>
                
                <br/>
                <textarea ref={reviewDescriptionRef} name="" id="" cols="30" rows="10"></textarea>
                <br/>
                <input 
                    ref={reviewIMGRef}
                    type="file"
                    accept='image/*'
                    name='reviewIMG'
                />

                <button onClick={onSubmit}>작성완료</button>
        </form>
    );
};

export default ReviewWrite;