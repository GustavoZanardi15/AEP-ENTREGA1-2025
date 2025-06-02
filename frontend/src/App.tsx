import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AgendarColeta from "./pages/AgendarColeta";
import ListaAgendamentos from "./pages/ListaAgendamentos";
import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="agendar" element={<AgendarColeta />} />
          <Route path="agendamentos" element={<ListaAgendamentos />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
