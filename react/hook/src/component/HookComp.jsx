import { useState, useEffect } from "react"

const HookComp = () => {
    // useState 는 stateHook 으로 사용된다
    const [count, setCount] = useState(0);
    // stateHook은 여러개 작성할수 있다.
    const [username, setUsername] = useState('홍길동');
    const [date, setDate] = useState(new Date());

    // componentDidMount, componentDidUpdate, 
    // 와 동일하게 사용한다
    useEffect(() => {
        // componentDidMount, componentDidUpdate 와 동일하게 움직임
        document.title = count;
        console.log(count)
        // componentWillUnmount와 동일한 역할
        return ()=>{console.log("언마운트 되었습니다")}
    }, []);
    // 두번째 인수를 작성하지 않았을때, 업데이트와 마운트가 같이 일어난다.
    // 두번째 인수로는 [] 안에 업데이트할 변수 이름을 작성해준다
    // 또는 count===1 와 같이 조건식을 작성해줄수 있다.
    // [] 빈 값으로 두면 처음 mount 할때만 실행이된다

    // 시간을 출력 > useEffect
    // date.toLocaleTimeString() 으로 화면에 출력(HTML)
    // 클래스 형에서 작성한 시간 출력내용을 useEffect로 바꿔서 출력하세요
    const tick = () => {
        setDate(new Date());
    }

    useEffect(() => {
        console.log("마운트가 되었습니다")
        setInterval(() => tick(), 1000);
    },[])

    return (
        <div>

            <h1>StateHook</h1>
            <h1>{ date.toLocaleTimeString() }</h1>
            <h3>{username}</h3>
            <p>{count}</p>
            <button
                onClick={()=>{setCount(count+1)}}
            >
                +1
            </button>
        </div>
    )
}
export default HookComp;

// 자바스크립때
// addEventListener("이벤트", 함수) >콜백 / 함수이름만