// 미들웨어를 확인하기 위한 서버
const express = require("express");
// morgan 모듈 가져오기 : 클라이언트의 접속 현황을 로그로출력
const morgan = require("morgan");
// cookie-parser모듈 가져오기 : 쿠키를 가져오거나 생성후 보낼 수 있다
const cookieParser = require("cookie-parser");
// body-parser모듈 가져오기 : request의 body값을  받아 온다 
const bodyParser = require("body-parser");

const app = express();

//app.use를 통해 morgan미들웨어 사용
app.use(morgan("combined"));
// app.use를 통해 cookieParser미들웨어사용
app.use(cookieParser());
// app.use를 통해 bodyParser 미들웨어 사용
// MIME type 중 application/x-www-form-urlencoded타입 파싱(가져옴)
app.use(bodyParser.urlencoded({ extended: false }));
// application/json 타입 파싱
app.use(bodyParser.json());

app.get("/", (request, response) => {
  // cookieParser를 이용하여 request에 있는 cookies를 가져올수있다
    console.log("Cookies : ", request.cookies);
    const template = `
        <form method="post" action="/post">
            <p>이름을 작성해주세요</p>
            <input type="text" name="name" >
            <input type="submit" value="전송">
        </form>
        `;
    response.send(template);
});

// nickname을 전달 받는 /name url을 가진 Get과 Post를 작성하세요
// Get은 nickname을 입력받음
// Post는 bodyParser를 이용하여 출력
app.get("/name", (request, response) => {
    const template = `
        <form method="post">
            <p>닉네임을입력해주세요</p>
            <input type="text" name="nickname" >
            <input type="submit" value="전송">
        </form>
    `;
    response.send(template);
});

app.post("/name", (request, response) => {
    const nickname = request.body.nickname;
    response.send(`<h1>${nickname}님 환영합니다</h1>`);
});

app.get("/get", (request, response) => {
  //쿠키전달
  // response.cookie 를 통해 쿠키의 이름과 값, 옵션 전달
    response.cookie("cookiename", "쿠키값", { httpOnly: true, maxAge: 360000 }); //6분
    response.send("쿠키를 보냄");
});

// 포스트맨을 통해서 POST 메소드 실행확인
app.post("/a", (request, response) => {
    response.send("<h1>post</h1>");
});

// bodyParser를 통한 body 값 가져오기
app.post("/post", (request, response) => {
    const name = request.body.name;
    response.send(`<h1>${name} post</h1>`);
});

app.listen(8080, () => {
    console.log("Server running at http://127.0.0.1:8080");
});