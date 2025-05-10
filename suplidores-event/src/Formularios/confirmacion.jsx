import React from 'react';
import { useLocation } from 'react-router-dom';

const Confirmacion = () => {
  const location = useLocation();
  const datosFinales = location.state.formData;

  const handleFinalSubmit = () => {
    console.log('Enviando datos al backend:', datosFinales);
    // Aquí puedes usar fetch o axios para enviar
    alert('Datos enviados correctamente ✅');
  };

  return (
    <div>
      <h2>Confirmar Datos</h2>
      <pre>{JSON.stringify(datosFinales, null, 2)}</pre>

      <button onClick={handleFinalSubmit}>Enviar</button>
    </div>
  );
};

export default Confirmacion;
