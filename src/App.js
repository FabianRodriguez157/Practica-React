import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Inicio } from './screens/inicio';
import NavBar from './components/navBar';
import Contacto from './screens/contacto';
import Guardados from './screens/guardados';


function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/contacto" element={<Contacto/>}/>
          <Route path="/inicio" element={<Inicio/>}/>
          <Route path="/guardados" element={<Guardados/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
