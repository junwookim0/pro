/* 🥑 거래글 수정! */
// 06-20 사용자 정보

import React, { useState, useContext } from "react";
import AuthContext from "../context/AuthContext";
import { firestore, storage } from "../../firebase";
import { doc, updateDoc } from "firebase/firestore";
import { ref, uploadString, getDownloadURL } from "@firebase/storage";
import { v4 as uuidv4 } from "uuid"; // 사진 랜덤 아이디
import { useLocation, useNavigate } from "react-router-dom";
import { format } from "date-fns";

import styles from './CSS/dealRevise.module.css';

import Nav from "../Nav/Nav";
import SubMainBannerDeal from "../banner/SubMainBannerDeal";

const DealRevise = () => {

    /* 사용자 정보 */
    const { user } = useContext(AuthContext);

    const location = useLocation();
    const deal = location.state.deal;
    console.log(deal)

    /* editing 모드인지 아닌지 */
    const [editing, setEditing] = useState(false);

    /* 업데이트 */
    const [newDTitle, setNewDTitle] = useState(deal.title);
    const [newDHashtag1, setNewHashtag1] = useState(deal.hashtagArray[0]);
    const [newDHashtag2, setNewHashtag2] = useState(deal.hashtagArray[1]);
    const [newDHashtag3, setNewHashtag3] = useState(deal.hashtagArray[2]);
    const [newDPrice, setNewDPrice] = useState(deal.price);
    const [newDContent, setNewDContent] = useState(deal.content);

    /* 사진은 storage */
    const [newAttachment, setNewAttachment] = useState('');
    const [inputButton, setInputButton] = useState(false)
    const [fileName, setFileName] = useState('');

    const navigate = useNavigate();

    /* editing 모드 끄고 켜기 */
    const toggleEditting = () => {
        setEditing((prev) => !prev)
        navigate(`/deals/${deal.createdAt}`, {state: {deal}})
    };


    const onChange = (e) => {
        const {target: {name, value}} = e;
        
        if(name === 'title') {
            setNewDTitle(value);
        } else if(name === 'hashtag1') {
            setNewHashtag1(value);
        } else if(name === 'hashtag2') {
            setNewHashtag2(value);
        } else if(name === 'hashtag3') {
            setNewHashtag3(value);
        }else if(name === 'price') {
            setNewDPrice(value);
        } else if(name === 'content') {
            setNewDContent(value);
        };
    };

    const onFileChange = (e) => {
        const {target: {files}} = e;
        setInputButton(true);
        const theFile = files[0];
        // 파일 이름 읽기
        const reader = new FileReader();
        reader.onloadend = (finishedEvent) => {
            const {currentTarget: {result}} = finishedEvent;
            setNewAttachment(result);
        };
        reader.readAsDataURL(theFile); // 데이터 인코딩
        setInputButton(false);
        setFileName(theFile.name);
    };

    const onButtonClick = (e) => {
        e.preventDefault();
        let dealIMG = document.getElementById('dealIMG');
        dealIMG.click();
    };

    /* 업데이트 */
    const onSubmit = async (e) => {
        e.preventDefault();
            
        // 사진 변경하지 않을 경우 파일 첨부
        let newAttachmentUrl = deal.attachmentUrl;
        if (newAttachment !== '') {
            const newAttachmentRef = ref(storage, `images/${user.uid}/${uuidv4()}`);
    
            const response = await uploadString(newAttachmentRef, newAttachment, "data_url");
            console.log(response);
            newAttachmentUrl = await getDownloadURL(response.ref)
        };
    
        let date = new Date();
            
        // dbDeals에 업데이트
        await updateDoc(doc(firestore, `/dbDeals/${deal.id}`), {
            title: newDTitle,
            hashtagArray: [newDHashtag1, newDHashtag2, newDHashtag3],
            price: newDPrice,
            content: newDContent,
            date : format(date, "yyyy.MM.dd HH:mm"),
            creatorName: user.displayName,
            creatorPhoto: user.photoURL,
            attachmentUrl: newAttachmentUrl
        });
    
        setEditing(false);
    
        // state를 비워서 form 비우기
        setNewDTitle("");
        setNewHashtag1("");
        setNewHashtag2("");
        setNewHashtag3("");
        setNewDPrice("");
        setNewDContent("");
    
        // state를 비워서 파일 미리보기 img src 비우기
        setNewAttachment("");
    
        navigate('/deals', {state: {deal}})
    };
    
    return (
        <>
            <Nav />
            <SubMainBannerDeal />
            <div className={styles.dealWrite}>
                <div className={styles.titleBox}>
                    <h2>마켓 게시글 수정하기</h2>
                </div>
            <form
            onSubmit={onSubmit}
            className={styles.form}>
                {/* 제목 작성 */}
                <input
                name="title"
                onChange={onChange}
                value={newDTitle}
                type="text" 
                className={styles.input_title}  /> <br />

                {/* 가격 작성 */}
                <input
                name="price"
                onChange={onChange}
                value={newDPrice}
                type="number"
                placeholder="가격을 입력해 주세요"
                className={styles.input_price} /> <br />
                
                {/* 파일 업로드 - 안 보임 */}            
                <input 
                onChange={onFileChange}
                id="dealIMG"
                type="file" 
                accept="image/*"
                className={styles.fileInput} />

                {/* 글 작성 */}
                <textarea
                name="content"
                onChange={onChange}
                value={newDContent}
                className={styles.textarea} /> <br />

                <div className={styles.last_container}>
                        <div className={styles.inner}>
                            <div className={styles.input_container}>
                                {/* 업로드할 사진 미리 보기 */}
                                {newAttachment != '' ? (
                                    <div>
                                        <img 
                                        src={newAttachment} 
                                        alt="업로드한 이미지"
                                        className={styles.fileInput_img} />
                                    </div>
                                ) : (
                                    <div className={styles.before_uploadedImg}>
                                        <p>수정할 이미지를 <br />첨부해 주세요</p>
                                    </div>
                                )}

                                <button 
                                className={styles.input_button}
                                onClick={onButtonClick}>
                                    {fileName || <div><i className="fa-solid fa-image"></i> <span>이미지 첨부</span></div>}
                                </button>

                            </div>

                            <div className={styles.hash_container}>
                                <div className={styles.hashtags_box}>
                                    {/* 해시태그1 작성 */}
                                    <input
                                    name="hashtag1"
                                    onChange={onChange}
                                    value={newDHashtag1}
                                    type="text" 
                                    placeholder="해시태그 1"
                                    className={styles.hashtags} /> <br />
                                    
                                    {/* 해시태그2 작성 */}
                                    <input
                                    name="hashtag2"
                                    onChange={onChange}
                                    value={newDHashtag2}
                                    type="text" 
                                    placeholder="해시태그 2"
                                    className={styles.hashtags} /> <br />

                                    {/* 해시태그3 작성 */}
                                    <input
                                    name="hashtag3"
                                    onChange={onChange}
                                    value={newDHashtag3}
                                    type="text" 
                                    placeholder="해시태그 3"
                                    className={styles.hashtags} /> <br />
                                </div>
                            </div>
                            <div className={styles.submit_buttons}>
                                <button 
                                className={styles.button}
                                onClick={toggleEditting}>취소</button>
                                {/* 거래 업로드 */}
                                <input 
                                type="submit" 
                                value="수정"
                                className={styles.button} />
                            </div>
                        </div>
                    </div>              
            </form>
        </div>
        </>
    );
};

export default DealRevise;