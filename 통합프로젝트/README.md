# 순서
```
frontend 만들고
backend 만들기
npm install express-generator -g  
express --no-view (생성폴더명)  or express --view=ejs (생성폴더명)

frontend 폴더에서 
vue.config.js 파일 생성
const path = require('path')

module.exports = {
    //build 파일 위치를 backend의 public에 생성
    outputDir : path.resolve(__dirname, '../backend/public'),
};
으로 연결
npm run build 해서 연결

backend 폴더에서 
npn install 
SET DEBUG=backend:* & npm start 
으로 실행 

npm install connect-history-api-fallback -save router 연결 
backend router index.js 에서 public를 통해 html을 불러오도록 함 

frontend 에서 npm install axios --save

```