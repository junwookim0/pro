// reducer를 이용해서 { name: "" }을 만들고
// action.type
// 'reset' : name의 값 '홍길동',
// 'write' : name의 값 payload로 받아온 값

import { useReducer } from "react"

// input 태그를 이용해서 값을 수정해서 받아 올 수 있도록
function reducer(state, action) {
    switch (action.type) {
        case 'reset':
            return { name: "홍길동" };
        case 'write':
            // action.payload = e.target
            return { [action.payload.name]: action.payload.value };
    }
}

const ExReducer = () => {
    const [state, dispatch] = useReducer(reducer, { name: "" })

    const onChange = (e) => {
        dispatch({
            type: 'write',
            payload: e.target
        })
    }
    return (
        <div>
            <h1>{state.name}</h1>
            {/**  state.name = 홍길동 */}
            <button onClick={()=>{dispatch({type:'reset'}) }}>초기값</button>
            { /** 값이 바뀔때 마다 바뀐 값이 state.name */}
            <input type="text" name="name" onChange={onChange}
            value={state.name}
            />
        </div>
    );
}

export default ExReducer;