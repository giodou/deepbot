const WebSocket = require('ws');

function onMessage(data){
    console.log(`onMessage: ${data}`);
}

function onError(err){
    console.log(`onError: ${err.message}`)
}

function onConnection(ws, req){
    ws.on('message', onMessage);
    ws.on('error', onError)
    console.log(`onConnection`);
}

module.exports = (server) => {
    const wss = new WebSocket.Server({
        server
    })

    wss.on('connection', onConnection);
    console.log(`WebSocket server is runnig!`);
    return wss;
}