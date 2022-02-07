'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('settings', {
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
              secretKey: Sequelize.STRING,
              createdAt: Sequelize.DATE,
              updatedAt: Sequelize.DATE,
          }
    )
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('settings');
  }
};
