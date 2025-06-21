import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Inicio from "./Pantallas/Inicio";
import Registro from "./Pantallas/Registro";
import Iniciosesion from "./Pantallas/Iniciosesion";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/registro" element={<Registro />} />
                <Route path="/login" element={<Iniciosesion />} />
            </Routes>
        </Router>
    );
}

export default App;
