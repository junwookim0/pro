import Login from "../../components/login/Login";
import FirstpageIntro from "../../components/Intro/FirstpageIntro";
import IntroView from "../../components/Intro/IntroView";
import Firstpagelogo from "../../components/logoimage/firstpagelogo";

const FirstMain = () => {
    
    return (
            <div>
                <IntroView/>
                <Login/>
                <FirstpageIntro/>
                <Firstpagelogo/>
            </div>
    )
};

export default FirstMain;