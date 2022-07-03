import {  useNavigate ,Outlet } from "react-router-dom";
import { useState , useEffect} from "react";
import { SignOut } from "../../firebase";
import Hamburger from 'hamburger-react'
import './Nav.css'

const Nav = () => {
    const Swal = require('sweetalert2');
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setOpen] = useState(false);
    

    //scroll 30 기준으로 trun fasle 
    useEffect(()=>{
        const handleScroll = ()=>{
            if(!scrolled && window.scrollY >30){
                setScrolled(true);
                setOpen(false);
            }else if(scrolled && window.scrollY <=30){
                setScrolled(false);
            }
        };
        window.addEventListener('scroll',handleScroll);
        return()=>{
            window.removeEventListener('scroll', handleScroll);
        };
    },[scrolled]);

    useEffect(()=>{
        const handleScrollham = ()=>{
            if(!scrolled || window.scrollY >30){
                setOpen(false);
            }
        };
        window.addEventListener('scroll',handleScrollham);
        return()=>{
            window.removeEventListener('scroll', handleScrollham);
        };
    },[scrolled]);
// nav hamburger button click
    const clickb = ()=>{
            if(!isOpen){
                setOpen(true);
            }else if(isOpen){
                setOpen(false);
            }
    };
    
    // useNavigate를 사용하여 원하는 주소로 이동할수 있다.
    const navigate = useNavigate();
    
    //navicate를 사용하여 mypage로 이동하세요
    const goHome = () => {
        navigate("/home");
    };
    const goContents = () => {
        navigate("/about");
    };
    const goEvent = () => {
        navigate("/event");
    };
    const goReview = () => {
        navigate("/reviews");
    };
    const goDeal = () => {
        navigate("/deals");
    };
    const goMypage = () => {
        navigate("/mypage");
    }
    //로그아웃 함수 클릭시 comfirm으로 로그아웃 선택시  swal로 alert 표시
    const handleLogout = async () => {
        await SignOut();
        const swalButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
                },
                buttonsStyling: false
            })
        swalButtons.fire({
            icon: 'success',
            title: '아쉬워요..',
            text: '성공적으로 로그아웃 하셨습니다',
            footer: '<a href="./signin">LOGIN 하러가기</a>'
        })
        navigate("/");
    };
    //로그아웃 함수 클릭시 swal로 comfirm 표시
    const LogoutComfirm = () => {
        const swalButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
                },
                buttonsStyling: false
            })
            swalButtons.fire({
                title: '로그아웃 하시겠습니까?',
                text: "로그아웃 하시면 첫페이지로 이동 합니다",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: '예',
                cancelButtonText: '아니요',
                reverseButtons: true
            }).then((result) => {
                if (result.isConfirmed) {
                    handleLogout();
                }
            })
    }
    return (
        <div>
            {/*스크롤 css 클래스명 true false 동작 */}
            <header className={scrolled ? 'fix-container scrolled' : 'fix-container'}>
                <nav className="navbar">
                    <div className="navbar_logo" onClick={goHome}>
                        <span 
                        className={scrolled ? 'logo_text scrolled' : 'logo_text'}>: UPTOWN</span>
                    </div>
                    {/*hamburger btn 클릭시 오픈되는 메뉴 (클래스명으로)*/}
                    <ul className={isOpen ? 'navbar_menu active' : 'navbar_menu'}>
                        <li onClick={goHome}>Home</li>
                        <li onClick={goContents}>About</li>
                        <li onClick={goEvent}>Event</li>
                        <li onClick={goReview}>Review</li>
                        <li onClick={goDeal}>Market</li>
                    </ul>
                    {/*hamburger btn 클릭시 오픈되는 메뉴 (클래스명으로)*/}
                    <ul className={isOpen ? 'navbar_property active' : 'navbar_property'}>
                        <li  onClick={goMypage}>
                            MyPage
                        </li>
                        <li onClick={LogoutComfirm}>Logout</li>
                    </ul>
                    <div className="Hamburger">{/*버튼 클릭시 navbar on/off*/}
                        <Hamburger toggled={isOpen} toggle={clickb}/>
                    </div>
                    <div className="site_msg_bar">
                        <div className="site_msg">
                        Upcycling Ideas With 'UPTOWN'
                        </div>
                    </div>
                </nav> 
            </header>
            <main>
                <Outlet></Outlet>
            </main>
    </div>
    );
};
export default Nav;