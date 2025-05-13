import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import "./Formularios/datos.css";
import "./home.css";
import "./index.css";
import "./navbar.css";
import "./vende.css";

import Navbar from "./components/navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Perfil from "./pages/Perfil";
import Productos from "./pages/Productos";
import Servicios from "./pages/servicios";
import Vende from "./pages/Vende";


function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path ="/navbar" element={<Navbar />} />
            <Route path="/home" element={<Home />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/vende" element={<Vende />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro/:plan" element={<DatosPersonas />} />
            <Route path="/registro/evento" element={<DatosProveedor />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
