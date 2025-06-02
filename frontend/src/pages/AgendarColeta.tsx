import React, { useState } from 'react';
export function AgendarColeta() {
  const [formData, setFormData] = useState({
    nome: '',
    endereco: '',
    data: '',
    hora: '',
    tipoResiduo: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Agendamento feito para ${formData.nome} no dia ${formData.data} às ${formData.hora}`);
  
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form 
        onSubmit={handleSubmit} 
        className="bg-white p-8 rounded shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl mb-6 font-semibold text-center">Agendar Coleta</h2>

        <label className="block mb-2 font-medium" htmlFor="nome">Nome Completo</label>
        <input
          id="nome"
          name="nome"
          type="text"
          value={formData.nome}
          onChange={handleChange}
          required
          className="w-full mb-4 p-2 border border-gray-300 rounded"
          placeholder="Seu nome completo"
        />

        <label className="block mb-2 font-medium" htmlFor="endereco">Endereço</label>
        <input
          id="endereco"
          name="endereco"
          type="text"
          value={formData.endereco}
          onChange={handleChange}
          required
          className="w-full mb-4 p-2 border border-gray-300 rounded"
          placeholder="Rua, número, bairro"
        />

        <label className="block mb-2 font-medium" htmlFor="data">Data da Coleta</label>
        <input
          id="data"
          name="data"
          type="date"
          value={formData.data}
          onChange={handleChange}
          required
          className="w-full mb-4 p-2 border border-gray-300 rounded"
        />

        <label className="block mb-2 font-medium" htmlFor="hora">Hora da Coleta</label>
        <input
          id="hora"
          name="hora"
          type="time"
          value={formData.hora}
          onChange={handleChange}
          required
          className="w-full mb-4 p-2 border border-gray-300 rounded"
        />

        <label className="block mb-2 font-medium" htmlFor="tipoResiduo">Tipo de Resíduo</label>
        <select
          id="tipoResiduo"
          name="tipoResiduo"
          value={formData.tipoResiduo}
          onChange={handleChange}
          required
          className="w-full mb-6 p-2 border border-gray-300 rounded"
        >
          <option value="">Selecione o tipo</option>
          <option value="papel">Papel</option>
          <option value="plastico">Plástico</option>
          <option value="vidro">Vidro</option>
          <option value="organico">Orgânico</option>
          <option value="metal">Metal</option>
        </select>

        <button
          type="submit"
          className="w-full bg-green-600 text-white font-semibold py-2 rounded hover:bg-green-700 transition"
        >
          Agendar
        </button>
      </form>
    </div>
  );
}
