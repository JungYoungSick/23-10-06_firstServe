// 서버 만들기

const http = require('http');
//이미 모듈이 깔려 있다는 전제로 작성.

http.createServer(function(request, response){
let writeHeadObject = {
  'Content-Type': 'application/json'
}

  response.writeHead(200, writeHeadObject);
  response.end("hello")


}).listen(8080);
//매개변수는 콜백 함수만 받는다. 읽기 좋게 구분해서 써주도록 하자.

