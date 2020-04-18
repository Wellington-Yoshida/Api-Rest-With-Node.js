'use strict';

module.exports = {
  
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('atividade', 'usuario_id', Sequelize.INTEGER);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn ('atividade', 'usuario_id');
  }
};
