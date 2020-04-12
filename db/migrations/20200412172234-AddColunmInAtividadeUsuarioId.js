'use strict';

module.exports = {
  
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('atividade', 'usuarioId', Sequelize.INTEGER);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn ('atividade', 'usuarioId');
  }
};
