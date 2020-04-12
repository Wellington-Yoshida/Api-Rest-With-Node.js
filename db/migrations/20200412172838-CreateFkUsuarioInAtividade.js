'use strict';

module.exports = {
  
   
  up: (queryInterface, Sequelize) => {
      return queryInterface.addConstraint('atividade', ['usuarioId'], {
        type: 'foreign key',
        name: 'custom_fkey_usuario_id',
        references: { //Required field
          table: 'usuario',
          field: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.removeConstraint('atividade', 'custom_fkey_usuario_id');
  }
};
