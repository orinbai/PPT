import socket from './ws-client';

class ChatApp {
    constructor() {
        // console.log('Hello ES6!');
        socket.init('ws://127.0.0.1:3667');
    }
}
class ChatMessage {
    constructor ({
        message: m,
        user: u='batman',
        timestamp: t=(new Date()).getTime()
    }) {
        this.message = m;
        this.user = u;
        this.timestamp = t;
    }
    serialize() {
        return {
            user: this.user,
            message: this.message,
            timestamp: this.timestamp
        };
    }
}
// new ChatApp();
export default ChatApp;