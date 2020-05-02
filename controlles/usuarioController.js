const db = require('../db/models');
const usuarioService = require('../service/usuario.serve');

const createUser = (req, resp, next) => {
    usuarioService.saveUsuario(req, resp, next);
}

const findAllUser = (req, resp, next) => {
    usuarioService.findAllUser(req, resp, next);
}

const deleteUserById = (req, resp, next) => {
    usuarioService.deleteUserById(req, resp);
}

const updateUser = (req, resp, next) => {
    usuarioService.updateUser(req, resp);
}

module.exports = {
    createUser,
    findAllUser,
    deleteUserById,
    updateUser
}