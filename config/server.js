const port = 3003;

const bodyParse = require('body-parser'); // Ajuda a parse da requisição ex JSON para um Objeto.
const express = require('express');
const server = express();

server.use(bodyParse.urlencoded({ extended: true })); // Para toda requisição que chegar no backend irá passar para bodyParse.
server.use(bodyParse.json()); // Caso o body da requisição nao seja de formulario caso de cima, ele ira verificar se é do tipo JSON e fazer o parse para um objeto.

//Criando servidor passando a porta.
server.listen(port, () => {
    console.log(`BACKEND is running on port: ${port}.`);
});
