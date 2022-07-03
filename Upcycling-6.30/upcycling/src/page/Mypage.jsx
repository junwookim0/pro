//navbar의 마이페이지
import { useContext } from "react";
import AuthContext from "../components/context/AuthContext";
import { useNavigate } from "react-router-dom";

import Nav from '../components/Nav/Nav';
import SubMainBanner from "../components/banner/SubMainBannerMypage"
import MyProfileChange from "../components/MyPage/myProfile/MyProfileChange";
import MyPageTab from "../components/tab/myPageTab";

const Mypage = ({ reviewRepository, deals}) => {
    const { user } = useContext(AuthContext);
    
    const navigate = useNavigate();
    const goSignIn = () => {
        navigate("/signin");
    }
    
    if(!user){
        return (
            <div>
                <h1>로그인 해주세요</h1>
                <p onClick={goSignIn}>로그인 하기 click</p>
            </div>
        )
    }else {
        return(
            <div>
                <Nav/>
                <SubMainBanner/>
                <MyProfileChange/>
                <MyPageTab reviewRepository={reviewRepository}/>
            </div>
        )
    }
    
    
};
export default Mypage;