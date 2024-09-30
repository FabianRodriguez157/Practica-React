import React from 'react'
import TarjetaPelicula from '../components/tarjetaPelicula';
import interstellarImg from '../assets/img/interestellar.jpg';
import peleaImg from '../assets/img/pelea.jpg';
import batmanImg from '../assets/img/batman.jpg';
import señorImg from '../assets/img/señor.jpg';

const Guardados = () => {
    const peliculasGuardadas = [
          {
            titulo: 'Interstellar',
            fechaEstreno: '2014-11-07',
            genero: 'Aventura, Drama, Ciencia Ficción',
            descripcion: 'Un grupo de exploradores viajan a través de un agujero de gusano...',
            urlPoster: interstellarImg
          },
          {
            titulo: 'El club de la pelea',
            fechaEstreno: '1999-10-15',
            genero: 'Drama',
            descripcion: 'Un hombre insomne y un vendedor de jabón forman...',
            urlPoster: peleaImg
          },
          
          {
            titulo: 'Batman: The Dark Knight',
            fechaEstreno: '2008-07-18',
            genero: 'Acción, Crimen, Drama',
            descripcion: 'Batman se enfrenta a su mayor reto cuando el criminal...',
            urlPoster: batmanImg
          },
          {
            titulo: 'El señor de los anillos: La comunidad del anillo',
            fechaEstreno: '2001-12-19',
            genero: 'Aventura, Fantasía, Acción',
            descripcion: 'Un hobbit emprende una aventura épica para destruir...',
            urlPoster: señorImg
          },
        ];


  return (
   <div className="guardados">
      <h1>Películas Guardadas</h1>
      <div className="lista-peliculas">
        {peliculasGuardadas.map((pelicula, index) => (
          <TarjetaPelicula
          key={index}
          titulo={pelicula.titulo}
          fechaEstreno={pelicula.fechaEstreno}
          genero={pelicula.genero}
          descripcion={pelicula.descripcion}
          urlPoster={pelicula.urlPoster}
          />
        ))}
      </div>
    </div>
  )
}
  export default Guardados;