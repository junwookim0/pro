import Login from "../../components/login/Login";
import Intro from "../../components/Intro/IntroList";
import IntroView from "../../components/Intro/IntroView";

const FirstMain = () => {
    return (
        <div>
            <IntroView/>
            <Login/>
            <Intro/>
        </div>
    )
};

export default FirstMain;