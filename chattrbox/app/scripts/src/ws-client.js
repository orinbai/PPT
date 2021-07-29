// 给WebSocket连接声明一个变量
let socket;

function init(url) {
    socket = new WebSocket(url);
    console.log('connecting...');
}

// 避免硬编码其他模块对于连接进行的操作，便于ws-client.js更加灵活可复用
function registerOpenHandler(handlerFunction) {
    socket.onopen = () => {
        console.log('open');
        handlerFunction();
    };
}

// 处理WebSocket接收到的消息。
function registerMessageHandler(handlerFunction) {
    socket.onmessage = (e) => {
        console.log('message', e.data);
        let data = JSON.parse(e.data);
        handlerFunction(data);
    }
};

export default {
    init,
}