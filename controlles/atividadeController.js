const db = require('../db/models');
const atividadeService = require('../service/atividade.service');

const createAtividade = (req, resp, next) => {
     atividadeService.saveAtividade(req, resp, next);
}

const findAllAtividade = (req, resp, next) => {
  atividadeService.findAllAtividades(req, resp);
}

const deleteByAtividade = (req, resp, next) => {
  atividadeService.deleteAtividadeById(req, resp, next);
}

const updateByAtividade = (req, resp, next) => {
  atividadeService.updateAtividade(req, resp, next);
}


module.exports = {
    createAtividade,
    findAllAtividade,
    deleteByAtividade,
    updateByAtividade
}