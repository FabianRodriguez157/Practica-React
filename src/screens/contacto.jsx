import React, { useState } from 'react';

const Contacto = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');

  const manejarEnvio = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', { nombre, email, mensaje });
    setNombre('');
    setEmail('');
    setMensaje('');
  };

  return (
    <div className="contacto">
      <h2>Contacto</h2>
      <div className="informacion-contacto">
        <p><strong>Dirección:</strong> Calle Lima 123, Ciudad Arquipa</p>
        <p><strong>Teléfono:</strong> +51 987 654 321</p>
        <p><strong>Email:</strong> contacto@ejemplo.com</p>
      </div>
      <form onSubmit={manejarEnvio}>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="mensaje">Mensaje:</label>
          <textarea
            id="mensaje"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            required
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contacto;
