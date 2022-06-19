/* 🥑 거래글 작성! */

import React, { useState } from "react";
import { firestore, storage } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadString, getDownloadURL } from "@firebase/storage";
import { v4 as uuidv4 } from "uuid"; // 사진 랜덤 아이디
import { useNavigate } from "react-router-dom";

const DealWrite = () => {
    /* 작성한 제목, 카테고리, 가격, 내용 firestore에 저장 */
    const [dCategory, setDCategory] = useState(''); // 카테고리
    const [dTitle, setDTitle] = useState(''); // 제목
    const [dHashtag1, setDHashtag1] = useState(''); // 해시태그
    const [dHashtag2, setDHashtag2] = useState(''); // 해시태그
    const [dHashtag3, setDHashtag3] = useState(''); // 해시태그
    const [dPrice, setDPrice] = useState(''); // 가격
    const [dContent, setDContent] = useState(''); // 내용
    
    /* 사진은 storage */
    const [attachment, setAttachment] = useState('');

    const navigate = useNavigate();

    /* 사용 함수 */
    // submit
    const onSubmit = async(e) => {
        e.preventDefault();

        let attachmentUrl = '';
        if(attachment !== '') {
            // 참조 경로 생성
            const attachmentRef = ref(storage, `images/${uuidv4()}`); // 사용자 아이디 들어오면 중간에 넣을 거
            // 참조 경로로 파일 업로드
            // uploadiString 써야지 똑바로 들어감
            const response = await uploadString(attachmentRef, attachment, "data_url");
            console.log(response)
            attachmentUrl = await getDownloadURL(response.ref);    
        };

        // submit하면 추가할 데이터
        const dealObj = {
            category: dCategory, // 카테고리
            title: dTitle, // 제목 
            hashtag1: dHashtag1,
            hashtag2: dHashtag2,
            hashtag3: dHashtag3,
            price: dPrice, // 가격
            content: dContent, // 내용
            createdAt: Date.now(), // 생성날짜
            //creatorId: userObj.id,
            //creatorName: userObj.displayName, // 생성한 사람 닉 표시
            attachmentUrl: attachmentUrl
        };

        await addDoc(collection(firestore, "dbDeals"), dealObj);

        // state를 비워서 form 비우기
        setDCategory("");
        setDTitle("");
        setDHashtag1("");
        setDHashtag2("");
        setDHashtag3("");
        setDPrice("");
        setDContent("");

        // state를 비워서 파일 미리보기 img src 비우기
        setAttachment("");

        navigate('/deals', {dealObj})
    }; // 파이어베이스 저장 완

    const onChange = (e) => {
        const {target: {name, value}} = e;
        
        if(name === 'category') {
            setDCategory(value);
        } else if(name === 'title') {
            setDTitle(value);
        } else if(name === 'hashtag1') {
            setDHashtag1(value);
        } else if(name === 'hashtag2') {
            setDHashtag2(value);
        }else if(name === 'hashtag3') {
            setDHashtag3(value);
        }else if(name === 'price') {
            setDPrice(value);
        } else if(name === 'content') {
            setDContent(value);
        };
    };

    const onFileChange = (e) => {
        const {target: {files}} = e;
        // 06-16 한 번에 한 개의 파일 입력하도록 했는데 여러 장 가능하게끔 수정,,, 어케 함
        const theFile = files[0];
        // 파일 이름 읽기
        const reader = new FileReader();
        reader.onloadend = (finishedEvent) => {
            const {currentTarget: {result}} = finishedEvent;
            setAttachment(result);
        };
        reader.readAsDataURL(theFile); // 데이터 인코딩
    };

    // 이미지 첨부 취소
    const onClearAttatchment = () => setAttachment('');

    return (
        <div>
            <form
            onSubmit={onSubmit}>
                {/* 카테고리 작성 */}
                <label>카테고리</label>
                <select>
                    <option name="category" value={dCategory}>의류</option>
                    <option name="category" value={dCategory}>잡화</option>
                    <option name="category" value={dCategory}>뷰티/미용</option>
                    <option name="category" value={dCategory}>반려동물</option>
                    <option name="category" value={dCategory}>교육/체험 키트</option>
                    <option name="category" value={dCategory}>기타 중고물품</option>
                </select> <br />

                {/* 제목 작성 */}
                <label>제목</label>
                <input
                name="title"
                onChange={onChange}
                value={dTitle}
                type="text" 
                maxLength={80} /> <br />

                {/* 해시태그1 작성 */}
                <label>해시태그</label>
                <input
                name="hashtag1"
                onChange={onChange}
                value={dHashtag1}
                type="text" 
                maxLength={80} /> <br />
                
                {/* 해시태그2 작성 */}
                <label>해시태그</label>
                <input
                name="hashtag2"
                onChange={onChange}
                value={dHashtag2}
                type="text" 
                maxLength={80} /> <br />

                {/* 해시태그3 작성 */}
                <label>해시태그</label>
                <input
                name="hashtag3"
                onChange={onChange}
                value={dHashtag3}
                type="text" 
                maxLength={80} /> <br />

                {/* 가격 작성 */}
                <label>가격</label>
                <input
                name="price"
                onChange={onChange}
                value={dPrice}
                type="number" /> <br />

                {/* 글 작성 */}
                <textarea
                name="content"
                onChange={onChange}
                value={dContent}
                cols="30" rows="10" /> <br />

                <input 
                onChange={onFileChange}
                type="file" 
                accept="image/*" />

                {/* 게시글 업로드 */}
                <input 
                type="submit" 
                value="작성" />

                {/* 업로드할 사진 미리 보기 */}
                {attachment && (
                    <div>
                        <img 
                        src={attachment} 
                        width="50px" height="50px" />

                        <button
                        onClick={onClearAttatchment}>첨부 파일 삭제</button>
                    </div>
                )}
            </form>

        </div>
    );
};

export default DealWrite;