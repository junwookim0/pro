import { Outlet, useNavigate } from "react-router-dom";
import './Nav.css'
//nav바 

const Nav = () => {
    
    // useNavigate를 사용하여 원하는 주소로 이동할수 있다.
    const navigate = useNavigate();
    
    //navicate를 사용하여 mypage로 이동하세요
    const goHome = () => {
        navigate("/home");
    };
    const goIntro = () => {
        navigate("/intro");
    };
    const goEvent = () => {
        navigate("/event");
    };
    const goReview = () => {
        navigate("/reviewlist");
    };

    return (
        <div>
            <header>
                <nav className="navbar">
                    <div className="navbar_logo" onClick={goHome}>
                        <span className="logo_text">: UPTOWN</span>
                    </div>
                    <ul className="navbar_menu">
                        <li onClick={goIntro}>소개</li>
                        <li onClick={goEvent}>이벤트</li>
                        <li onClick={goReview}>리뷰</li>
                        <li>거래</li>
                    </ul>
                    <ul class="gnb_img">
                        <li>마이페이지</li>
                        <li>로그인</li>
                        
                    </ul>
                </nav>
            </header>

            <main>
                <Outlet></Outlet>
            </main>
        
    </div>
    );
};

export default Nav;
