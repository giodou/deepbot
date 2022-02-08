'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const symbols = await queryInterface.rawSelect('symbols', { where: {}, limit: 1 }, ['symbol']);

    if (!symbols) {
      return queryInterface.bulkInsert('symbols', [{
        symbol: 'BTCBUSD',
        basePrecision: 8,
        quotePrecision: 8,
        minNotional: '0.1',
        minLoteSize: '0.1',
        isFavorite: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      }])
    }

  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('symbols', null, {})
  }
};
