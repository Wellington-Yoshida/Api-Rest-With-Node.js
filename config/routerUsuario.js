const express = require('express');
const app = require('./server');
const usuarioController = require('../controlles/usuarioController');

const router = express.Router();

app.use('/api/usuario', router);

router.post('/create-usuario', usuarioController.createUser);