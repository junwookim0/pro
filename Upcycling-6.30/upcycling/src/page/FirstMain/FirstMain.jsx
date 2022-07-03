/*처음 주소로 들어왔을때 보이는 첫페이지 "/" 
로그인 되어있으면 /home 으로 넘어감*/
import Login from "../../components/login/Login";
import FirstpageIntro from "../../components/Intro/FirstpageIntro";
import "./firstMain.css"
import { useNavigate } from "react-router-dom";


const FirstMain = () => {

    const navigate = useNavigate();
    function SignUp() {
        navigate("/SignUp");
    };

    return (
        <div>
            <Login/>
            <div className='first_page_intro_div'>
                <h1 className='first_page_intro_h1'>업사이클링(up-cycling)</h1>
                <h2>업타운에 오신 여러분을 환영합니다</h2>
                <h3 className='first_page_intro_h3'>
                    업타운은 업사이클링을 알리기 위한 커뮤니티 입니다 <br/>
                    여러분의 업사이클링 경험과 아이디어를 공유하고<br/>
                    마켓을 통해 다양한 업사이클링 제품을 만나보세요.    
                </h3>
                <button onClick={SignUp}>시작하기</button>
            </div>
            <FirstpageIntro/>
        </div>
    )
};

export default FirstMain;