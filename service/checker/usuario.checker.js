const validaCamposObrigatorios = (req, resp) => {
    if (req.body.nome != null
        && req.body.nome.trim() != '') {
            return true;
    }
    return false;
}

module.exports = {
    validaCamposObrigatorios,
}