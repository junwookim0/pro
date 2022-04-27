var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// Vue의 라우터와 연결하기 위한 모듈
// 3. 모든 주소를 vue-router주소로 받음(서버주소 가지 않음)
const connectHistory = require('connect-history-api-fallback');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

//7. ./routes/memo를 가져옴
const memoRouter = require('./routes/memo');
const loginRouter = require('./routes/login');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//connect-history-api-fallback 모듈 사용
app.use(connectHistory());
//2. public의 index.html을 사용하기 위한 연결(이미작성되어있음)
/*  실행순서 
    [1] use(express.static())을 통해서 index.html 실행 
    화면은 계속해서 Vue-router에서 작성된 내용 표시 
*/
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
// 8. 라우터의 위치(/api/memo를 항상 가지는 라우터)와 이름을 연결 
app.use('/api/memo', memoRouter);
app.use('/api/login', loginRouter);


module.exports = app;
