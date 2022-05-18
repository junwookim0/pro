import { Component } from "react";

class MyLoginT extends Component{
    //클래스형 컴포넌트에서는 함수(return) 대신에 render를 통해 내보낸다
    render() {
        const {login} = this.props;
        return login ? (
                <div>
                    <h1>로그인에 성공했습니다</h1>
                    <p>홍길동</p>
                </div> ) : (
                <div>
                    <h1>로그인이 필요</h1>
                    <p>리액트를 시작하였습니다</p>
                </div>
    )};
}

export default MyLoginT;