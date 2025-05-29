const fs = require('fs');
const path = require('path');

const caminhoArquivo = path.join(__dirname, '../data/agendamentos.json');

function lerAgendamentos() {
  const dados = fs.readFileSync(caminhoArquivo, 'utf-8');
  return JSON.parse(dados);
}

function salvarAgendamentos(agendamentos) {
  fs.writeFileSync(caminhoArquivo, JSON.stringify(agendamentos, null, 2));
}

function listarAgendamentos() {
  return lerAgendamentos();
}

function criarAgendamento({ nome, tipo, data }) {
  const agendamentos = lerAgendamentos();

  const novoAgendamento = {
    id: agendamentos.length > 0 ? agendamentos[agendamentos.length - 1].id + 1 : 1,
    nome,
    tipo,
    data,
    criadoEm: new Date().toISOString()
  };

  agendamentos.push(novoAgendamento);
  salvarAgendamentos(agendamentos);

  return novoAgendamento;
}

module.exports = { listarAgendamentos, criarAgendamento };
