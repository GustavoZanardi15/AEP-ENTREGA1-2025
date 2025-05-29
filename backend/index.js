const express = require('express');
const cors = require('cors');
const { criarAgendamento, listarAgendamentos } = require('./src/models/agendamento');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Servidor funcionando!');
});

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

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
