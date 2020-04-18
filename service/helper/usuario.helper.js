const messageUtil = require('../../utils/mesage.util');
const tipoStatusRetorno = require('../../enums/tipo.status.retorno');

const formataMensagemErroCadastroUsuario = (resp) => {
    return resp.status(401).json({
        status: tipoStatusRetorno.tipoRetorno.ERROR,
        mesage: messageUtil.CAMPO_NOME_OBRIGATORIO
    }); 
}

module.exports = {
    formataMensagemErroCadastroUsuario,
}