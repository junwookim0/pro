import { useNavigate } from "react-router-dom";
import { useState , useEffect} from "react";

import './Login.css'


function Login() {
    
    const navigate = useNavigate();
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
    function SignIn() {
            navigate("/SignIn");
        };

    return (
        <div>
            <div className={scrolled ? 'first_nav_div scrolled' : 'first_nav_div'}>
                <header className="first_nav__Container"> 
                    <div className="first_nav__logo">
                        <span className="first_nav_text">: UPTOWN</span>
                    </div>
                    <div className="first_nav_loginbtn">
                        <button onClick={SignIn}>로그인</button>
                    </div>
                </header>
            </div>
        </div>
    );
}

export default Login;