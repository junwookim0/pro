/* 🥑 06-15 댓글 가져오기, 수정, 삭제 */
// 06-20 사용자 정보
// 작성자 아이디 = 현재 아이디 같을 때 삭제 수정 버튼 보임

import React, { useState, useContext } from "react";
import AuthContext from "../context/AuthContext";
import { useLocation } from "react-router-dom";
import { doc, deleteDoc, updateDoc } from "firebase/firestore";
import { firestore } from "../../firebase";

const CommentItem = ({ commentObj }) => {
    /* 사용자 정보 */
    const { user } = useContext(AuthContext);

    // editing 모드인지 아닌지
    const [editing, setEditing] = useState(false);
    // 업데이트
    const [newDComment, setNewDComment] = useState(commentObj.content);
    
    const location = useLocation();
    const dealState = location.state.deal;

    /* 사용 함수 */
    // editing 모드 끄고 켜기
    const toggleEditing = () => setEditing((prev) => !prev);

    // 업데이트
    const onSubmit = async (e) => {
        e.preventDefault();
        updateDoc(doc(firestore, `/dbDeals/${dealState.id}/dComments/${commentObj.id}`), {
            content: newDComment}
            );
            setEditing(false);
    };
    
    const onChange = (e) => {
        const {target: {value}} = e;
        setNewDComment(value);
    }

    // 댓글 삭제
    const onDeleteClick = async () => {
        const ok = window.confirm("정말 이 댓글을 삭제하시겠습니까?");
            if (ok) {
                //해당하는 게시글 파이어스토어에서 삭제
                await deleteDoc(doc(firestore, `/dbDeals/${dealState.id}/dComments/${commentObj.id}`));
            }
        };

    return (
        <section>
            <div>
                {
                    editing ? (
                        <>
                            <form onSubmit={onSubmit}>
                                <textarea 
                                onChange={onChange}
                                value={newDComment} cols="80" rows="5"></textarea>
                                <input type="submit" value="댓글 수정"/>
                            </form>
                            <button onClick={toggleEditing}>취소</button>
                        </>
                    ) : (
                        <>
                            <span>{commentObj.creatorName}</span>
                            <span>작성날짜 어케함</span>
                            <p>{commentObj.content}</p>
                            {
                                commentObj.creatorId == user.uid ? (
                                    <>
                                        <button onClick={onDeleteClick}>삭제</button>
                                        <button onClick={toggleEditing}>수정</button>
                                    </>
                                ) : (
                                    <></>
                                )
                            }
                        </>
                    )
                }
            </div>
        </section>
    ); 
};

export default CommentItem;