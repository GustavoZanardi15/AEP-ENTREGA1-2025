let idAtual = 1;
const agendamentos = [];

function criarAgendamento({ nome, tipo, data }) {
  const novo = {
    id: idAtual++,
    nome,
    tipo,
    data,
    criadoEm: new Date().toISOString(),
  };
  agendamentos.push(novo);
  return novo;
}

function listarAgendamentos() {
  return agendamentos;
}

module.exports = {
  criarAgendamento,
  listarAgendamentos
};
