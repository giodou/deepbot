const Sequelize = require('sequelize')
const database = require('../db')

const settingsModel = database.define('settings', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    email: {
        type: Sequelize.STRING(80),
        allowNull: false,
    },
    pass: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    apiUrl: Sequelize.STRING,
    acessKey: Sequelize.STRING(80),
    secretKey: Sequelize.STRING(80),
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
}, {
    indexes: [{
        fields: ['email'],
        unique: true
    }]
});

module.exports = settingsModel;