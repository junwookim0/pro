import { Outlet, useNavigate } from "react-router-dom";

//nav바 

const Nav = () => {
    
    // useNavigate를 사용하여 원하는 주소로 이동할수 있다.
    const navigate = useNavigate();
    
    //navicate를 사용하여 mypage로 이동하세요
    const goHome = () => {
        navigate("/");
    };


    return (
        <div>
            <header style={{ background: "lightgray", padding: 16 }}>
                <nav>
                    <ul>
                        <li><a>index</a></li>
                        <li><a>event</a></li>
                        <li><a>리뷰</a></li>
                        <li><a>거래</a></li>
                            {/* 클릭했을 때 홈으로 이동 */}
                            <li><a className="mainLogo" onClick={goHome}>로고</a></li>
                        
                            {/* 팝업 */}
                            <li>마이페이지</li>
                            
                    </ul>
                </nav>
            </header>

            <main>
                <Outlet></Outlet>
            </main>
            
            <footer>푸터</footer>
    </div>
    );
};

export default Nav;
