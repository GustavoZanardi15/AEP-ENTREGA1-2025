import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="bg-green-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Coleta Sustentável</h1>
      <nav className="space-x-4">
        <Link to="/" className="hover:underline">Início</Link>
        <Link to="/agendar" className="hover:underline">Agendar Coleta</Link>
        <Link to="/agendamentos" className="hover:underline">Agendamentos</Link>
      </nav>
    </header>
  )
}
