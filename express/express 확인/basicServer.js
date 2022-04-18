//express 모듈을 사용해서 서버 생성
//node에서 모듈을 가져올떄 require로 가져옴
const { response } = require("express");
const express = require("express");

//서버 생성
//express(); 함수(생성자)를 통해 생성
//서버의 기능을 가진 객체 생성 
//: 포트를 열어서 외부에서 접근가능하게 함
// : 요청이 왔을때 함수 실행 > 화면 출력 , 기능실행 
const app = express();

//request 이벤트 리스너 설정ㅔ
app.use((request, response) => {
  response.send("<h1>Hello express</h1>");
});

//서버를 실행
app.listen(8080, () => {
  console.log("Server running at http://127.0.0.1:8080");
});
