module.exports = (sequelize, DataTypes) => {
    const atividade = sequelize.define('atividade', {
      descricao: DataTypes.STRING,
      concluido: DataTypes.BOOLEAN,
      usuario_id: DataTypes.INTEGER
    },
    { underscored: true });
    atividade.associate = (models) => {
      atividade.belongsTo(models.usuario, {as: 'usuario', foreignKey: 'usuario_id'})
    };
    return atividade;
  }