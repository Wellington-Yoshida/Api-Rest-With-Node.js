const atividadeChecker = require('../service/checker/atividade.checker');

function createDtoAtividadeERROR() {
    return req = {
        body: {
            descricao: " ",
            concluido: false
        }
    }
}

function createDtoAtividadeSUCESS() {
    return req = {
        body: {
            descricao: "Estudando Jasmine",
            concluido: false
        }
    }
}

describe('verificaCamposObrigatorios()', () => {
    it('deve validar se os campos obrigatórios estão sendo preenchidos corretamente', () => {
        const req = createDtoAtividadeERROR();
        expect(atividadeChecker.verificaCamposObrigatorios(req)).toEqual(false);
    })
})

describe('verificaCamposObrigatorios', () => {
    it('deve retornar true quando todos os campos obrigatórios estiverem preenchidos', () => {
        const req = createDtoAtividadeSUCESS();
        expect(atividadeChecker.verificaCamposObrigatorios(req)).toEqual(true);
    });
})