import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import "./navBar.css"

const NavBar = () => {

    const [busqueda, setBusqueda] = useState("Matrix");

    const nuevaBusqueda = (busquedaNueva) => {
    setBusqueda(busquedaNueva);

}
  return (
    <div>
      <ul>
        <li><Link to ={"/inicio"}>{"Inicio"}</Link></li>
        <li><Link to ={"/guardados"}>{"Guardados"}</Link></li>
        <li><Link to ={"/contacto"}>{"Contacto"}</Link></li>
      </ul>
      <p>Buscar pelicula con: '{busqueda}'</p>
      <input type='text' onChange={e => nuevaBusqueda(e.target.value)} placeholder='Buscar pelicula'/>
      <button type = "submit">Buscar</button>
    </div>
  )
}

export default NavBar;
