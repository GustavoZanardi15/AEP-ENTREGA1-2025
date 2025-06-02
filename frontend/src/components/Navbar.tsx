// src/components/Navbar.tsx
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-green-700 text-white py-4 px-8 shadow-md flex justify-between items-center z-50">
      <h1 className="text-xl font-bold">Sistema de Coletas</h1>
      <nav className="space-x-6">
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
  );
}
