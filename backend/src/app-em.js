const crypto = require('./utils/crypto');
const WebSocket = require('ws');

module.exports = (settings, wss) => {

    if (!settings)
        throw new Error(`Can't find any settings to start exchange monitor`);

    settings.secretKey = crypto.decrypt(settings.secretKey);
    const exchange = require('./utils/exchange')(settings);

    exchange.miniTickerStream((markets) => {
        if (!wss || !wss.clients) return;
        wss.clients.forEach(client => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(JSON.stringify({ miniTicker: markets }))
            }
        });
    })

    let book = [];
    exchange.bookStream(order => {
        if (!wss || !wss.clients) return;

        if(book.length === 200){
            wss.clients.forEach(client => {
                if (client.readyState === WebSocket.OPEN) {
                    client.send(JSON.stringify({ book }))
                }
            });
            book = [];
        }else book.push(order);
        
    })

    console.log('App exchange monitor is running!')
}