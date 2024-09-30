import React from 'react'
import TarjetaPelicula from '../components/tarjetaPelicula';
import padrinoImg from '../assets/img/padrino.jpg';
import inseptionImg from '../assets/img/inseption.jpg';
import interstellarImg from '../assets/img/interestellar.jpg';
import peleaImg from '../assets/img/pelea.jpg';
import gumpImg from '../assets/img/gump.jpg';
import matrixImg from '../assets/img/matrix.jpg';
import batmanImg from '../assets/img/batman.jpg';
import señorImg from '../assets/img/señor.jpg';
import pulpImg from '../assets/img/pulp.jpg';


export const Inicio = () => {
    const peliculas = [
          {
            titulo: 'El padrino',
            fechaEstreno: '15-03-1972',
            genero: 'Drama, Crimen',
            descripcion: 'La compleja historia de una familia mafiosa liderada por un i...',
            urlPoster: padrinoImg
          },
          {
            titulo: 'Inception',
            fechaEstreno: '2010-07-16',
            genero: 'Acción, Ciencia Ficción',
            descripcion: 'Un ladrón que roba secretos a través de la tecnología de...',
            urlPoster: inseptionImg
          },
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
            titulo: 'Forrest Gump',
            fechaEstreno: '1994-07-06',
            genero: 'Drama, Romance',
            descripcion: 'La vida de Forrest Gump, un hombre con un coeficiente...',
            urlPoster: gumpImg
          },
          {
            titulo: 'Matrix',
            fechaEstreno: '1999-03-31',
            genero: 'Ciencia Ficción',
            descripcion: 'Un hacker informático descubre la verdadera naturaleza de...',
            urlPoster: matrixImg
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
          {
            titulo: 'Pulp Fiction',
            fechaEstreno: '1994-10-14',
            genero: 'Crimen, Drama',
            descripcion: 'Las vidas de dos sicarios, un boxeador, y una...',
            urlPoster: pulpImg
          }
        ];


  return (
   <div className="inicio">
      <h1>Películas</h1>
      <div className="lista-peliculas">
        {peliculas.map((pelicula, index) => (
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
