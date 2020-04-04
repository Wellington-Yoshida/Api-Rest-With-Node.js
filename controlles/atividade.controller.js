const db = require('../db/models');

const createAtividade = (req, resp, next) => {

    db.atividade
        .create({descricao: req.body.descricao, concluido: req.body.concluido})
        .then(retorno => resp.send(retorno));
}

module.exports = {
    createAtividade
}