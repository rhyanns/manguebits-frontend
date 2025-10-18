
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./paginas/Home/Home";
import AderirComunidade from "./paginas/AderirComunidade/AderirComunidade";
import Comunidades from "./paginas/Comunidade/Comunidade";
import Login from "./paginas/Participante/Login";




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aderir" element={<AderirComunidade />} />
        <Route path="/comunidade/:id" element={<Comunidades />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
