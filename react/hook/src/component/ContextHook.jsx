import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function ContextHook() {
    return (
        <div>
        <ThemedButton />
        </div>
    );
    }

    class ThemedButton extends React.Component {
    // 현재 선택된 테마 값을 읽기 위해 contextType을 지정합니다.
    // React는 가장 가까이 있는 테마 Provider를 찾아 그 값을 사용할 것입니다.
    // 이 예시에서 현재 선택된 테마는 dark입니다.
    static contextType = ThemeContext;
    // 클래스에서 Context 사용
    render() {
        return (
        <div>
            <Button theme={this.context.text} />
            <h3>ThemeContext에서 받아온 값 : {this.context.text}</h3>
        </div>
        );
    }
}

const Button = (props) => {
  // 함수형 컴포넌트에서 Context를 가져오는 방법
    const themeContext = useContext(ThemeContext);
    return (
        <div>
        <h1>{props.theme}</h1>
        <h3>{themeContext.text}</h3>
        </div>
    );
};

export default ContextHook;