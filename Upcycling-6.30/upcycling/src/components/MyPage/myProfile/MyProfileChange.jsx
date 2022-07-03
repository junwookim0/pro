//마이페이지에 프로필 표시 및 설정 컴포넌트
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";

import { firestore ,SignOut } from "../../../firebase";
import { collection, onSnapshot, query} from "firebase/firestore";

import { useNavigate } from "react-router-dom";
import "./MyProfileChange.css";
import { useState } from "react";
import { useEffect } from "react";
import Modalimg from '../../modal/modalimg';
import TestProfile from '../../login/TestProfile';


const MyProfileChange = () => {
    const { user } = useContext(AuthContext);
    const [userid, setUserId] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    
    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };
    // 🥑 렌더링 시 콜백 함수 실행
    useEffect(() => {
        const q = query(
        collection(firestore, "users"),
        );
        onSnapshot(q, (snapshot) => {
        const userArray = snapshot.docs.map(doc => ({
            id: doc.id, ...doc.data()
        }));
            setUserId(userArray);
        })
    }, []);
    const navigate = useNavigate();
    const handleLogout = async () => {
        await SignOut();
        alert("로그아웃");
        navigate("/");
    };
    
    return(
        <div className="profileChange_box">
            <h3 className='mypage_title'>기본정보/수정</h3>
            <div className='mypage_info_container'>
                <p className="userProfile_photo">{user.photoURL ? <img src={user.photoURL} alt="userphoto"/>  : <img src="../../../images/profile-picture.png" alt="userphoto2"/>}</p>
                <div className='mypage_info_box'>
                    <p className="userProfile_name"><span>이&nbsp;&nbsp;&nbsp;&nbsp;름 : &nbsp;</span>{user.displayName ? user.displayName : user.reloadUserInfo.screenName ? user.reloadUserInfo.screenName : `${userid.length}번째 손`}님</p> 
                    <p className="userProfile_email"><span>이메일 : &nbsp;</span>{user.email ? user.email : '이메일이 없습니다'}</p>
                </div>
            </div>
            <div className='mypage_info_buttons'>
                <div className="userProfile_change" onClick={openModal}>
                    <i className="fa-solid fa-gear" ></i>
                </div>
                <button className="userProfile_logout" onClick={handleLogout}>Logout</button>
            </div>
            <Modalimg open={modalOpen} close={closeModal} header="프로필설정">
                <TestProfile/>
            </Modalimg>
        </div>
    )
}
export default MyProfileChange;