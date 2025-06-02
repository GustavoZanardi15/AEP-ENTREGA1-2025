import { useState } from "react";

export default function AgendarColeta() {
  const [form, setForm] = useState({
    nome: "",
    endereco: "",
    tipoResiduo: "",
    data: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Agendamento enviado:", form);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-lg bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Agendar Coleta</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-1 font-medium">Nome completo</label>
            <input
              type="text"
              name="nome"
              value={form.nome}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Endereço</label>
            <input
              type="text"
              name="endereco"
              value={form.endereco}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Tipo de Resíduo</label>
            <select
              name="tipoResiduo"
              value={form.tipoResiduo}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            >
              <option value="">Selecione</option>
              <option value="papel">Papel</option>
              <option value="plástico">Plástico</option>
              <option value="metal">Metal</option>
              <option value="vidro">Vidro</option>
              <option value="eletrônicos">Eletrônicos</option>
            </select>
          </div>
          <div>
            <label className="block mb-1 font-medium">Data da Coleta</label>
            <input
              type="date"
              name="data"
              value={form.data}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
          >
            Enviar Agendamento
          </button>
        </form>
      </div>
    </div>
  );
}
