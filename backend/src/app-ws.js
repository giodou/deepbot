const WebSocket = require('ws');
const jwt = require('jsonwebtoken');
const {isBlacklisted} = require('./controllers/authController')

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

function corsValidation(origin){
    return process.env.CORS_ORIGIN.startsWith(origin);
}

/**
 * Check JWT token and cors to authorize websocket connection
 * @param {*} info 
 * @param {*} callback 
 * @returns true or false (Allowed or not allowed)
 */
function verifyClient(info, callback){
    if(!corsValidation(info.origin)) return callback(false, 401);

    const currentUrl = new URL(`${info.origin}${info.req.url}`);
    const queryParams = currentUrl.searchParams;
    const token = queryParams.get('token');

    if(token){
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECREAT);    
            if(decoded && !isBlacklisted(token)){
                return callback(true);
            }
        } catch (error) {
            console.log(token, error);
        } 
    }

    return callback(true);
}

module.exports = (server) => {
    const wss = new WebSocket.Server({
        server,
        verifyClient
    })

    wss.on('connection', onConnection);
    console.log(`WebSocket server is runnig!`);
    return wss;
}