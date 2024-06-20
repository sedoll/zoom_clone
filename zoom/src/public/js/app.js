// front에서 back으로 ws 연결
const host = window.location.host
const url = `ws://${host}`
const socket = new WebSocket(url);

// 서버 시작
socket.addEventListener('open', ()=>{
    console.log('서버와 연결')
})

// 서버에서 메세지 수신
socket.addEventListener('message', (msg)=>{
    console.log(`서버에서 받은 메세지 ${msg.data}`);
})

// 서버 종료
socket.addEventListener('close', ()=>{
    console.log('서버 종료')
})

// 서버에 메세지 전송
setTimeout(()=>{
    socket.send('브라우저에서 서버로 보내는 메세지 입니다.')
}, 3000); // 10초 대기 후 전송