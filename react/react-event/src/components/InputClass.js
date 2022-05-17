//클래스형 컴포넌트
import { Component } from "react";
//input태그의 값을 받아와서 수정하는 컴포넌트
class InputClass extends Component{
    //props 값은 부모컴포넌트에서 받아오는 값이므로 component에서 미리받아온다
    constructor(props){
        super(props);
        this.state = {message:'',user:''};
        this.inputChange = this.inputChange.bind(this);
        this.Dblclick = this.Dblclick.bind(this);
    };
    //input 값이 바뀔때마다 값을 state에 넣어주는 메소드
    inputChange (e) {
        this.setState(()=>({
            [e.target.name] : e.target.value
        }))
    };
    Dblclick = () => {
        alert(this.state.message+","+this.state.user)
    };
    //버튼을 더블 클릭했을때, message와 user값을 alert으로 출력
    render() {
        const {message,user} = this.state
        return(
            <div>
                <h1>이벤트 연습</h1>
                <input 
                type="text"
                name="message"
                placeholder="아무거나 입력하세요"
                value={message}
                onChange={(e) => {
                    this.setState(()=>({
                        //객체 형태 {키 : 값}
                        //키를 [] 감싸면 가르키는 실제값이 사용
                        [e.target.name] : e.target.value
                    }))
                }}
                >
                </input>
                <button name="message" onDoubleClick={this.Dblclick}>메세지</button>
                <input
                type="text"
                name="user"
                onChange={this.inputChange}
                ></input>
                <button name="user" onDoubleClick={this.Dblclick}>유저값</button>
                <h2>{message}</h2>
                <h2>{user}</h2>
            </div>
        );  
    }
}

export default InputClass;