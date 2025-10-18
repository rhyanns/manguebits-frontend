
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import AderirComunidade from "./pages/AderirComunidade/AderirComunidade";
import Comunidades from "./pages/Comunidade/Comunidade";
import Login from "./pages/Participante/Login";
import Register from "./pages/Participante/Register";




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aderir" element={<AderirComunidade />} />
        <Route path="/comunidade/:id" element={<Comunidades />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
