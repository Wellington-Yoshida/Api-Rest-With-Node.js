'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('atividade', 
        { id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
          },
          descricao: {
            allowNull: false,
            type: Sequelize.STRING,
          },
          concluido: {
            allowNull: false,
            type: Sequelize.BOOLEAN,
          },
        }
      );
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('atividade');
  }
};
