import { useState } from "react";

function Navbar() {
  const [profileOpen, setProfileOpen] = useState(false);
  const [asideOpen, setAsideOpen] = useState(true);

  const toggleProfile = () => {
    setProfileOpen(!profileOpen);
  };

  const toggleAside = () => {
    setAsideOpen(!asideOpen);
  };

  return (
    <main className="min-h-screen w-full bg-gray-100 text-gray-700">
      {/* Header */}
      <header className="flex w-full items-center justify-between border-b-2 border-gray-200 bg-white p-2">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <button type="button" className="text-3xl" onClick={toggleAside}>
            ☰
          </button>
          <div>Logo</div>
        </div>

        {/* Button Profile */}
        <div>
          <button
            type="button"
            onClick={toggleProfile}
            className="h-9 w-9 overflow-hidden rounded-full"
          >
            <img src="/api/placeholder/40/40" alt="perfil" />
          </button>

          {/* Dropdown Profile */}
          {profileOpen && (
            <div
              className="absolute right-2 mt-1 w-48 divide-y divide-gray-200 rounded-md border border-gray-200 bg-white shadow-md"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center space-x-2 p-2">
                <img
                  src="/api/placeholder/40/40"
                  alt="perfil"
                  className="h-9 w-9 rounded-full"
                />
                <div className="font-medium">Hafiz Haziq</div>
              </div>

              <div className="flex flex-col space-y-3 p-2">
                <a href="#" className="transition hover:text-blue-600">
                  Mi Perfil
                </a>
                <a href="#" className="transition hover:text-blue-600">
                  Editar Perfil
                </a>
                <a href="#" className="transition hover:text-blue-600">
                  Configuración
                </a>
              </div>

              <div className="p-2">
                <button className="flex items-center space-x-2 transition hover:text-blue-600">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>
                  <div>Cerrar Sesión</div>
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      <div className="flex">
        {/* Aside/Sidebar */}
        {asideOpen && (
          <aside
            className="flex w-72 flex-col space-y-2 p-2"
            style={{ height: "90.5vh", backgroundColor: "transparent" }}
          >
            <a
              href="/Home"
              className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600"
            >
              <span className="text-2xl">🏠</span>
              <span>Inicio</span>
            </a>

            <a
              href="/servicios"
              className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600"
            >
              <span className="text-2xl">🛒</span>
              <span>Servicios</span>
            </a>

            <a
              href="/Productos"
              className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600"
            >
              <span className="text-2xl">🛍️</span>
              <span>Productos</span>
            </a>

            <a
              href="/Vende"
              className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600"
            >
              <span className="text-2xl">❤️</span>
              <span>Vende</span>
            </a>

            <a
              href="/perfil"
              className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600"
            >
              <span className="text-2xl">👤</span>
              <span></span>
            </a>
          </aside>
        )}
        {/* Main Content */}
        <div className="w-full p-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
          quam odit officiis magni doloribus ipsa dolore, dolores nihil
          accusantium labore, incidunt autem iure quae vitae voluptate, esse
          asperiores aliquam repellat. Harum aliquid non officiis porro at
          cumque eaque inventore iure. Modi sunt optio mollitia repellat sed ab
          quibusdam quos harum!
        </div>
      </div>
    </main>
  );
}

export default Navbar;
