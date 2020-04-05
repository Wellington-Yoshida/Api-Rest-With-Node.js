const express = require('express');
const app = require('../config/server');
const atividadeController = require('../controlles/atividadeController');

const router = express.Router();
app.use('/api/atividade', router);

router.post('/nova-atividade', atividadeController.createAtividade);

router.get('/findAll-atividades', atividadeController.findAllAtividade);

router.delete('/deleteBy-atividades/:id', atividadeController.deleteByAtividade);

router.put('/updateBy-atividades/:id', atividadeController.updateByAtividade);