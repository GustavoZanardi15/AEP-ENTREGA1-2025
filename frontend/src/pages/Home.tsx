import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-green-100 to-green-300">
      <div className="bg-white p-10 rounded-xl shadow-lg max-w-md text-center space-y-6">
        <h1 className="text-3xl font-bold text-green-800">Bem-vindo!</h1>
        <p className="text-gray-700">Agende sua coleta de resíduos recicláveis de forma rápida e fácil.</p>

        <div className="flex flex-col gap-4">
          <Link
            to="/agendar"
            className="bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
          >
            Agendar Coleta
          </Link>

          <Link
            to="/agendamentos"
            className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Ver Agendamentos
          </Link>
        </div>
      </div>
    </div>
  );
}
