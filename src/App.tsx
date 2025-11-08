
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import AderirComunidade from "./pages/AderirComunidade/AderirComunidade";
import CriarComunidade from "./pages/Comunidade/CriarComunidade";
import Comunidades from "./pages/Comunidade/Comunidade";
import Login from "./pages/Participante/Login";
import Register from "./pages/Participante/Register";
import CriarComunidade from "./pages/CriarComunidade/CriarComunidade";




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/criar" element={<CriarComunidade />} />
        <Route path="/aderir" element={<AderirComunidade />} />
        <Route path="/criar-comunidade" element={<CriarComunidade />} />
        <Route path="/comunidade/:id" element={<Comunidades />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
