
//미들웨어를 확인하기 위한 서버
const { response } = require("express");
const express = require("express");
const morgan = require("morgan");
// npm install morgan

const app = express();
// cookie-parser모듈 가져오기  npm install cookie-parser
const cookieParser = require("cookie-parser");
//body-parser모듈 가져오기
const bodyParser = require("body-parser");

//use를 통해 미들웨어 사용
app.use(morgan('combined'));
//use를 통해 쿠키등록
app.use(cookieParser());
//use를 통해 body-parser 등록
app.use(bodyParser.urlencoded({ extended : false }));


app.get("/", (request, response) => {
    //cookieParser를 이용하여 request에 있는 coookies를 가져올수있다
    console.log('Cookies : ', request.cookies);
    const template = `
    <form method="post">
        <p>이름을 작성해 주세요 </p>
        <input type="text" name="name">
        <input type="submit" value="전송">
    </form>

    `;
    response.send(template);
});
app.get("/name", (request, response) => {
    //cookieParser를 이용하여 request에 있는 coookies를 가져올수있다
    console.log('Cookies : ', request.cookies);
    const template = `
    
    <form method="post" action="name">
        <p>nickname을 작성해 주세요 </p>
        <input type="text" name="nickname">
        <input type="submit" value="전송">
    </form>

    `;
    response.send(template);
});

//nickname을 전달 받는 /name url 을 가진 get과 post 작성
app.post("/name", (request,response) => {
    const nickname = request.body.nickname;
    response.send(`<h1> ${nickname} 입니다 </h1>`)
})

app.get("/get", (request, response) => {
    //쿠키전달
    //response.cookies 를 통해 쿠키의 이름과 값 , 옵션 전달
    response.cookies('cookiesname','쿠키값',{ maxAge :  360000 , httpOnly : true });
    response.send('쿠키를보냄');

});

app.post("/a",(request, response) => {
    response.send("<h1> post </h1>")
})
//bodyParser를 통한 body 값 가져오기 
//주소가 /post  get form method 에 action="/post" 주소를추가
// action을 추가해주지 않으면 기본적인 '/'주소로 전달
app.post("/" ,(request, response) => {
    const name = request.body.name;
    response.send(`<h1> ${name} post </h1>`);
})

//서버를 실행
app.listen(8080, () => {
    console.log("Server running at http://127.0.0.1:8080");
});
