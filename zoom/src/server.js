import http from "http"; // node.js 포함 라이브러리
import ws from "ws";
import express from "express"; // express
import path from 'path'; // path 경로

const port = 3000
const url = `http://localhost:${port}`
const __dirname = path.resolve();
const app = express();

app.set('view engine', 'pug');
app.set('views', __dirname + '/src/views');
app.use('/public', express.static(__dirname + '/src/public'));
app.get('/', (req, res)=> res.render('home'));

const handleListen = () => console.log('실행 : ' + url);
// app.listen(port, handleLister);

// ws
// 같은 서버에 http, ws를 같이 실행하는 방법
const server = http.createServer(app); // http 서버생성
const wss = new ws.Server({server}); // http 서버 위에 webSocket 서버 생성, 파라미터는 꼭 않 넣어도 상관없음

wss.on('connection', (socket)=>{
    console.log('클라이언트와 연결')
    socket.on('close', ()=>{
        console.log('브라우저 연결 종료')
    })
    socket.on('message', (msg)=>{
        console.log(msg.toString());
    })
    socket.send('Hello')
})

server.listen(port, handleListen);