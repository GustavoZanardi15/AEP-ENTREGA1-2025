import { Link, Outlet } from "react-router-dom";


export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-green-700 text-white py-4 px-8 shadow-md flex justify-between items-center">
        <h1 className="text-xl font-bold">Sistema de Coletas</h1>
        <nav className="space-x-4">
          <Link to="/" className="hover:underline">
            Início
          </Link>
          <Link to="/agendar" className="hover:underline">
            Agendar Coleta
          </Link>
          <Link to="/agendamentos" className="hover:underline">
            Lista de Agendamentos
          </Link>
        </nav>
      </header>

      <main className="flex-grow p-6">
        <Outlet />
      </main>
    </div>
  );
}
