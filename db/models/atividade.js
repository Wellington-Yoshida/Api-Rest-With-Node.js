module.exports = (sequelize, DataTypes) => {
    const Atividade = sequelize.define('atividade', {
      descricao: DataTypes.STRING,
      concluido: DataTypes.BOOLEAN,
      usuarioId: DataTypes.INTEGER
    });
    Atividade.associate = function(models) {
      Atividade.belongsTo(models.Company, {foreignKey: 'usuarioId', as: 'usuario'})
  };
    return Atividade;
  }