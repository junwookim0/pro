import React, { useRef } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './CSS/reviewWrite.module.css'

import { useContext } from "react";
import AuthContext from "../context/AuthContext";

import { format } from "date-fns";
import Nav from '../Nav/Nav';
import SubMainBannerReviews from '../banner/SubMainBannerReviews';

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

    const [name , setName] = useState('')

   


    let date = new Date();

    const onSubmit = event => {
        event.preventDefault();

        const review = {
            id  : 'R' + Date.now(),
            nickname : user.displayName? userName: 'None',
            email : userEmail,
            profileIMG : userPhoto? userPhoto : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973461_960_720.png',
            userId : userId,
            reviewIMG : uploadedIMG,
            reviewTitle : reviewTitleRef.current.value,
            reviewDescription : reviewDescriptionRef.current.value,
            reviewHashtags : [reviewHashtagsRef1.current.value,reviewHashtagsRef2.current.value,reviewHashtagsRef3.current.value,],
            reviewDate :  format(date, "yyyy.MM.dd HH:mm"),
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
        setName(uploaded.original_filename)
        setInputButton(false)
    }

    //🍎버튼을 클릭하면 파일인풋이 클릭된것 처럼 보이기
    const onButtonClick = (event) =>{
        event.preventDefault();
        reviewIMGRef.current.click();
    };

    //🍎
    const goReviewPage = () => {
        navigate('/reviews')
    }

    //⭐글쓰기 항목이 다 있을 때만 버튼이 활성화 될 수있도록
    const canSave = Boolean(reviewTitleRef)  && Boolean(reviewDescriptionRef) && Boolean(uploadedIMG)
    return (
        <>
        <Nav/>
        <SubMainBannerReviews/>
        
            <div className={styles.reviewWrite}>
            <div className={styles.titleBox}>
                <h2>리뷰 글쓰기</h2>
            </div>
                <form className={styles.form} ref={formRef}>
                    <input className={styles.input_title} ref={reviewTitleRef} id='reviewTitle' name='reviewTitle' type="text" placeholder='제목을 입력해 주세요' />
                
                {/* 화면상에서 안보임 */}
                    <input 
                        className={styles.fileInput}
                        ref={reviewIMGRef}
                        type="file"
                        accept='image/*'
                        name='reviewIMG'
                        onChange={onChange}
                    />
                <textarea 
                    className={styles.textarea}
                    ref={reviewDescriptionRef} 
                    placeholder='내용을 입력하세요.'
                    >
                </textarea>

                    { inputButton &&
                        (<div className={styles.modal_container}>
                            <div className={styles.dialog__inner}>
                                <div className={styles.dialog__content}>
                                <h2>이미지를 업로딩 중 입니다.</h2>
                                <p>잠시만 기다려주세요.</p>
                                <p>자동으로 닫힙니다</p>
                                <div className={styles.loading}></div>
                                </div>  
                            </div>
                        </div>)
                    }
                    

                    <div className={styles.last_container}>
                        <div className={styles.inner}>
                            <div className={styles.input_container}>
                                {uploadedIMG? (<img src={uploadedIMG} alt='이미지' className={styles.fileInput_img} />) : (
                                    <div className={styles.before_uploadedImg}>
                                        <p>이미지를 <br/>첨부해주세요</p>
                                    </div>
                                )}
                                <button 
                                    className={styles.input_button}
                                    onClick={onButtonClick}
                                >
                                {name || <div><i className="fa-solid fa-image"></i> <span>이미지 첨부</span></div>}
                                </button>
                            </div>

                            <div className={styles.hash_container}>
                                <p>#태그를 입력해주세요 (최대 3개)</p>
                                <div className={styles.hashtags_box}>
                                    <input className={styles.hashtags} ref={reviewHashtagsRef1} name='reviewHashtags' type="text" placeholder='해시태그 1' />
                                    <input className={styles.hashtags} ref={reviewHashtagsRef2} name='reviewHashtags' type="text" placeholder='해시태그 2' />
                                    <input className={styles.hashtags} ref={reviewHashtagsRef3} name='reviewHashtags' type="text" placeholder='해시태그 3' />
                                </div>
                            </div>

                        </div>
                        <div className={styles.submit_buttons}>
                            <button 
                                onClick={()=>goReviewPage()}
                                className={styles.button}
                            >취소
                            </button>
                            <button 
                                className={styles.button_ok}
                                onClick={onSubmit}
                                disabled={!canSave}
                            >완료
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default ReviewWrite;