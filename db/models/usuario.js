module.exports = (sequelize, DataTypes) => {
    const Usuario = sequelize.define('usuario', {
      nome: DataTypes.STRING,
    },{ underscored: true });
    associate = (models) => {
        Usuario.hasMany(models.Atividade, {as: 'atividades'})
    };
    return Usuario;
  }