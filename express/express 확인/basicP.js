
const { response } = require("express");
const express = require("express");


const app = express();
app.use(express.static("public"));

app.get("/", (request, response) => {
    //다양한 파일을 public 포덜에 넣어서 사용가능 
    const template = 
    `
    <h1> Hello express </h1>
    <a href="/정적파일.html"> 파일입니다</a>
    <a href="/bot.jpg"> 사진입니다</a>
    <a href="/openAPI_docs_busan-food.pdf">pdf입니다<a>
    <a href="/public.zip">zip입니다<a>
    
    `;
    response.send(template);
});

//서버를 실행
app.listen(8080, () => {
  console.log("Server running at http://127.0.0.1:8080");
});
