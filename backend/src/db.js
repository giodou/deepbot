const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    process.env.DB_NAME || 'db_test', 
    process.env.DB_USER || 'root',
    process.env.DB_PWD,
    {
        dialect: process.env.DB_DIALECT || 'mysql',
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || '3306',
        logging: process.env.DB_LOG === 'true'
    });

    module.exports = sequelize;