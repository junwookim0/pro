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
            <div className='video_box_main'>
                <video autoPlay muted loop className="introVideo_main">
                    <source src="../../video/file.mp4" type="video/mp4"/>
                </video>
                <div className="signupBtn_div">
                    <button className="signupBtn" onClick={SignUp}>시작하기 Click!</button>
                </div>
                <div className='video_text_main'>
                    <h2 className='video_text_main_h2'>업사이클링(up-cycling)</h2>
                    <h3 className='video_text_main_h3'>업사이클링을 실천하는 여러분의 이야기를 들려주세요!</h3>
                    <button onClick={SignUp}>시작하기 Click!</button>
                </div>
            </div>
            <FirstpageIntro/>
        </div>
    )
};

export default FirstMain;