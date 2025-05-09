import { useState } from "react";

function Home() {
  const [, setShowProducts] = useState(false);
  const colors = {
    lightBlue: "#bbe3fb",
    purple: "#cbb4db",
    pink: "#fbaccb",
    lightPink: "#fbcbdb",
    blue: "#a3d3fb",
  };

  return (
    <>
      <div
        className="main-container"
        style={{ backgroundColor: colors.lightBlue }}
      >
        {/* Hero Section */}
        <div
          className="hero-section"
          style={{
            backgroundImage:
              "url('https://i.pinimg.com/736x/42/15/dd/4215dd285396851d5cc493ada9182c57.jpg')",
          }}
        >
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <div className="logo-container">
              <img src="/api/placeholder/200/100" alt="Logo" className="logo" />
            </div>
            <h1>Alquiler de eventos modernos y únicos</h1>
            <p>
              Transforme su evento en una experiencia inolvidable con nuestra
              amplia selección de decoración moderna.
            </p>
            <button
              className="hero-button"
              onClick={() => setShowProducts(true)}
            >
              Ver productos
            </button>
          </div>
        </div>

        {/* Sección de categorías */}
        <div
          className="categories-section"
          style={{ backgroundColor: colors.blue }}
        >
          <div className="categories-container">
            <h2 className="section-title">Nuestras Colecciones</h2>

            <div className="categories-grid">
              {/* Tarjeta 1 */}
              <div className="card">
                <div className="card-image">
                  <img
                    src="/api/placeholder/400/300"
                    alt="Decoración moderna"
                  />
                </div>
                <div
                  className="card-content"
                  style={{ backgroundColor: colors.purple }}
                >
                  <h3>Decoración moderna</h3>
                  <p>
                    Elementos contemporáneos para eventos elegantes y
                    sofisticados.
                  </p>
                  <button
                    className="card-button"
                    style={{ backgroundColor: colors.lightPink }}
                  >
                    Explorar
                  </button>
                </div>
              </div>

              {/* Tarjeta 2 */}
              <div className="card">
                <div className="card-image">
                  <img
                    src="/api/placeholder/400/300"
                    alt="Accesorios y centros de mesa"
                  />
                </div>
                <div
                  className="card-content"
                  style={{ backgroundColor: colors.pink }}
                >
                  <h3>Accesorios</h3>
                  <p>Detalles únicos que harán de su evento algo memorable.</p>
                  <button
                    className="card-button"
                    style={{ backgroundColor: colors.lightBlue }}
                  >
                    Explorar
                  </button>
                </div>
              </div>

              {/* Tarjeta 3 */}
              <div className="card">
                <div className="card-image">
                  <img
                    src="/api/placeholder/400/300"
                    alt="Paquetes completos"
                  />
                </div>
                <div
                  className="card-content"
                  style={{ backgroundColor: colors.lightBlue }}
                >
                  <h3>Paquetes completos</h3>
                  <p>Soluciones integrales para eventos sin complicaciones.</p>
                  <button
                    className="card-button"
                    style={{ backgroundColor: colors.purple }}
                  >
                    Explorar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sección de contacto */}
        <div
          className="contact-section"
          style={{ backgroundColor: colors.lightPink }}
        >
          <div className="contact-container">
            <h2 className="section-title">
              ¿Listo para transformar su evento?
            </h2>
            <p>
              Contáctenos para obtener más información y una cotización
              personalizada para su evento especial.
            </p>
            <div className="contact-form">
              <input
                type="email"
                placeholder="Su correo electrónico"
                className="contact-input"
              />
              <button
                className="contact-button"
                style={{ backgroundColor: colors.purple }}
              >
                Contactar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
