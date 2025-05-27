const express = require('express');
const cors = require('cors');
const { criarAgendamento, listarAgendamentos } = require('./models/agendamento');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/agendamentos', (req, res) => {
  const { nome, tipo, data } = req.body;
  if (!nome || !tipo || !data) {
    return res.status(400).json({ erro: 'Preencha todos os campos' });
  }
  const agendamento = criarAgendamento({ nome, tipo, data });
  res.status(201).json(agendamento);
});

app.get('/agendamentos', (req, res) => {
  res.json(listarAgendamentos());
});

app.listen(3000, () => {
  console.log('🚀 Servidor rodando na porta 3000');
});
