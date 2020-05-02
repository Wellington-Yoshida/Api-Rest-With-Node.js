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

const findAllUser = (req, resp) => {
    usuarioDAO.findAllUser(req, resp);
}

const saveUsuario = (req, resp, next) => {
    if (validaCamposObrigatorios(req, resp)) {
        usuarioDAO.saveUsuario(req, resp);
    }
}

const deleteUserById = (req, resp) => {
    usuarioDAO.deleteUserById(req, resp);
}

const updateUser = (req, resp) => {
    usuarioDAO.updateUser(req, resp);
}

module.exports = {
    validaCamposObrigatorios,
    saveUsuario,
    findAllUser,
    deleteUserById,
    updateUser
}