import { useEffect, useState } from "react";
import axios from "axios";

type Agendamento = {
  id: number;
  nome: string;
  endereco: string;
  data: string;
  material: string;
};

export default function ListaAgendamentos() {
  const [agendamentos, setAgendamentos] = useState<Agendamento[]>([]);

  useEffect(() => {
    axios.get("http://localhost:3000/agendamentos")
      .then((res) => setAgendamentos(res.data))
      .catch((err) => console.error("Erro ao buscar agendamentos", err));
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Lista de Agendamentos</h2>
      <table className="w-full border border-gray-300 rounded-lg overflow-hidden shadow-md">
        <thead className="bg-green-600 text-white">
          <tr>
            <th className="py-2 px-3">Nome</th>
            <th className="py-2 px-3">Endereço</th>
            <th className="py-2 px-3">Data</th>
            <th className="py-2 px-3">Material</th>
          </tr>
        </thead>
        <tbody>
          {agendamentos.map((ag) => (
            <tr key={ag.id} className="border-t text-center hover:bg-green-50">
              <td className="py-2 px-3">{ag.nome}</td>
              <td className="py-2 px-3">{ag.endereco}</td>
              <td className="py-2 px-3">{ag.data}</td>
              <td className="py-2 px-3">{ag.material}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
