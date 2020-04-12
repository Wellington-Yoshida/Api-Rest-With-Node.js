'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('usuario', 'undefined');
  },
  
  down: (queryInterface, Sequelize) => {
      return queryInterface.addColumn('usuario', 'undefined', Sequelize.INTEGER);
  }
};
