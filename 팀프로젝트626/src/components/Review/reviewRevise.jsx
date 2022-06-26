import React, { useState } from 'react';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './CSS/reviewRevise.module.css'

//🍎 Review를 수정하는 페이지

import { useContext } from "react";
import AuthContext from "../context/AuthContext";



const ReviewRevise = ({createAndUpdateReview , imageUploader}) => {
    const location = useLocation();
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const userId = user.uid

    const review = location.state.review
    const [changedReview, setChangedReview] = useState({});
    const [uploadedIMG, setUploadedIMG] = useState(review.reviewIMG)
    const [inputButton, setInputButton] = useState(false)


    useEffect(()=>{
        setUploadedIMG(uploadedIMG)
    },[uploadedIMG])


    const onChange = event => {
        if(event.currentTarget == null) {
            return;
        }
        event.preventDefault();
        setChangedReview( {
            ...review,
            [event.currentTarget.name] : event.currentTarget.value,
        });
    };



    const  imgOnChange = async (event) => {
        event.preventDefault();
        
        setInputButton(true)
        console.log(event.target.files[0]);
        const uploaded = await imageUploader.upload(event.target.files[0]);
        setUploadedIMG(uploaded.url)
        setInputButton(false)

        console.log(uploaded.url)
        console.log('이미지로딩')
        setChangedReview( {
            ...review,
            reviewIMG : uploaded.url,
        });
    }

    const SubmitReview = () => {
        createAndUpdateReview(changedReview,userId)
        navigate('/reviews')
        
    }

    return (
        <section>
            <select name="" id="">
                <option value="">말머리1</option>
                <option value="">말머리2</option>
                <option value="">말머리3</option>
            </select>
                <label htmlFor="reviewTitle">
                    <input 
                        name='reviewTitle' 
                        type="text" 
                        defaultValue={review?review.reviewTitle:''} 
                        onChange={onChange}
                    />
                </label>
                <br/>
                <label htmlFor="reviewHashtags">
                    <input 
                        name='reviewHashtags' 
                        type="text" 
                        defaultValue={review?review.reviewHashtags:''}
                        onChange={onChange}
                    />
                </label>
                
                <br/>
                <textarea 
                    className={styles.reviewDescription}
                    name="reviewDescription" 
                    defaultValue={review?review.reviewDescription:''}
                    onChange={onChange}
                ></textarea>
                <br/>
                <span>현재 이미지 : </span>
                <img
                    src={uploadedIMG} 
                    alt='current'
                    style={{width: '50px', height: '50px'}}
                />
                <input 
                    type="file"
                    accept='image/*'
                    name='reviewIMG'
                    onChange={imgOnChange} 
                />
                <button onClick={SubmitReview}>수정</button>
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
        </section>
    );
};

export default ReviewRevise;