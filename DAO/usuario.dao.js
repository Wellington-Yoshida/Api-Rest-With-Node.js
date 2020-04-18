const db = require('../db/models');

const saveUsuario = (req, resp) => {
    db.usuario
      .create({nome: req.body.nome})
      .then(retorno => resp.status(201).send(retorno))
      .catch((err) => {throw new Error('Não foi possível cadastrar usuário.') });
}

module.exports = {
    saveUsuario,
}