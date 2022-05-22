import { Component } from "react";

class LifeComp extends Component{
    constructor(props){
        super(props);
        this.state = {
            students : [ 
                {id:1 , name : "lifeComp"}
            ],
            date : new Date(),
            inputText : ""
        }
    }
    //함수를 부를 때 마다 다시 값을 호출
    tick = () => {
        this.setState({date : new Date()})
    }
    changeText = (e) => this.setState({ [e.target.name]: e.target.value });

    componentDidMount() {
        console.log("마운트가 되었습니다");
        //state에 작성하지않아도 임의로 'timerID'값이 들어감 
        this.timerId = setInterval(()=>this.tick(), 1000);
    }
    componentDidUpdate() {
        console.log("업데이트가 되었습니다");    
    }
    componentWillUnmount() {
        console.log("어마운트가 되었습니다");  
        clearInterval(this.timerId);
    };


    render(){
        const name = "라이프 사이클 확인"
        return( 
            <div>
                <h1>{name}</h1>
                <h2>{this.state.date.toLocaleTimeString()}</h2>
                <input type="text" name="inputText" onChange={this.changeText}></input>
                <button onClick={() => {
                    const nextStudent = this.state.students.concat({
                        id: this.state.students.length+1,
                        name : this.state.inputText
                    })
                    this.setState({students:nextStudent})
                }}>값 추가</button>
                <ul>
                    {
                        this.state.students.map((student) => (
                            <li key={student.id}>{student.id} {student.name} </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}
export default LifeComp;