const messageUtil = require('../../utils/mesage.util');
const tipoStatusRetorno = require('../../enums/tipo.status.retorno');


const formataMesageErrorAtividade = (resp) => {
    return resp.status(401).json({
        status: tipoStatusRetorno.tipoRetorno.ERROR,
        mesage: messageUtil.CAMPOS_DESCRICAO_CONCLUIDO_OBRIGATORIOS
    });
}

module.exports = {
    formataMesageErrorAtividade,
}