const db = require('../db/models');

const createAtividade = (req, resp, next) => {

    db.atividade
        .create({descricao: req.body.descricao, concluido: req.body.concluido})
        .then(retorno => resp.send(retorno))
        .catch((err) => { throw new Error('Não foi possível cadastrar está atividade.') });
}

const findAllAtividade = (req, resp, next) => {

    db.atividade
      .findAll({
          order: ['id']
      }).then(resultado => resp.send(resultado))
        .catch((err) => { throw new Error('Não foi localizado nenhuma atividade cadastrada.') })
}

const deleteByAtividade = (req, resp, next) => {

    db.atividade
      .destroy({
          where: { id: req.params.id }
      }).then(resultado => { resp.send('Atividade removida com sucesso.') })
        .catch((err) => { throw new Error('Não foi possível remover está atividade.') })
}

const updateByAtividade = (req, resp, next) => {

    db.atividade
      .update({
        descricao: req.body.descricao,
        concluido: req.body.concluido,
      },
      { 
          where: { id: req.params.id },
          returning: true,
          plain : true
      })
      .then(resultado => { resp.send(resultado) })
      .catch((err) => { throw new Error('Não foi possível atualizar está atividade.') });
}


module.exports = {
    createAtividade,
    findAllAtividade,
    deleteByAtividade,
    updateByAtividade
}