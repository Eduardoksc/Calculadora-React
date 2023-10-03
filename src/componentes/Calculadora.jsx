import React, { useState, useEffect } from 'react';

function Calculadora() {
  const [input, setInput] = useState('');

  useEffect(() => {
    const handleKeyPress = (event) => {
      const teclaPresionada = event.key;

      // Verificar si la tecla presionada es un número del 0 al 9
      if (/^[0-9]$/.test(teclaPresionada)) {
        setInput(input + teclaPresionada);
      }
    };

    // Agregar un event listener para el evento 'keydown'
    window.addEventListener('keydown', handleKeyPress);

    // Remover el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [input]);

  return (
    <div>
      <input type="text" value={input} readOnly />
      {/* Resto de la interfaz de la calculadora */}
    </div>
  );
}

export default Calculadora;
