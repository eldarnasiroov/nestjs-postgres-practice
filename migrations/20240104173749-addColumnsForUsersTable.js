'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'Users',
      'banned',
     Sequelize.BOOLEAN
    );

    await queryInterface.addColumn(
      'Users',
      'banReason',
     Sequelize.STRING
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn(
      'Users',
      'banned'
    );

    await queryInterface.removeColumn(
      'Users',
      'banReason'
    );
  }
};
