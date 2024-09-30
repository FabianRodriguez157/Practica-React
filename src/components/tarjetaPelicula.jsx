import React from 'react'

const TarjetaPelicula = ({ titulo, fechaEstreno, genero, descripcion,urlPoster }) => {
  return (
    <div className="tarjeta-pelicula">
      <img src={urlPoster} alt={`Póster de ${titulo}`} className="poster-pelicula" />
      <div className="detalles-pelicula">
        <h2>{titulo}</h2>
        <p><strong>Fecha de Estreno:</strong> {fechaEstreno}</p>
        <p><strong>Género:</strong> {genero}</p>
        <p>{descripcion}</p>
      </div>
    </div>
  )
}

export default TarjetaPelicula



