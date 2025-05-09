import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./home.css";
import "./index.css";
import "./navbar.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Productos from "./pages/Productos";
import Servicios from "./pages/Servicios";
import Vende from "./pages/Vende";
import "./vende.css";
function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/vende" element={<Vende />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
