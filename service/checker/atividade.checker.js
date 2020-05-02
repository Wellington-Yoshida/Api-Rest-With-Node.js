const verificaCamposObrigatorios = function(req) {
    if (req.body.descricao != null 
        && req.body.descricao !== ''
        && req.body.descricao.trim() !== '' 
        && req.body.concluido != null
        && req.body.usuario_id != null) {
            return true;
    }
    return false;
}

module.exports = {
    verificaCamposObrigatorios,
}