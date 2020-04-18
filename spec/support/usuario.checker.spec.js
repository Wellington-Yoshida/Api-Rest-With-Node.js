const usuarioChecker = require('../../service/checker/usuario.checker');

function createDtoUsuarioERROR() {
    return req = {
        body: {
            nome: " ",
        }
    }
}

function createDtoUsuarioSUCESS() {
    return req = {
        body: {
            nome: "Create new User",
        }
    }
}

describe('validaCamposObrigatorios', () => {
    it('deve retornar true caso todos os campos obrigatorios estiverem preenchidos corretamente', () => {
        const req = createDtoUsuarioSUCESS();
        expect(usuarioChecker.validaCamposObrigatorios(req)).toEqual(true);
    })
})

describe('validaCamposObrigatorios', () => {
    it('deve retornar false quando campos obrigatórios não estiverem preenchidos corretamente', () => {
        const req = createDtoUsuarioERROR();
        expect(usuarioChecker.validaCamposObrigatorios(req)).toEqual(false);
    })
})