import React, { useState } from "react";

function App() {
  const [agendamentos, setAgendamentos] = useState([]);
  const [formData, setFormData] = useState({
    nome: "",
    endereco: "",
    dataColeta: "",
    tipoResiduo: "",
  });

  function handleChange(e) {
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  function handleSubmit(e) {
    e.preventDefault();
    setAgendamentos([...agendamentos, formData]);
    setFormData({ nome: "", endereco: "", dataColeta: "", tipoResiduo: "" });
  }

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Agendamento de Coleta de Resíduos</h1>

      <form onSubmit={handleSubmit} className="mb-6 space-y-4">
        <input
          type="text"
          name="nome"
          placeholder="Nome completo"
          value={formData.nome}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />

        <input
          type="text"
          name="endereco"
          placeholder="Endereço"
          value={formData.endereco}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />

        <input
          type="date"
          name="dataColeta"
          value={formData.dataColeta}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />

        <select
          name="tipoResiduo"
          value={formData.tipoResiduo}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        >
          <option value="">Selecione o tipo de resíduo</option>
          <option value="Papel">Papel</option>
          <option value="Plástico">Plástico</option>
          <option value="Metal">Metal</option>
          <option value="Vidro">Vidro</option>
          <option value="Orgânico">Orgânico</option>
        </select>

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Agendar Coleta
        </button>
      </form>

      <h2 className="text-xl font-semibold mb-2">Agendamentos realizados</h2>
      {agendamentos.length === 0 && <p>Nenhum agendamento ainda.</p>}
      <ul>
        {agendamentos.map((agendamento, index) => (
          <li key={index} className="mb-2 border p-2 rounded">
            <strong>Nome:</strong> {agendamento.nome} <br />
            <strong>Endereço:</strong> {agendamento.endereco} <br />
            <strong>Data da Coleta:</strong> {agendamento.dataColeta} <br />
            <strong>Tipo de Resíduo:</strong> {agendamento.tipoResiduo}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
