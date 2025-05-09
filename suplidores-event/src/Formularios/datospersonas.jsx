import React, { useState } from 'react';

const DatosPersonas = ({ onNext }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    telefono: '',
    direccion: '',
    email: ''
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

    // Aquí puedes conectar al backend más adelante
    // Por ahora solo pasa al siguiente paso
    if (onNext) {
      onNext();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Información Personal</h2>

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
