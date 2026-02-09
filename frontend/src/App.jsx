import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Accueil from "./pages/accueil/Accueil";
import Machine from "./pages/machine/Machine";

function App() {
  return (
    <div className="min-h-screen">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/accueil" element={<Accueil />} />
        <Route path="/machine" element={<Machine />} />
      </Routes>
    </div>
  );
}

export default App;