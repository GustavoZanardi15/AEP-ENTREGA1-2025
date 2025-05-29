const express = require('express');
const { criarAgendamento, listarAgendamentos } = require('../models/agendamento');

const router = express.Router();

router.post('/', (req, res) => {
  const { nome, tipo, data } = req.body;
  if (!nome || !tipo || !data) {
    return res.status(400).json({ erro: 'Preencha todos os campos' });
  }
  const agendamento = criarAgendamento({ nome, tipo, data });
  res.status(201).json(agendamento);
});

router.get('/', (req, res) => {
  const agendamentos = listarAgendamentos();
  res.json(agendamentos);
});

module.exports = router;
