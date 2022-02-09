const symbolsRepository = require('../repositories/symbolsRepository');

async function getSymbols(req, res, next){
    const symbols = await symbolsRepository.getSymbols();
    res.json(symbols);
}

async function getSymbol(req, res, next){
    const symbol = req.params.symbol;
    const symbolData = await symbolsRepository.getSymbol(symbol);
    res.json(symbolData);
}

async function updateSymbol(req, res, next){
    const symbol = req.params.symbol;
    const newSymbol = req.body;

    await symbolsRepository.updateSymbol(symbol, newSymbol);

    res.sendStatus(200);
}

function syncSimbols(req, res, next){
    res.sendStatus(200);
}

module.exports = {
    getSymbol,
    getSymbols,
    updateSymbol,
    syncSimbols
}