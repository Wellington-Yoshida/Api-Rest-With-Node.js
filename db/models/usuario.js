module.exports = (sequelize, DataTypes) => {
    const Usuario = sequelize.define('usuario', {
      nome: DataTypes.STRING,
    });
    Usuario.associate = function(models) {
        Usuario.hasMany(models.Atividade, {as: 'atividades'})
    };
    return Usuario;
  }