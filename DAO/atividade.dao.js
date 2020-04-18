const db = require('../db/models');

const saveAtividade = (req, resp) => {
    db.atividade
        .create({descricao: req.body.descricao, concluido: req.body.concluido, usuarioId: req.body.usuarioId})
        .then(retorno => resp.send(retorno))
        .catch((err) => {throw new Error('Não foi possível cadastrar está atividade.') });
    
} 

const findAllAtividades = (req, resp) => { 
    db.atividade
      .findAll({
          order: ['id']
      }).then(resultado => resp.status(200).send(resultado))
        .catch((err) => { throw new Error('Não foi localizado nenhuma atividade cadastrada.') })
}

const deleteAtividadeById = (req, resp) => {
    db.atividade
      .destroy({
          where: { id: req.params.id }
      }).then(resultado => { resp.send('Atividade removida com sucesso.') })
        .catch((err) => { throw new Error('Não foi possível remover está atividade.') })
}

const updateAtividade = (req, resp) => {
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
    saveAtividade,
    findAllAtividades,
    deleteAtividadeById,
    updateAtividade
}