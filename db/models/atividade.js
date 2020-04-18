module.exports = (sequelize, DataTypes) => {
    const Atividade = sequelize.define('atividade', {
      descricao: DataTypes.STRING,
      concluido: DataTypes.BOOLEAN,
      usuarioId: DataTypes.INTEGER
    },
    { underscored: true });
    associate = (models) => {
      Atividade.belongsTo(models.Usuario, {foreignKey: usuario_id, as: 'usuario'})
    };
    return Atividade;
  }