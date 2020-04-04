const express = require('express');
const app = require('../config/server');
const atividadeController = require('../controlles/atividade.controller');

const router = express.Router();
app.use('/api/atividade', router);

router.post('/nova-atividade', atividadeController.createAtividade);