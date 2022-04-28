
const path = require('path')

module.exports = {
    //1. npm run build 위치 설정  백엔드 서버를 사용하기 위해 
    //build 파일 위치를 backend의 public에 생성
    outputDir : path.resolve(__dirname, '../backend/public'),
    // 9. api로 주소가 전달되면 전부 백엔드로 넘겨준다.
    // history를 사용해서 뷰라우터로만 전달되는 주소를 proxy를 사용해서 백엔드 주소로 전달
    devServer: {
        proxyTable : {
            "/api" : {
                target : 'http://localhost:3000/api',
                changeOrigin: true,
                pathRewrite : {
                    "^/api" : "",
                }
            }
        },
    },
};