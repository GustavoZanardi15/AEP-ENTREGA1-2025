import { useEffect, useState } from "react";

interface Agendamento {
  id: number;
  nome: string;
  endereco: string;
  data: string;
  tipoResiduo: string;
}

export default function ListaAgendamentos() {
  const [agendamentos, setAgendamentos] = useState<Agendamento[]>([]);

  useEffect(() => {
    const dadosFake: Agendamento[] = [
      {
        id: 1,
        nome: "João da Silva",
        endereco: "Rua A, 123",
        data: "2025-06-05",
        tipoResiduo: "Plástico",
      },
      {
        id: 2,
        nome: "Maria Oliveira",
        endereco: "Av. B, 456",
        data: "2025-06-06",
        tipoResiduo: "Papel",
      },
    ];

    setAgendamentos(dadosFake);
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-4 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-green-700 text-center">
        Lista de Agendamentos
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full text-left border">
          <thead className="bg-green-700 text-white">
            <tr>
              <th className="py-3 px-4 border">Nome</th>
              <th className="py-3 px-4 border">Endereço</th>
              <th className="py-3 px-4 border">Data</th>
              <th className="py-3 px-4 border">Tipo de Resíduo</th>
            </tr>
          </thead>
          <tbody>
            {agendamentos.map((agendamento) => (
              <tr key={agendamento.id} className="hover:bg-gray-100">
                <td className="py-2 px-4 border">{agendamento.nome}</td>
                <td className="py-2 px-4 border">{agendamento.endereco}</td>
                <td className="py-2 px-4 border">{agendamento.data}</td>
                <td className="py-2 px-4 border">{agendamento.tipoResiduo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
