const Binance = require('node-binance-api');

module.exports = (settings) => {
    
    if(!settings) throw new Error('The settings object is required to connect on Binance');

    const binance = new Binance({
        API_KEY: settings.acessKey,
        APISECRET: settings.secretKey,
        urls: {
            base: settings.apiUrl.endsWith('/') ? settings.apiUrl : `${settings.apiUrl}/`
        }
    });

    function exchangeInfo(){
        return binance.exchangeInfo();
    }

    return {
        exchangeInfo
    } 

}