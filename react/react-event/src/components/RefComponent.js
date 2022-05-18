// TestRefClass  컴포넌트를 들고와서 현재컴포넌트에서 제어

import { Component } from "react";
import TestRefClass from "./TestRefClass";

class RefComponent extends Component {
  constructor(props) {
    super(props);
    this.componentRef = null;
    this.changeAll = () => {
      // 가져온 ref 값 확인
      console.log(this.componentRef);
      console.dir(this.componentRef);
      // 가져온 컴포넌트의 메소드에 접근해서 사용
      this.componentRef.changeColorInput();
      this.componentRef.changeMyInput();
    };
  }

  render() {
    return (
      <div>
        <TestRefClass
          // ref를 사용해서 엘리먼트확인
          // 콜백함수를 ref안에 작성
          ref={(element) => {
            this.componentRef = element;
          }}
        />
        <button onClick={this.changeAll}>모두 바꾸기</button>
      </div>
    );
  }
}
export default RefComponent;
