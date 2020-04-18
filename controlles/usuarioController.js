const db = require('../db/models');
const usuarioService = require('../service/usuario.serve');

const createUser = (req, resp, next) => {
    usuarioService.saveUsuario(req, resp, next);
}

module.exports = {
    createUser
}