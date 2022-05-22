import { useReducer } from "react"

function reducer(state, action){
    return {
        ...state,
        [action.name]: action.value
    }
    
}

const ReducerComp2 = () => {
    const [state , dispatch] = useReducer(reducer,{
        name : '',
        nickname : '',
    })
const onchange = (e) => {
        dispatch(e.target)
}
    return(
        <div>
            <h1>Reducer Hook</h1>
            <input type="text" name="name" onChange={onchange}/>
            <input type="text" name="nickname" onChange={onchange}/>
            <p>{state.name}</p>
            <p>{state.nickname}</p>
        </div>
    )
}
export default ReducerComp2;