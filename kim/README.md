# 통합프로젝트 실행하는 방법

## Project setup

```
cd frontend
npm install
cd ..
cd backend
npm istall
```

### 서버 실행 (반드시 backend 폴더에서 실행, 처음 한번은 SET DEBUG=backend:\* & npm start 실행할 것)

```
SET DEBUG=backend:* & npm start
//or
node ./bin/www
//or
nodemon ./bin/www
```

### frontend의 폴더를 수정했을때, build(반드시 frontend 폴더에서 실행)

```
npm run build
```

### Lints and fixes files

```
npm run lint
```
