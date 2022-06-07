import { useReducer } from "react";

function reducer(state, action) {
  // action = e.target
  // 이전 state의 값을 스프레드 연산자로 안의 내용을 꺼낸후
  // action.name과 action.value를 통해 새로운 속성값 작성
  return {
    ...state, //name:'ss', nickname:'ss'
    [action.name]: action.value,
    // e.target.name : e.target.value
  };
}
const ReducerComp2 = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: "ss",
    nickname: "ss",
  });

  // 이벤트가 실행될 때 이벤트 객체를 들고와서
  // 현재 실행되는 이벤트 타겟을 dispatch로 넘겨준다.
  const onChange = (e) => {
    dispatch(e.target);
  };

  return (
    <div>
      <h1>Reducer Hook2</h1>
      <input type="text" name="name" onChange={onChange} />
      <input type="text" name="nickname" onChange={onChange} />
      <p>{state.name}</p>
      <p>{state.nickname}</p>
    </div>
  );
};
export default ReducerComp2;
