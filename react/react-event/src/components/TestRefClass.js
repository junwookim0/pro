// TestRefClass 에서 ref 콜백과 React.createRef를 사용해서
// 클릭했을 때
// input의 style의 backgroundColor값을 red로 바꾸세요

import React, { Component } from "react";

class TestRefClass extends Component {
  constructor(props) {
    super(props);
    this.myInput = null;
    this.changeMyInput = () => {
      if (this.myInput) this.myInput.style.backgroundColor = "red";
    };

    this.colorInput = React.createRef();
    this.changeColorInput = () => {
      if (this.colorInput) this.colorInput.current.style.backgroundColor = "red";
    };
  }
  render() {
    return (
      <div>
        <input
          type="text"
          ref={(element) => {
            this.myInput = element;
          }}
        ></input>
        <button onClick={this.changeMyInput}>색을 바꿉니다</button>
        <input type="text" ref={this.colorInput}></input>
        <button onClick={this.changeColorInput}> 색을 바꿉니다</button>
      </div>
    );
  }
}

export default TestRefClass;
