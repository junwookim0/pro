import { useReducer } from "react";



function reducer(state, action){
    switch(action.type){
        case 'reset':
            return {name : "홍길동"};
        case 'write':
            return /*{name : action.payload=e.target};*/ {[action.payload.name]: action.payload.value};
        default:
            throw new Error();
    };
}

function ExReducer() {
    const [state, dispatch] = useReducer(reducer,{
        name : ""
    });

    const onchange =(e) => {
        dispatch({type:'write', payload : e.target})  /*e.target.value*/ 
    }
    return(
        <div>
            <input type="text" name="name" onChange={onchange} value={state.name}/>
            <button onClick={()=> dispatch({type: 'reset'})}>기본값</button>
            <p>{state.name}</p>
        </div>
    );
}
export default ExReducer;