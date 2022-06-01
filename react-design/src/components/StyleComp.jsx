// styled-components를 사용하기위해 가져옴
import styled, { css } from "styled-components";
import { lighten } from "polished";

// 컴포넌트의 이름으로 사용
// styled를 통해서 원하는 태그와 컴포넌트 수정
// 태그 : styled.div
// 컴포넌트 : styled(MyButton)
const MyButton = styled.a`
  /*a는 태그이름*/
  /* 렌더될 버튼의 css 수정 */
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: white;
  border: 2px solid white;

  /* scss의 문법 사용가능 */
  &:hover {
    /* lighten darken >  polished 패키지 설치 후 사용 가능*/
    background: ${lighten(0.1, "darkblue")};
  }

  /* primary button
   * props의 primary의 값이 들어왔을때 아래 css 추가*/
  ${(props) =>
    props.primary &&
    css`
      background: white;
      color: black;
    `}
`;

const Stylecomp = ({ primary }) => {
  return <MyButton primary={primary}>style-components로 작성</MyButton>;
};
export default Stylecomp;
