import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './CSS/reviewWrite.module.css'

//🍎 Review를 작성하는 페이지

const ReviewWrite = ({createAndUpdateReview , userId, imageUploader}) => {
    const formRef = useRef();
    const reviewCategoryRef = useRef();
    const reviewTitleRef = useRef();
    const reviewHashtagsRef = useRef();
    const reviewDescriptionRef = useRef();
    const reviewIMGRef = useRef();
    const [user, setUser] = useState(userId)

    useEffect(()=>{
        setUser(userId)
    },[userId])

    //🍎user의 uid를 user에 저장함 -> 이후에 user가 닉넴이랑 userPhoto받아오게하기
    //일단은 GREEN 관리자로 사용할것!
    // const [user] = useState(userId)
    console.log(user)
    const navigate = useNavigate();

    const [uploadedIMG, setUploadedIMG] = useState()
    const [inputButton, setInputButton] = useState(false)

    const onSubmit = event => {
        event.preventDefault();

        const review = {
            id  : 'R' + Date.now(),
            nickname : 'GREEN 관리자',
            profileIMG : 'https://image.shutterstock.com/image-vector/default-avatar-profile-icon-social-260nw-1677509740.jpg',
            reviewIMG : uploadedIMG,
            reviewTitle : reviewTitleRef.current.value,
            reviewDescription : reviewDescriptionRef.current.value,
            reviewHashtags : reviewHashtagsRef.current.value,
            reviewCategory : reviewCategoryRef.current.value,
        }; 
        formRef.current.reset();
        createAndUpdateReview(review, user)
        navigate('/reviews');
    }

    const onChange = async (event) => {
        event.preventDefault();
        // console.log(event.target.files[0]);
        setInputButton(true)
        const uploaded = await imageUploader.upload(event.target.files[0]);
            setUploadedIMG(uploaded.url)
        setInputButton(false)
        console.log('이미지로딩')
    }


    // console.log(userId)
    // console.log(uploadedIMG);

    //⭐글쓰기 항목이 다 있을 때만 버튼이 활성화 될 수있도록
    const canSave = Boolean(reviewTitleRef)  && Boolean(reviewDescriptionRef) && Boolean(uploadedIMG)
    return (
            <form className={styles.form} ref={formRef}>
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
                    <textarea 
                        ref={reviewDescriptionRef} 
                        name="" 
                        id="" 
                        cols="30" 
                        rows="10"
                        className={styles.reviewDescription}
                        >

                    </textarea>
                    <br/>
                    { uploadedIMG && (<img src={uploadedIMG} alt='이미지' style={{width: '50px', height: '50px'}} />)}
                    <input 
                        ref={reviewIMGRef}
                        type="file"
                        accept='image/*'
                        name='reviewIMG'
                        onChange={onChange}
                    />
                    <br/>
                    { inputButton &&
                        (<div className={styles.modal_container}>
                            <div className={styles.dialog__inner}>
                                <button className={styles.buttonClose}>╳</button>
                                <div className={styles.dialog__content}>
                                <h3>이미지를 업로딩 중 입니다.</h3>
                                <p>잠시만 기다려주세요.</p>
                                <p>자동으로 닫힙니다</p>
                                </div>  
                            </div>
                        </div>)
                    }

                    <button 
                    onClick={onSubmit}
                    disabled={!canSave}
                    >작성완료
                    </button>
            </form>
        
    );
};

export default ReviewWrite;