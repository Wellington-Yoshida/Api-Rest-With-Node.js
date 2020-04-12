module.exports = (sequelize, DataTypes) => {
    const Atividade = sequelize.define('atividade', {
      descricao: DataTypes.STRING,
      concluido: DataTypes.BOOLEAN,
    });
    Atividade.associate = function(models) {
      Atividade.hasMany(models.Usuario, {as: 'usuarios'})
    };
    return Atividade;
  }