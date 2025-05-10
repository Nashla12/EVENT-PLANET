import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // 👈 AÑADIDO useNavigate

const DatosPersonas = () => {
  const { plan } = useParams();
  const navigate = useNavigate(); // 👈 AÑADIDO

  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    telefono: '',
    direccion: '',
    email: '',
    planSeleccionado: plan
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos ingresados:', formData);

    // navega al siguiente formulario
    navigate('/registro/evento', { state: { formData } }); // 👈 NUEVO
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Datos</h2>
      <p><strong>Plan seleccionado:</strong> {plan}</p>

      <label>
        Nombre:
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Apellido:
        <input
          type="text"
          name="apellido"
          value={formData.apellido}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Teléfono:
        <input
          type="text"
          name="telefono"
          value={formData.telefono}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Dirección:
        <input
          type="text"
          name="direccion"
          value={formData.direccion}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Correo electrónico:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>

      <button type="submit">Siguiente</button>
    </form>
  );
};

export default DatosPersonas;
