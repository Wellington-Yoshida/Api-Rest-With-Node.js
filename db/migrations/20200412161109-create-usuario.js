'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('usuario', 
        { 
          id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
          },
          nome: {
            allowNull: false,
            type: Sequelize.STRING,
          },
          atividadeId: {
            allowNull: false,
            type: Sequelize.INTEGER,
            references: {         // User belongsTo Company 1:1
              model: 'atividade',
              key: 'id'
            }
          }
        } 
      );
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('usuario');
  }
};
