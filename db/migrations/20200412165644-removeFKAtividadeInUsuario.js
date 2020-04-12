'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.removeConstraint('usuario', 'usuario_atividadeId_fkey');
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.addConstraint('usuario', ['atividadeId'], {
        type: 'foreign key',
        name: 'usuario_atividadeId_fkey',
        references: {
          model: 'atividade',
          key: 'id'
        }
      });
  }
};