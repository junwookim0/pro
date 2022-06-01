import "../util/test.scss";
import classNames from "classnames";

// 구조화 할당으로 props 객체 값 받아옴
// 어떤 값이 들어올지 모를 때 ...rest를 통해서 한번에 받아옴 > 객체형식으로들어옴
const TestComp = ({ children, size, color, ...rest }) => {
  // props을 통해 size를 받아옴
  // className="MyButton large"
  // 배열의 메서드의 join사용하면
  // 쉼표(,)를 안의 값('') 문자열로 바꿔서 문자열로 반환
  //{["MyButton", props.size, "pink"].join(" ")}

  // classNames를 사용하여 받아옴
  // 들어온 rest를 사용하기 위해서 스프레드 연산자(...)을 이용해서 추가
  // onClick이벤트를 사용하기 위해서 {}를 통해 자바스트립트 형식으로 받아온다.

  // rest 사용법이 헷갈리면 onClick을 속성값으로 가져와서 확인해보기
  // props값 : onClick,  사용법 : onClick={onClick} 으로 사용
  return (
    <button className={classNames("MyButton", size, color)} {...rest} onMouseOver={() => console.log(rest)}>
      {children}
    </button>
  );
};

TestComp.defaultProps = {
  color: "blue",
};
export default TestComp;
