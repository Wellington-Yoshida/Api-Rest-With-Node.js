module.exports = (sequelize, DataTypes) => {
    const Atividade = sequelize.define('atividade', {
      descricao: DataTypes.STRING,
      concluido: DataTypes.BOOLEAN,
    });
  
    return Atividade;
  }