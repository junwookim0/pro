import React, { useRef } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './CSS/reviewWrite.module.css'

import { useContext } from "react";
import AuthContext from "../context/AuthContext";


//🍎 Review를 작성하는 페이지

const ReviewWrite = ({createAndUpdateReview , imageUploader}) => {
    const formRef = useRef();
    const reviewTitleRef = useRef();
    const reviewDescriptionRef = useRef();
    const reviewIMGRef = useRef();

    const reviewHashtagsRef1 = useRef();
    const reviewHashtagsRef2 = useRef();
    const reviewHashtagsRef3 = useRef();
    
    const { user } = useContext(AuthContext);
    const userId = user.uid
    const userName = user.displayName;
    const userEmail = user.email;
    const userPhoto = user.photoURL

    const navigate = useNavigate();

    const [uploadedIMG, setUploadedIMG] = useState()
    const [inputButton, setInputButton] = useState(false)

    const onSubmit = event => {
        event.preventDefault();

        const review = {
            id  : 'R' + Date.now(),
            nickname : userName,
            email : userEmail,
            profileIMG : userPhoto,
            reviewIMG : uploadedIMG,
            reviewTitle : reviewTitleRef.current.value,
            reviewDescription : reviewDescriptionRef.current.value,
            reviewHashtags : [reviewHashtagsRef1.current.value,reviewHashtagsRef2.current.value,reviewHashtagsRef3.current.value,]
        }; 
        formRef.current.reset();
        createAndUpdateReview(review, userId)
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

    //⭐글쓰기 항목이 다 있을 때만 버튼이 활성화 될 수있도록
    const canSave = Boolean(reviewTitleRef)  && Boolean(reviewDescriptionRef) && Boolean(uploadedIMG)
    return (
            <form className={styles.form} ref={formRef}>
                
                
                    <label htmlFor="reviewTitle">Title : </label>
                    <input ref={reviewTitleRef} id='reviewTitle' name='reviewTitle' type="text" placeholder='제목' />
                    <br/>
                    <label htmlFor="reviewHashtags">Hashtag : </label>
                        <input ref={reviewHashtagsRef1} name='reviewHashtags' type="text" placeholder='해시태그' />
                        <input ref={reviewHashtagsRef2} name='reviewHashtags' type="text" placeholder='해시태그' />
                        <input ref={reviewHashtagsRef3} name='reviewHashtags' type="text" placeholder='해시태그' />

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