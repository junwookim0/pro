import { useReducer } from "react"



// useReducer를 사용하기 위해 초기화 하는 값
// useReducer에 {count:0}의 값을 작성해도 상관X
const initState = { count : 0}

// reducer함수를 만들어서 useReducer에서 사용
// useState는 set함수를 수정할수X, useReducer는 원하는 수정 함수를 만들어서 사용 
function reducer(state, action) { 
    // action.type에 따라서 실행될 내용 분류
    switch (action.type) {
        case 'increment':
            // return을 이용해서 case의 실행 내용 종료 및 값 수정
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        case 'reset':
            return {count: action.payload}
        default:
            return state
    }
}

function init(initialCount) {
    return {count: initialCount};
}

const ReduserComp = () => {
    // useState와 동일하게 [값, 함수] 반환값을 받아옴
    // useReducer인수로는 함수와 값(객체)을 가져옴
    const [state, dispatch] = useReducer(reducer, initState);
    return (
        <div>
            <h1>Reduser Hook</h1>
            { /* initState값이 객체이므로 객체의 속성에 접근해서 사용 */}
            <p> Count : {state.count}</p>
            { /* dispatch를 사용해 줄 때 사용할 action.type을 객체형식으로 넣어서 사용 */}
            <button onClick={() => { dispatch({ type: 'decrement' }) }}>-</button>
            <button onClick={()=>{ dispatch({type:'increment'}) }}>+</button>
            <button onClick={()=>{ dispatch({type:'reset', payload:1}) }}>1</button>
            <button onClick={() => { dispatch({type:''}) }}>변화없음</button>
            
        </div>
    );
}
export default ReduserComp;