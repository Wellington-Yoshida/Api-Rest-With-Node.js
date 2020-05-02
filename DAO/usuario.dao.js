const db = require('../db/models');

const saveUsuario = (req, resp) => {
    db.usuario
      .create({nome: req.body.nome})
      .then(retorno => resp.status(201).send(retorno))
      .catch((err) => {resp.send('Não foi possível cadastrar usuário.') });
}

const findAllUser = async  (req, resp) => {
    const user = await db.usuario.findAll( { include: [ { model: db.atividade, as: 'atividades' } ] } );
    resp.send(user);
}

const deleteUserById = (req, resp) => {
    db.usuario
      .destroy({
          where: { id: req.params.id }
      }).then(resultado => { resp.send('Usuario removido com sucesso.') })
        .catch((err) => { resp.send('Não foi possível remover este usuário.') })
}

const updateUser = (req, resp) => {
    db.usuario
      .update({
        nome: req.body.nome,
      },
      { 
        where: { id: req.params.id },
        returning: true,
        plain : true
      })
      .then(resultado => { resp.send(resultado) })
      .catch((err) => {  resp.send('Não foi possível atualizar este usuário.') });
}

module.exports = {
    saveUsuario,
    findAllUser,
    deleteUserById,
    updateUser
}