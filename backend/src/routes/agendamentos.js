let agendamentos = [];
let contadorId = 1;

function criarAgendamento({ nome, tipo, data }) {
  const agendamento = {
    id: contadorId++,
    nome,
    tipo,
    data,
    criadoEm: new Date()
  };
  agendamentos.push(agendamento);
  return agendamento;
}

function listarAgendamentos() {
  return agendamentos;
}

module.exports = { criarAgendamento, listarAgendamentos };
