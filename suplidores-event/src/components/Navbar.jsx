import { Link } from 'react-router-dom';

function navbar() {
  return (
    <nav className="bg-pink-500 text-white p-4 flex justify-between items-center">
      <h1 className="font-bold text-xl">Évoca</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">Inicio</Link>
        <Link to="/servicios" className="hover:underline">Servicios</Link>
        <Link to="/productos" className="hover:underline">Productos</Link>
        <Link to="/vende" className="hover:underline">Vende con nosotros</Link>
        <Link to="/login" className="hover:underline">Login</Link>
      </div>
    </nav>
  );
}

export default navbar;
