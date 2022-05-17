
import { Component } from "react";

class EventClass extends Component{
    //props 값은 부모컴포넌트에서 받아오는 값이므로 component에서 미리받아온다
    constructor(props){
        //받아온 값을 super로 전달. 사용할땐 this로 사용
        super(props);
        //클래스형 컴포넌트에서 사용하기위한 constructor에 저장
        this.state = {message:'메시지'};

        this.onClickEvent = this.onClickEvent.bind(this);
        this.onChangMessage = this.onChangMessage.bind(this);
    };
    //사용할 함수내용 :어떠한 함수모습이든 상관없음
    onClickEvent = () => {
        this.setState(()=>({
            message : "메세지가 바뀌었습니다22",
        }));
    };
    onChangMessage = () => {
        this.setState(() => ({
            message : "메시지바뀜메소드2"
        }));
    };
    //클래스형 컴포넌트에서는 함수(return) 대신에 render를 통해 내보낸다
    render() {
        const {name} = this.props;
        const {message} = this.state;
        return(
            <div>
                <h1> {name}</h1>
                <h3>{message}</h3>
                <button
                onClick={this.onClickEvent}
                >message</button>
                <button
                onClick={this.onChangMessage}
                >message2</button>
            </div>
        );  
    }
}

export default EventClass;