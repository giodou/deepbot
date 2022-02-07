'use strict';

require('dotenv').config();

const bcrypt = require('bcryptjs');
const crypto = require('../src/utils/crypto');

module.exports = {
  async up(queryInterface, Sequelize) {
    const settingsId = await queryInterface.rawSelect('settings', { where: {}, limit: 1 }, ['id']);

    if (!settingsId) {
      return queryInterface.bulkInsert('settings', [{
        email: 'giovane.negocios@gmail.com',
        pass: bcrypt.hashSync('123456'),
        apiUrl: 'https://testnet.binance.vision/api',
        acessKey: 'GTtZqLhzfBvRHngGK6fGVOVOp30nM8XKKebdw6O9WVqCjZ45rffACcf2xbzuwVq8',
        secretKey: crypto.encrypt('E1lZ670DflSDaAFSPoFYh13P3STpJ1ZJLp81bjTqoozbPO5ceEFwHZH6kUm58Icf'),
        createdAt: new Date(),
        updatedAt: new Date(),
      }])
    }

  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('settings', null, {})
  }
};
