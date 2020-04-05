const atividadeDAO = require('../DAO/atividade.dao');
const atividadeChecker = require('../service/checker/atividade.checker');
const atividadeHelper = require('../service/helper/atividade.helper');


const saveAtividade = (req, resp, next) => {
    if (validaCamposObrigatiros(req, resp)) {
        atividadeDAO.saveAtividade(req, resp);
    }
}

const findAllAtividades = (req, resp, next) => {
    atividadeDAO.findAllAtividades(req, resp);
}

const deleteAtividadeById = (req, resp, next) => {
    atividadeDAO.deleteAtividadeById(req, resp);
}

const updateAtividade = (req, resp, next) => {
    if (isCamposValidos(req, resp)) {
        atividadeDAO.updateAtividade(req, resp);
    }
}

const isCamposValidos = (req, resp) => {
    if (!atividadeChecker.verificaCamposObrigatorios(req)) {
        atividadeHelper.formataMesageErrorAtividade(resp)
        return false;
    }
    return true;
}

module.exports = {
    saveAtividade,
    findAllAtividades,
    deleteAtividadeById,
    updateAtividade,
    isCamposValidos
}