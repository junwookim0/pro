// input 태그로 숫자값을 입력받으면 > inputnum
// 추가 버튼을 눌렀을때, li 태그에 추가됨 > number 배열
// number 배열의 합을 h3태그로 출력

import { useState, useMemo, useCallback } from "react";

const MemoHook = () => {
  const [inputnum, setInputnum] = useState(0);
  const [number, setNumber] = useState([10, 6]);

  const onChange = useCallback((e) => {
    setInputnum(e.target.value);
  }, []); // 콜백함수를 사용해서 처음 렌더링 할때만 함수 생성
  // 화살표 함수는 익명함수중 하나(한번 사용하고 버림)
  // 이벤트에서 사용되는 익명함수는 이벤트가 실행될때마다 함수를 만듦
  // 동일한 일을 하는 함수는 재사용하기 위해서 Callback사용
  // *사용하는 값 또는 메서드가 바뀌지 않을때 렌더할 필요가 없다

  const addNum = useCallback(() => {
    setNumber([...number, parseInt(inputnum)]);
    setInputnum(0);
  }, [inputnum, number]);
  // 콜백함수를 사용해서 inputnum과 number값이 바뀔때만 함수 렌더(생성)
  // *사용하는 값이 바뀔때만 렌더해서 사용

  const allSum = (list) => {
    // useMemo를 쓰지않아 useState값이 바뀔때마다 호출
    // for문을 사용해서 더함, 배열의 reduce((a,b)=>a+b)메소드를 이용해서 더함
    // for (let i = 0; i < 10; i++) { 실행할 내용 }
    // for ( m in list ) {} list의 in을 사용해서 반복하며 인덱스값 출력
    // for (n of list){} list의 of를 사용해서 요소값을 출력
    console.log("더하는 중입니다");
    return list.reduce((a, b) => a + b);
  };

  //useMemo를 사용할 변수,  특정 변수의 값이 바뀔 때 실행
  const sum = useMemo(() => allSum(number), [number]);

  return (
    <div>
      <h1>MemoHook</h1>
      <input type="number" onChange={onChange} value={inputnum} />
      <button onClick={addNum}>추가</button>
      {/**  메소드의 리턴값을 보여줌 */}
      <h3>더한 값 : {sum}</h3>
      <ul>
        {number.map((n, i) => (
          <li key={i}>{n}</li>
        ))}
      </ul>
    </div>
  );
};

export default MemoHook;
