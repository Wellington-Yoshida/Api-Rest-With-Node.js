module.exports = (sequelize, DataTypes) => {
    const usuario = sequelize.define('usuario', {
      nome: DataTypes.STRING,
    },{ underscored: true });
    usuario.associate  = (models) => {
      usuario.hasMany(models.atividade, {as: 'atividades', foreignKey: 'usuario_id'})
    };
    return usuario;
  }