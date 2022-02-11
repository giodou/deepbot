const symbolModel = require('../models/symbolModel');

function getSymbols() {
    return symbolModel.findAll();
}

function getSymbol(symbol) {
    return symbolModel.findOne({ where: { symbol } });
}

async function updateSymbol(symbol, newSymbol) {
    const currentSymbol = await getSymbol(symbol);
    
    if (newSymbol.basePrecision && currentSymbol.basePrecision !== newSymbol.basePrecision)
        currentSymbol.basePrecision = newSymbol.basePrecision;

    if (newSymbol.quotePrecision && currentSymbol.quotePrecision !== newSymbol.quotePrecision)
        currentSymbol.quotePrecision = newSymbol.quotePrecision;

    if (newSymbol.minNotional && currentSymbol.minNotional !== newSymbol.minNotional)
        currentSymbol.minNotional = newSymbol.minNotional;

    if (newSymbol.minLoteSize && currentSymbol.minLoteSize !== newSymbol.minLoteSize)
        currentSymbol.minLoteSize = newSymbol.minLoteSize;

    if (newSymbol.isFavorite !== null && newSymbol.isFavorite !== undefined 
        && currentSymbol.isFavorite !== newSymbol.isFavorite)
        currentSymbol.isFavorite = newSymbol.isFavorite;

    await currentSymbol.save();
}

async function deleteAll(){
    return symbolModel.destroy({truncate: true});
}

async function bulkInsert(symbols){
    return symbolModel.bulkCreate(symbols);
}

module.exports = {
    getSymbol,
    getSymbols,
    updateSymbol,
    deleteAll,
    bulkInsert
}