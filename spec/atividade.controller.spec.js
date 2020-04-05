const Request = require('request');

describe('AtividadeController', () => {
    var server;
    beforeAll(() => {
        server = require('../loader');
    });
    describe('GET - findAllAtividade', () => {
        var data = {};
        beforeAll((done) => {
            Request.get('http://localhost:3000/api/atividade/findAll-atividades', (error, response, body) => {
                data.status = response.statusCode;
                data.body = body;
                done();
            });
        });
        it('Status is equal 200', () => {
            expect(data.status).toEqual(200);
        });
    });
});
