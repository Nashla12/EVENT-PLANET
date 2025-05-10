import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const DatosEvento = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Recupera datos anteriores y agrega nuevos campos
  const [formData, setFormData] = useState({
    ...location.state.formData, // 👈 datos de DatosPersonas
    nombreEvento: '',
    fechaEvento: '',
    ubicacionEvento: '',
    descripcionEvento: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos acumulados:', formData);

    // Redirige al último paso, pasando todos los datos
    navigate('/registro/confirmacion', { state: { formData } });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Datos del Evento</h2>

      <label>
        Nombre del evento:
        <input
          type="text"
          name="nombreEvento"
          value={formData.nombreEvento}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Fecha del evento:
        <input
          type="date"
          name="fechaEvento"
          value={formData.fechaEvento}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Ubicación del evento:
        <input
          type="text"
          name="ubicacionEvento"
          value={formData.ubicacionEvento}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Descripción del evento:
        <textarea
          name="descripcionEvento"
          value={formData.descripcionEvento}
          onChange={handleChange}
          required
        ></textarea>
      </label>

      <button type="submit">Siguiente</button>
    </form>
  );
};

export default DatosEvento;
