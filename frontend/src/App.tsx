import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AgendarColeta from './pages/AgendarColeta'
import ListaAgendamentos from './pages/ListaAgendamentos'
import Header from './components/Header'

export default function App() {
  return (
    <Router>
      <Header />
      <main className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/agendar" element={<AgendarColeta />} />
          <Route path="/agendamentos" element={<ListaAgendamentos />} />
        </Routes>
      </main>
    </Router>
  )
}
