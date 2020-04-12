'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('usuario', 'atividadeId');
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.addColumn('usuario', 'atividadeId', Sequelize.INTEGER);
  }
};
