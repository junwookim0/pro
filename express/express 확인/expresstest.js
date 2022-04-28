const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const app = express();

//app.use를 통해 morgan미들웨어 사용
app.use(morgan("combined"));

app.use(bodyParser.urlencoded({ extended: false }));
// application/json 타입 파싱
app.use(bodyParser.json());

app.get("/", (request, response) => {
    const template = `
        <form method="post" action="/re">
            <p>숫자를 입력해주세요</p>
            <input type="number" name="firstn">
            <input type="number" name="secondn">
            <input type="submit" value="전송">
        </form>
        `;
    response.send(template);
});
// bodyParser를 통한 body 값 가져오기
app.post("/re", (request, response) => {
    const firstn = request.body.firstn;
    const secondn = request.body.secondn;

    response.send(`<h1>${firstn} + ${secondn} = ${Number(firstn)+Number(secondn)} 입니다</h1>`);
});

app.listen(8080, () => {
    console.log("Server running at http://127.0.0.1:8080");
});