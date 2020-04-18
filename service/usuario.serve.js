const usuarioChecker = require('../service/checker/usuario.checker');
const usuarioHelper = require('../service/helper/usuario.helper');
const usuarioDAO = require('../DAO/usuario.dao');

const validaCamposObrigatorios = (req, resp) => {
    if (!usuarioChecker.validaCamposObrigatorios(req, resp)) {
        usuarioHelper.formataMensagemErroCadastroUsuario(resp);
        return false;
    }
    return true;
}

const saveUsuario = (req, resp, next) => {
    if (validaCamposObrigatorios(req, resp)) {
        usuarioDAO.saveUsuario(req, resp);
    }
}

module.exports = {
    validaCamposObrigatorios,
    saveUsuario,
}