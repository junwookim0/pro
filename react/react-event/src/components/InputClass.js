// 클래스형 컴포넌트
import { Component } from "react";

// input태그의 값을 받아와서 수정하는 컴포넌트
class InputClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "메시지",
      user: "유저",
    };
    this.inputChange = this.inputChange.bind(this);
    //this.showMessage = this.showMessage.bind(this);
  }

  //input 값이 바뀔때마다 값을 state에 넣어주는 메서드
  inputChange(e) {
    this.setState(() => ({
      [e.target.name]: e.target.value,
    }));
  }

  // 버튼을 더블클릭했을때, onDoubleClick
  // message와 user값을 alert으로 출력하는 메서드
  // state의 message와 user에 값을 넣어준 후 더블클릭

  // 화살표 함수로 작성할시 bind로 this를 연결해주지않아도 된다
  showMessage = () => {
    alert(this.state.message + ", " + this.state.user);
  };

  render() {
    const { message, user } = this.state;
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력하세요"
          value={message}
          onChange={(e) => {
            this.setState(() => ({
              // 객체 형태 {키 : 값}
              // 키를 [] 감싸면 가리키는 실제값이 사용
              [e.target.name]: e.target.value, // message : "sdd"(입력된 무언가)
            }));
          }}
        ></input>
        <input type="text" name="user" onChange={this.inputChange}></input>
        <h2>{message}</h2>
        <h2>{user}</h2>

        <button onDoubleClick={this.showMessage}>버튼입니다</button>
      </div>
    );
  }
}
export default InputClass;
