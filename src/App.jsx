import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Componentes/Nav';
import About from './Componentes/About';
import Tecnologis from './Componentes/Tecnologis';
import Proyectos from './Componentes/Proyectos';
import Contacto from './Componentes/Contacto';

import Hero from './Componentes/Hero';

function App() {
  return (
    <Router>
      <Nav />
      
      <Routes>
        <Route path="/" element={<Hero/>} />
      </Routes>
      <About />
      
      <Tecnologis/>
      <Proyectos />
      <Contacto />
 
      
    </Router>
  );

}


export default App;

