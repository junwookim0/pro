/* 🥑 거래글 수정! */

import React, { useState } from "react";
import { firestore, storage } from "../../firebase";
import { doc, updateDoc } from "firebase/firestore";
import { ref, uploadString, getDownloadURL } from "@firebase/storage";
import { v4 as uuidv4 } from "uuid"; // 사진 랜덤 아이디
import { useLocation, useNavigate } from "react-router-dom";

const DealRevise = () => {
    const location = useLocation();

    const deal = location.state.deal

    /* editing 모드인지 아닌지 */
    const [editing, setEditing] = useState(false);

    /* 업데이트 */
    const [newDCategory, setNewDCategory] = useState(deal.category);
    const [newDTitle, setNewDTitle] = useState(deal.title);
    const [newDHashtag1, setNewHashtag1] = useState(deal.hashtag1);
    const [newDHashtag2, setNewHashtag2] = useState(deal.hashtag2);
    const [newDHashtag3, setNewHashtag3] = useState(deal.hashtag3);
    const [newDPrice, setNewDPrice] = useState(deal.price);
    const [newDContent, setNewDContent] = useState(deal.content);

    // 사진 업로드 관련
    const [newAttachment, setNewAttachment] = useState(deal.attachment);

    const navigate = useNavigate();

    /* editing 모드 끄고 켜기 */
    const toggleEditting = () => {
        setEditing((prev) => !prev)
        navigate(`/deals/${deal.createdAt}`, {state: {deal}})
    };

    /* 업데이트 */ // useEffect
    const onSubmit = async (event) => {
        event.preventDefault();
        
        let newAttachmentUrl = '';
        if(newAttachment !== '') {
            // 참조 경로 생성
            const attachmentRef = ref(storage, `images/${uuidv4()}`); // 사용자 아이디 들어오면 중간에 넣을 거
            // 참조 경로로 파일 업로드
            // uploadiString 써야지 똑바로 들어감
            const response = await uploadString(attachmentRef, newAttachment, "data_url");
            console.log(response)
            newAttachmentUrl = await getDownloadURL(response.ref);    
        };

        // dbDeals에 업데이트
        await updateDoc(doc(firestore, `/dbDeals/${deal.id}`), {
            category: newDCategory,
            title: newDTitle,
            hashtag1: newDHashtag1,
            hashtag2: newDHashtag2,
            hashtag3: newDHashtag3,
            price: newDPrice,
            content: newDContent,
            attachmentUrl: newAttachmentUrl
        });
        // state를 비워서 form 비우기
        setNewDCategory("");
        setNewDTitle("");
        setNewHashtag1("");
        setNewHashtag2("");
        setNewHashtag3("");
        setNewDPrice("");
        setNewDContent("");

        // state를 비워서 파일 미리보기 img src 비우기
        setNewAttachment("");

        setEditing(false);

        navigate(`/deals/${deal.createdAt}`, {state: {deal}})
    };

    const onChange = (e) => {
        const {target: {name, value}} = e;
        
        if(name === 'category') {
            setNewDCategory(value);
        } else if(name === 'title') {
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
        // 06-16 한 번에 한 개의 파일 입력하도록 했는데 여러 장 가능하게끔 수정,,, 어케 함
        const theFile = files[0];
        // 파일 이름 읽기
        const reader = new FileReader();
        reader.onloadend = (finishedEvent) => {
            const {currentTarget: {result}} = finishedEvent;
            setNewAttachment(result);
        };
        reader.readAsDataURL(theFile); // 데이터 인코딩
    };

    const onClearAttatchment = () => setNewAttachment('');

    return (
        <section>
            <form
            onSubmit={onSubmit}>
                {/* 카테고리 작성 */}
                <label>카테고리</label>
                <select>
                    <option name="category" value={newDCategory}>의류</option>
                    <option name="category" value={newDCategory}>잡화</option>
                    <option name="category" value={newDCategory}>뷰티/미용</option>
                    <option name="category" value={newDCategory}>반려동물</option>
                    <option name="category" value={newDCategory}>교육/체험 키트</option>
                    <option name="category" value={newDCategory}>기타 중고물품</option>
                </select> <br />

                {/* 제목 작성 */}
                <label>제목</label>
                <input
                name="title"
                onChange={onChange}
                value={newDTitle}
                type="text" 
                maxLength={80} /> <br />

                {/* 해시태그1 작성 */}
                <label>해시태그</label>
                <input
                name="hashtag1"
                onChange={onChange}
                value={newDHashtag1}
                type="text" 
                maxLength={80} /> <br />
                
                {/* 해시태그2 작성 */}
                <label>해시태그</label>
                <input
                name="hashtag2"
                onChange={onChange}
                value={newDHashtag2}
                type="text" 
                maxLength={80} /> <br />

                {/* 해시태그3 작성 */}
                <label>해시태그</label>
                <input
                name="hashtag3"
                onChange={onChange}
                value={newDHashtag3}
                type="text" 
                maxLength={80} /> <br />

                {/* 가격 작성 */}
                <label>가격</label>
                <input
                name="price"
                onChange={onChange}
                value={newDPrice}
                type="number" /> <br />

                {/* 글 작성 */}
                <textarea
                name="content"
                onChange={onChange}
                value={newDContent}
                cols="30" rows="10" /> <br />

                <input 
                onChange={onFileChange}
                type="file" 
                accept="image/*" />

                {/* 거래 업로드 */}
                <input 
                type="submit" 
                value="수정" />
                            
                {/* 업로드할 사진 미리 보기 */}
                {newAttachment && (
                    <div>
                        <img 
                        src={newAttachment} 
                        width="50px" height="50px" />

                        <button
                        onClick={onClearAttatchment}>첨부 파일 삭제</button>
                    </div>
                )}
            </form>

            <button onClick={toggleEditting}>취소</button>

        </section>
    );
};

export default DealRevise;