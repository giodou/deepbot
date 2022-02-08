const Sequelize = require('sequelize')
const database = require('../db')

const symbolModel = database.define('symbol', {
    symbol: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    },
    basePrecision: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    quotePrecision: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    minNotional: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    minLoteSize: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    isFavorite: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
        allowNull: false,
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
});

module.exports = symbolModel;