import Login from "../../components/login/Login";
import FirstpageIntro from "../../components/Intro/FirstpageIntro";
import IntroView from "../../components/Intro/IntroView";

const FirstMain = () => {
    return (
        <div>
            <IntroView/>
            <Login/>
            <FirstpageIntro/>
        </div>
    )
};

export default FirstMain;