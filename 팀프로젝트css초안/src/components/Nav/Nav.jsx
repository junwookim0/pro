import {  useNavigate } from "react-router-dom";
import { useState , useEffect} from "react";
import './Nav.css'
//nav바 

const Nav = () => {
    const [scrolled, setScrolled] = useState(false);
    useEffect(()=>{
        const handleScroll = ()=>{
            if(!scrolled && window.scrollY >30){
                setScrolled(true);
            }else if(scrolled && window.scrollY <=30){
                setScrolled(false);
            }
        };
        window.addEventListener('scroll',handleScroll);
        return()=>{
            window.removeEventListener('scroll', handleScroll);
        };
    },[scrolled]);
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
            <header className={scrolled ? 'fix-container scrolled' : 'fix-container'}>
                <nav className="navbar">
                    <div className="navbar_logo" onClick={goHome}>
                        <span className="logo_text">: UPTOWN</span>
                    </div>
                    <ul className="navbar_menu">
                        <li onClick={goIntro}>Information</li>
                        <li onClick={goEvent}>Event</li>
                        <li onClick={goReview}>Review</li>
                        <li>Sale</li>
                    </ul>
                    <ul className="navbar_toggleBtn">
                        <li>MyPage</li>
                        <li>Logout</li>
                    </ul>
                </nav>
            </header>
    </div>
    );
};

export default Nav;
