module.exports = (sequelize, DataTypes) => {
    const Usuario = sequelize.define('usuario', {
      nome: DataTypes.STRING,
      atividadeId: DataTypes.INTEGER
    });
    Usuario.associate = function(models) {
        Usuario.belongsTo(models.Company, {foreignKey: 'atividadeId', as: 'atividade'})
    };
    return Usuario;
  }